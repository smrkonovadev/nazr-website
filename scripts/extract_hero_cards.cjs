const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const inputPath = 'C:/Users/harsh/.gemini/antigravity-ide/brain/aba3ed63-4bff-46d7-a12d-26830650e985/.user_uploaded/media_1790176679204.png';
const outDir = path.join(__dirname, '../public/images/shop/hero-carousel');

async function extractAccurate() {
  // Let's refine the bounding boxes:
  // Total image is 811 x 477.
  // The cards row starts around y = 221, height is ~154
  // Card 1: 18 to 123 -> width 105
  // Card 2: 131 to 236 -> width 105
  // Card 3: 244 to 349 -> width 105
  // Card 4: 349 to 456 -> wait, let's check gap between cards:
  // 131 - 123 = 8px gap!
  // 244 - 236 = 8px gap!
  // So cards are ~105px wide with ~8-9px gap!
  // 244 + 105 = 349. Gap = 8 -> 357!
  // Card 4: 357 to 462 (width 105)
  // Card 5: 470 to 575 (width 105)
  // Card 6: 583 to 688 (width 105)
  // Card 7: 696 to 801 (width 105)

  const cards = [
    { name: 'card-1', left: 18, top: 221, width: 105, height: 153 },
    { name: 'card-2', left: 131, top: 221, width: 105, height: 153 },
    { name: 'card-3', left: 244, top: 221, width: 105, height: 153 },
    { name: 'card-4', left: 349, top: 219, width: 107, height: 156 },
    { name: 'card-5', left: 465, top: 221, width: 125, height: 153 },
    { name: 'card-6', left: 598, top: 221, width: 125, height: 153 },
    { name: 'card-7', left: 731, top: 221, width: 63, height: 153 },
  ];

  for (const c of cards) {
    await sharp(inputPath)
      .extract({ left: c.left, top: c.top, width: c.width, height: c.height })
      .toFile(path.join(outDir, `${c.name}.webp`));
    console.log(`Saved ${c.name}.webp`);
  }
}

extractAccurate().catch(console.error);
