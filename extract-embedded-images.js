const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const imgDir = path.join(__dirname, 'public', 'images');

async function main() {
  const svgFiles = fs.readdirSync(imgDir).filter(f => f.endsWith('.svg'));

  let fixed = 0;
  let skipped = 0;
  let errors = 0;

  for (const file of svgFiles) {
    const filePath = path.join(imgDir, file);
    const content = fs.readFileSync(filePath, 'utf8');

    // Check for embedded base64 image data
    const base64Match = content.match(/data:image\/(png|jpeg|jpg);base64,([A-Za-z0-9+\/=\s]+)/);

    if (!base64Match) {
      skipped++;
      continue; // Pure vector SVG — already handled fine by density approach
    }

    const imgFormat = base64Match[1];
    const base64Data = base64Match[2].replace(/\s/g, '');

    // Get the embedded image's original dimensions from the SVG
    const widthMatch = content.match(/<image[^>]*width="(\d+)"/);
    const heightMatch = content.match(/<image[^>]*height="(\d+)"/);
    const embWidth = widthMatch ? parseInt(widthMatch[1]) : '?';
    const embHeight = heightMatch ? parseInt(heightMatch[1]) : '?';

    try {
      // Decode base64 to buffer
      const buffer = Buffer.from(base64Data, 'base64');

      // Convert directly to WebP at maximum quality, preserving original resolution
      const webpName = file.replace('.svg', '.webp');
      const webpPath = path.join(imgDir, webpName);

      await sharp(buffer)
        .webp({ quality: 95, effort: 6, nearLossless: false })
        .toFile(webpPath);

      const stats = fs.statSync(webpPath);
      const sizeKB = Math.round(stats.size / 1024);
      console.log(`[FIXED] ${file} (embedded ${embWidth}x${embHeight} ${imgFormat}) -> ${webpName} (${sizeKB}KB)`);
      fixed++;
    } catch (err) {
      console.error(`[ERROR] ${file}: ${err.message}`);
      errors++;
    }
  }

  console.log(`\n========================================`);
  console.log(`Fixed (extracted embedded raster): ${fixed}`);
  console.log(`Skipped (pure vector - already OK): ${skipped}`);
  console.log(`Errors: ${errors}`);
  console.log(`========================================`);
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
