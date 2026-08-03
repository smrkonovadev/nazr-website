const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const sharp = require('sharp');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const imgDir = path.join(__dirname, 'public', 'images');
const tempDir = path.join(__dirname, '_chrome_temp');

if (!fs.existsSync(tempDir)) fs.mkdirSync(tempDir);

const filesToRender = ['new1.svg', 'new2.svg', 'nazreyeback.svg', 'nazreyefront.svg'];

async function renderSVGWithChrome(file) {
  const fileNameWithoutExt = path.basename(file, path.extname(file));
  const svgPath = path.join(imgDir, file);
  
  if (!fs.existsSync(svgPath)) {
    console.log(`[SKIP] ${file} does not exist`);
    return;
  }

  const svgContent = fs.readFileSync(svgPath, 'utf8');

  let width = 1000;
  let height = 1000;

  const wMatch = svgContent.match(/width="(\d+(\.\d+)?)"/);
  const hMatch = svgContent.match(/height="(\d+(\.\d+)?)"/);
  const vbMatch = svgContent.match(/viewBox="0 0 (\d+(\.\d+)?) (\d+(\.\d+)?)"/);

  if (wMatch && hMatch) {
    width = Math.round(parseFloat(wMatch[1]) * 3);
    height = Math.round(parseFloat(hMatch[1]) * 3);
  } else if (vbMatch) {
    width = Math.round(parseFloat(vbMatch[1]) * 3);
    height = Math.round(parseFloat(vbMatch[3]) * 3);
  }

  const htmlPath = path.join(tempDir, `${fileNameWithoutExt}.html`);
  const pngOutPath = path.join(tempDir, `${fileNameWithoutExt}.png`);
  const webpOutPath = path.join(imgDir, `${fileNameWithoutExt}.webp`);

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

  const cmd = `"${chromePath}" --headless --disable-gpu --force-device-scale-factor=1 --default-background-color=00000000 --screenshot="${pngOutPath}" --window-size=${width},${height} "file:///${htmlPath.replace(/\\/g, '/')}"`;

  try {
    execSync(cmd, { stdio: 'pipe' });

    if (fs.existsSync(pngOutPath)) {
      await sharp(pngOutPath)
        .webp({ quality: 98, effort: 6 })
        .toFile(webpOutPath);

      const sizeKB = Math.round(fs.statSync(webpOutPath).size / 1024);
      console.log(`[CHROME RENDERED] ${file} -> ${fileNameWithoutExt}.webp (${width}x${height} HD, ${sizeKB}KB)`);
    }
  } catch (err) {
    console.error(`[ERROR] ${file}: ${err.message}`);
  }
}

async function main() {
  for (const file of filesToRender) {
    await renderSVGWithChrome(file);
  }
}

main().catch(err => console.error('Fatal error:', err));
