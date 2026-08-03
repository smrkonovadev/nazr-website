const fs = require('fs');
const path = require('path');

function getFiles(dir, exts) {
  let results = [];
  if (!fs.existsSync(dir)) return results;
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      if (!fullPath.includes('node_modules') && !fullPath.includes('.next') && !fullPath.includes('.git')) {
        results = results.concat(getFiles(fullPath, exts));
      }
    } else if (exts.includes(path.extname(fullPath).toLowerCase())) {
      results.push(fullPath);
    }
  });
  return results;
}

function main() {
  console.log('Updating image references with Vector Icon preservation...');

  // Identify small vector UI icons (< 50KB SVG) that should remain as .svg for vector crispness
  const publicFiles = getFiles('public', ['.svg', '.png', '.jpg', '.jpeg', '.webp']);
  
  const smallVectorIcons = new Set();
  publicFiles.forEach(f => {
    if (path.extname(f).toLowerCase() === '.svg') {
      const size = fs.statSync(f).size;
      // Icons under 50KB are UI vector paths
      if (size < 50000) {
        smallVectorIcons.add(path.basename(f));
        smallVectorIcons.add(path.basename(f, '.svg'));
      }
    }
  });

  console.log(`Identified ${smallVectorIcons.size / 2} small UI vector icons to retain as pure SVG.`);

  const webpBaseNames = new Set(
    publicFiles
      .filter(f => path.extname(f).toLowerCase() === '.webp')
      .map(f => path.basename(f))
  );

  const srcFiles = getFiles('src', ['.tsx', '.ts', '.jsx', '.js', '.css', '.json']);

  let totalReplacements = 0;
  let filesModifiedCount = 0;

  srcFiles.forEach(filePath => {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;

    // Replace image paths
    content = content.replace(/\/images\/([^"'\`\s\)\}\?#]+)\.(png|svg|jpg|jpeg|webp)/gi, (match, name, ext) => {
      const svgFileName = `${name}.svg`;
      const webpFileName = `${name}.webp`;

      // If it's a small UI icon, keep/restore as .svg
      if (smallVectorIcons.has(name) || smallVectorIcons.has(svgFileName)) {
        return `/images/${svgFileName}`;
      }

      // Otherwise use ultra-sharp .webp if available
      if (webpBaseNames.has(webpFileName)) {
        return `/images/${webpFileName}`;
      }

      return match;
    });

    // Replace root public files like /next.svg, /globe.svg, /file.svg, etc.
    content = content.replace(/\/([^"'\`\s\)\}\?#\/]+)\.(png|svg|jpg|jpeg|webp)/gi, (match, name, ext) => {
      const svgFileName = `${name}.svg`;
      const webpFileName = `${name}.webp`;

      if (smallVectorIcons.has(name) || smallVectorIcons.has(svgFileName)) {
        return `/${svgFileName}`;
      }

      if (webpBaseNames.has(webpFileName)) {
        return `/${webpFileName}`;
      }

      return match;
    });

    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      filesModifiedCount++;
    }
  });

  console.log(`Updated references across ${filesModifiedCount} files.`);
}

main();
