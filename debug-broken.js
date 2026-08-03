const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function debug() {
  const imgDir = path.join(__dirname, 'public', 'images');
  const files = ['nazreyeback', 'nazreyefront', 'new8', 'phone'];

  for (const f of files) {
    const svgPath = path.join(imgDir, f + '.svg');
    const pngPath = path.join(imgDir, f + '.png');
    const webpPath = path.join(imgDir, f + '.webp');

    console.log(`\n=================== ${f} ===================`);
    console.log(`SVG exists: ${fs.existsSync(svgPath)}`);
    console.log(`PNG exists: ${fs.existsSync(pngPath)}`);
    console.log(`WEBP exists: ${fs.existsSync(webpPath)}`);

    if (fs.existsSync(svgPath)) {
      const svgStr = fs.readFileSync(svgPath, 'utf8');
      console.log(`SVG length: ${svgStr.length}`);
      const matches = svgStr.match(/data:image\/(png|jpeg|jpg);base64,([A-Za-z0-9+\/=\s]+)/g);
      console.log(`Base64 matches: ${matches ? matches.length : 0}`);

      if (matches) {
        matches.forEach((m, idx) => {
          const parts = m.split(';base64,');
          const fmt = parts[0].split('/')[1];
          const b64 = parts[1].replace(/\s/g, '');
          const buf = Buffer.from(b64, 'base64');
          console.log(`  Match ${idx + 1}: format=${fmt}, b64 length=${b64.length}`);
        });
      }
    }
  }
}

debug();
