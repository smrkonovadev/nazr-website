const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const imgDir = path.join(__dirname, 'public', 'images');

async function main() {
  // Process new31.svg to new42.svg
  for (let i = 31; i <= 42; i++) {
    const file = `new${i}.svg`;
    const filePath = path.join(imgDir, file);
    
    if (!fs.existsSync(filePath)) {
      console.log(`[SKIP] ${file} not found`);
      continue;
    }

    const content = fs.readFileSync(filePath, 'utf8');
    const base64Match = content.match(/data:image\/(png|jpeg|jpg);base64,([A-Za-z0-9+\/=\s]+)/);

    if (!base64Match) {
      console.log(`[SKIP] ${file} has no base64 image`);
      continue;
    }

    const imgFormat = base64Match[1];
    const base64Data = base64Match[2].replace(/\s/g, '');
    const buffer = Buffer.from(base64Data, 'base64');

    const webpName = `new${i}.webp`;
    const webpPath = path.join(imgDir, webpName);

    // Convert the pure extracted photo directly to WebP
    await sharp(buffer)
      .webp({ quality: 95, effort: 6 })
      .toFile(webpPath);

    const stats = fs.statSync(webpPath);
    const sizeKB = Math.round(stats.size / 1024);
    const meta = await sharp(webpPath).metadata();
    console.log(`[EXTRACTED PHOTO] ${file} -> ${webpName} (${meta.width}x${meta.height}, ${sizeKB}KB)`);
  }
}

main().catch(err => console.error('Fatal error:', err));
