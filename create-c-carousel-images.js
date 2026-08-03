const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const imgDir = path.join(__dirname, 'public', 'images');

async function main() {
  for (let i = 31; i <= 42; i++) {
    const file = `new${i}.svg`;
    const filePath = path.join(imgDir, file);

    if (!fs.existsSync(filePath)) {
      console.log(`[SKIP] ${file} not found`);
      continue;
    }

    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const base64Match = content.match(/data:image\/(png|jpeg|jpg);base64,([A-Za-z0-9+\/=\s]+)/);

      if (!base64Match) {
        console.log(`[SKIP] ${file} has no base64 image`);
        continue;
      }

      const base64Data = base64Match[2].replace(/\s/g, '');
      const rawBuffer = Buffer.from(base64Data, 'base64');

      const outName = `c${i}.webp`;
      const outPath = path.join(imgDir, outName);

      // Trim white padding in-memory and save to c31.webp, c32.webp, etc.
      await sharp(rawBuffer)
        .trim({ threshold: 15 })
        .webp({ quality: 98, effort: 6 })
        .toFile(outPath);

      const meta = await sharp(outPath).metadata();
      const sizeKB = Math.round(fs.statSync(outPath).size / 1024);
      console.log(`[CREATED PERFECT] ${outName} -> ${meta.width}x${meta.height} (${sizeKB}KB)`);
    } catch (err) {
      console.error(`[ERROR] ${file}: ${err.message}`);
    }
  }
}

main().catch(err => console.error('Fatal error:', err));
