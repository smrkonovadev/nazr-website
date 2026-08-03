const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const imgDir = path.join(__dirname, 'public', 'images');

async function main() {
  for (let i = 31; i <= 42; i++) {
    const file = `new${i}.webp`;
    const filePath = path.join(imgDir, file);

    if (!fs.existsSync(filePath)) {
      console.log(`[SKIP] ${file} not found`);
      continue;
    }

    try {
      // Trim white padding in-memory and write to file
      const buffer = await sharp(filePath)
        .trim({ threshold: 15 })
        .webp({ quality: 98, effort: 6 })
        .toBuffer();

      fs.writeFileSync(filePath, buffer);

      const meta = await sharp(filePath).metadata();
      const sizeKB = Math.round(fs.statSync(filePath).size / 1024);
      console.log(`[TRIMMED PERFECT] ${file} -> ${meta.width}x${meta.height} (${sizeKB}KB)`);
    } catch (err) {
      console.error(`[ERROR] ${file}: ${err.message}`);
    }
  }
}

main().catch(err => console.error('Fatal error:', err));
