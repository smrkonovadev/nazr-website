const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

function getFiles(dir) {
  let results = [];
  if (!fs.existsSync(dir)) return results;
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getFiles(fullPath));
    } else {
      results.push(fullPath);
    }
  });
  return results;
}

async function convertImageToHDWebp(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (!['.png', '.jpg', '.jpeg', '.svg'].includes(ext)) {
    return null;
  }

  const originalSize = fs.statSync(filePath).size;
  const dir = path.dirname(filePath);
  const nameWithoutExt = path.basename(filePath, ext);
  const targetWebpPath = path.join(dir, `${nameWithoutExt}.webp`);

  try {
    let pipeline;

    if (ext === '.svg') {
      // First get intrinsic metadata
      const initialSharp = sharp(filePath, { limitInputPixels: 0, unlimited: true });
      const meta = await initialSharp.metadata();

      let targetWidth = 2400; // Force high-definition 2400px width minimum
      let density = 300;

      if (meta.width && meta.width > 0) {
        // Scale factor to make the rendered SVG at least 2400px wide
        const scaleFactor = Math.max(targetWidth / meta.width, 2.0);
        density = Math.min(Math.round(72 * scaleFactor), 1200);
      }

      pipeline = sharp(filePath, { density, limitInputPixels: 0, unlimited: true });
      await pipeline
        .webp({
          quality: 98,
          nearLossless: true,
          effort: 4
        })
        .toFile(targetWebpPath);

      const hdMeta = await sharp(targetWebpPath).metadata();
      console.log(`[SVG HD] ${path.basename(filePath)} (${meta.width}x${meta.height} -> ${hdMeta.width}x${hdMeta.height} HD, ${(fs.statSync(targetWebpPath).size/1024).toFixed(0)}KB)`);

    } else if (ext === '.png') {
      // For PNG files, preserve HD resolution with nearLossless precision
      pipeline = sharp(filePath, { limitInputPixels: 0 });
      await pipeline
        .webp({
          quality: 98,
          nearLossless: true,
          effort: 4
        })
        .toFile(targetWebpPath);

      const hdMeta = await sharp(targetWebpPath).metadata();
      console.log(`[PNG HD] ${path.basename(filePath)} (${hdMeta.width}x${hdMeta.height} HD, ${(fs.statSync(targetWebpPath).size/1024).toFixed(0)}KB)`);

    } else {
      pipeline = sharp(filePath, { limitInputPixels: 0 });
      await pipeline
        .webp({
          quality: 95,
          effort: 4
        })
        .toFile(targetWebpPath);

      const hdMeta = await sharp(targetWebpPath).metadata();
      console.log(`[JPG HD] ${path.basename(filePath)} (${hdMeta.width}x${hdMeta.height} HD, ${(fs.statSync(targetWebpPath).size/1024).toFixed(0)}KB)`);
    }

    return true;
  } catch (err) {
    console.error(`Error converting ${filePath}:`, err.message);
    return false;
  }
}

async function main() {
  console.log('Converting ALL images to True HD WebP (Minimum 2400px Resolution for SVGs)...');
  const files = getFiles('public');
  const imageFiles = files.filter(f => {
    const ext = path.extname(f).toLowerCase();
    return ['.png', '.jpg', '.jpeg', '.svg'].includes(ext);
  });

  let count = 0;
  for (const file of imageFiles) {
    await convertImageToHDWebp(file);
    count++;
  }

  console.log(`\n========================================`);
  console.log(`Finished converting ${count}/${imageFiles.length} images to True HD WebP.`);
  console.log(`========================================\n`);
}

main().catch(err => {
  console.error('Fatal error:', err);
});
