const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const imgDir = path.join(__dirname, 'public', 'images');

// These are the specific remaining SVGs that still need extraction
// (the bulk task was killed before processing them)
async function main() {
  const svgFiles = fs.readdirSync(imgDir).filter(f => f.endsWith('.svg'));
  
  let fixed = 0;
  let skipped = 0;
  let alreadyDone = 0;
  let errors = 0;

  for (const file of svgFiles) {
    const filePath = path.join(imgDir, file);
    const content = fs.readFileSync(filePath, 'utf8');

    // Check for embedded base64 image data
    const base64Match = content.match(/data:image\/(png|jpeg|jpg);base64,([A-Za-z0-9+\/=\s]+)/);

    if (!base64Match) {
      skipped++;
      continue;
    }

    const webpName = file.replace('.svg', '.webp');
    const webpPath = path.join(imgDir, webpName);

    // Check if the webp was already fixed by the previous run
    // by checking if it was created/modified after the extraction script was run
    // Simple heuristic: if file size is reasonable and metadata looks good
    if (fs.existsSync(webpPath)) {
      try {
        const meta = await sharp(webpPath).metadata();
        const stats = fs.statSync(webpPath);
        // If the existing webp has reasonable content (not a broken render), skip it
        // The broken renders from the density approach were very large (1-4MB) because they were upscaled SVG masks
        // The proper extracted ones should match the embedded image dimensions
        const widthMatch = content.match(/<image[^>]*width="(\d+)"/);
        const embWidth = widthMatch ? parseInt(widthMatch[1]) : 0;
        
        // If the webp width matches the embedded image width (within 10%), it's already fixed
        if (embWidth > 0 && Math.abs(meta.width - embWidth) / embWidth < 0.1) {
          alreadyDone++;
          continue;
        }
      } catch (e) {
        // If we can't read it, re-extract
      }
    }

    const imgFormat = base64Match[1];
    const base64Data = base64Match[2].replace(/\s/g, '');
    const widthMatch = content.match(/<image[^>]*width="(\d+)"/);
    const heightMatch = content.match(/<image[^>]*height="(\d+)"/);
    const embWidth = widthMatch ? parseInt(widthMatch[1]) : '?';
    const embHeight = heightMatch ? parseInt(heightMatch[1]) : '?';

    try {
      const buffer = Buffer.from(base64Data, 'base64');
      await sharp(buffer)
        .webp({ quality: 95, effort: 6 })
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
  console.log(`Newly fixed: ${fixed}`);
  console.log(`Already fixed: ${alreadyDone}`);
  console.log(`Skipped (pure vector): ${skipped}`);
  console.log(`Errors: ${errors}`);
  console.log(`========================================`);
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
