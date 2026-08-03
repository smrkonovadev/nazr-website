const fs = require('fs');
const path = require('path');

const imgDir = path.join(__dirname, 'public', 'images');
const svgFiles = fs.readdirSync(imgDir).filter(f => f.endsWith('.svg'));

const embedded = [];
const pure = [];

for (const file of svgFiles) {
  const content = fs.readFileSync(path.join(imgDir, file), 'utf8');
  // Check for embedded base64 image data
  const hasBase64 = content.includes('data:image/png;base64,') || 
                    content.includes('data:image/jpeg;base64,') ||
                    content.includes('data:image/jpg;base64,');
  if (hasBase64) {
    // Count how many embedded images
    const matches = content.match(/data:image\/(png|jpeg|jpg);base64,/g);
    embedded.push({ file, count: matches ? matches.length : 0 });
  } else {
    pure.push(file);
  }
}

console.log('=== SVGs with EMBEDDED raster images (need extraction) ===');
embedded.forEach(e => console.log(`  ${e.file} (${e.count} embedded image(s))`));
console.log(`\nTotal: ${embedded.length} SVGs with embedded images`);

console.log('\n=== Pure vector SVGs ===');
pure.forEach(f => console.log(`  ${f}`));
console.log(`\nTotal: ${pure.length} pure vector SVGs`);
