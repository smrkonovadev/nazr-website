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

async function convertImageToWebp(filePath) {
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
      let density = 200;
      try {
        const tempPipeline = sharp(filePath, { limitInputPixels: 0, unlimited: true });
        const metadata = await tempPipeline.metadata();
        if (metadata.width && metadata.width > 0) {
          const scaleFactor = 2500 / metadata.width;
          density = Math.min(Math.max(Math.round(72 * scaleFactor), 200), 800);
        }
      } catch (e) {
        density = 200;
      }

      pipeline = sharp(filePath, { density, limitInputPixels: 0, unlimited: true });
      await pipeline
        .webp({
          quality: 96,
          nearLossless: true,
          effort: 4
        })
        .toFile(targetWebpPath);

    } else if (ext === '.png') {
      pipeline = sharp(filePath, { limitInputPixels: 0 });
      await pipeline
        .webp({
          quality: 96,
          nearLossless: true,
          effort: 4
        })
        .toFile(targetWebpPath);

    } else {
      pipeline = sharp(filePath, { limitInputPixels: 0 });
      await pipeline
        .webp({
          quality: 95,
          effort: 4
        })
        .toFile(targetWebpPath);
    }

    const newSize = fs.statSync(targetWebpPath).size;
    console.log(`Converted ${path.basename(filePath)} (${(originalSize/1024).toFixed(0)}KB -> ${(newSize/1024).toFixed(0)}KB)`);
    return true;
  } catch (err) {
    console.error(`Error converting ${filePath}:`, err.message);
    return false;
  }
}

async function main() {
  console.log('Re-converting images with Fast Ultra-High Crispness (2500px 4K + Near-Lossless WebP)...');
  const files = getFiles('public');
  const imageFiles = files.filter(f => {
    const ext = path.extname(f).toLowerCase();
    return ['.png', '.jpg', '.jpeg', '.svg'].includes(ext);
  });

  let count = 0;
  for (const file of imageFiles) {
    await convertImageToWebp(file);
    count++;
  }

  console.log(`Done! Converted ${count}/${imageFiles.length} images.`);
}

main().catch(err => {
  console.error('Error:', err);
});
