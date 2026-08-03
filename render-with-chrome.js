const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const sharp = require('sharp');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const imgDir = path.join(__dirname, 'public', 'images');
const tempDir = path.join(__dirname, '_chrome_temp');

if (!fs.existsSync(tempDir)) fs.mkdirSync(tempDir);

// Target home page images & any problematic SVGs
const targetFiles = [
  'nazreyeback.svg',
  'nazreyefront.svg',
  'new8.svg',
  'phone.webp',
  'spray-pink.png',
  'spray-white.png',
  '1stfromleft.svg',
  '2ndfromleft.svg',
  '3rdimage.svg',
  'bottomleft1.svg',
  'bottomleft2.svg',
  'bottomleft3.svg',
  'community.svg',
  'community2.svg',
  'com.svg',
  'image 58.svg',
  'MAINPHONE.svg',
  'my-new-spray.svg',
  'NAZR360.svg',
  'new26.svg',
  'new27.svg',
  'new28.svg'
];

async function renderSVGWithChrome(file) {
  const fileNameWithoutExt = path.basename(file, path.extname(file));
  const svgPath = path.join(imgDir, file);
  
  if (!fs.existsSync(svgPath)) {
    console.log(`[SKIP] ${file} does not exist`);
    return;
  }

  const svgContent = fs.readFileSync(svgPath, 'utf8');

  // Parse width and height from SVG attributes or viewBox
  let width = 1000;
  let height = 1000;

  const wMatch = svgContent.match(/width="(\d+(\.\d+)?)"/);
  const hMatch = svgContent.match(/height="(\d+(\.\d+)?)"/);
  const vbMatch = svgContent.match(/viewBox="0 0 (\d+(\.\d+)?) (\d+(\.\d+)?)"/);

  if (wMatch && hMatch) {
    width = Math.round(parseFloat(wMatch[1]) * 4); // 4x scale for HD
    height = Math.round(parseFloat(hMatch[1]) * 4);
  } else if (vbMatch) {
    width = Math.round(parseFloat(vbMatch[1]) * 4);
    height = Math.round(parseFloat(vbMatch[3]) * 4);
  }

  // Cap dimensions to reasonable HD bounds (e.g. 2400 max width)
  if (width > 2400) {
    const ratio = height / width;
    width = 2400;
    height = Math.round(width * ratio);
  }

  const htmlPath = path.join(tempDir, `${fileNameWithoutExt}.html`);
  const pngOutPath = path.join(tempDir, `${fileNameWithoutExt}.png`);
  const webpOutPath = path.join(imgDir, `${fileNameWithoutExt}.webp`);

  // Create an HTML container with transparent background that fills viewport exactly
  const htmlContent = `<!DOCTYPE html>
<html>
<head>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    html, body { width: 100%; height: 100%; background: transparent; overflow: hidden; }
    svg { width: 100%; height: 100%; display: block; }
  </style>
</head>
<body>
  ${svgContent}
</body>
</html>`;

  fs.writeFileSync(htmlPath, htmlContent, 'utf8');

  // Launch headless Chrome to take high-res screenshot
  const cmd = `"${chromePath}" --headless --disable-gpu --force-device-scale-factor=1 --default-background-color=00000000 --screenshot="${pngOutPath}" --window-size=${width},${height} "file:///${htmlPath.replace(/\\/g, '/')}"`;

  try {
    execSync(cmd, { stdio: 'pipe' });

    if (fs.existsSync(pngOutPath)) {
      // Convert chrome screenshot to WebP at 98% quality
      await sharp(pngOutPath)
        .webp({ quality: 98, effort: 6 })
        .toFile(webpOutPath);

      const sizeKB = Math.round(fs.statSync(webpOutPath).size / 1024);
      console.log(`[CHROME RENDERED] ${file} -> ${fileNameWithoutExt}.webp (${width}x${height} HD, ${sizeKB}KB)`);
    } else {
      console.error(`[FAIL] ${file}: Screenshot was not created`);
    }
  } catch (err) {
    console.error(`[ERROR] ${file}: ${err.message}`);
  }
}

async function main() {
  console.log(`Starting Chrome rendering engine for ${targetFiles.length} files...`);
  for (const file of targetFiles) {
    if (file.endsWith('.svg')) {
      await renderSVGWithChrome(file);
    }
  }
  console.log('Finished Chrome rendering!');
}

main().catch(err => console.error('Fatal error:', err));
