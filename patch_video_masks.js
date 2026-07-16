const fs = require('fs');

const maskStyle = `style={{
            WebkitMaskImage: 'url(/images/nazrapp4img.png)',
            WebkitMaskSize: 'contain',
            WebkitMaskRepeat: 'no-repeat',
            WebkitMaskPosition: 'top center',
            maskImage: 'url(/images/nazrapp4img.png)',
            maskSize: 'contain',
            maskRepeat: 'no-repeat',
            maskPosition: 'top center',
          }}`;

function patchFile(filepath) {
  let content = fs.readFileSync(filepath, 'utf8');
  // Replace <video ... /> with <video ... style={...} />
  content = content.replace(/<video([^>]+?)\/>/g, (match, p1) => {
    if (p1.includes('maskImage')) return match; // already patched
    return `<video${p1} ${maskStyle} />`;
  });
  fs.writeFileSync(filepath, content);
  console.log(`Patched ${filepath}`);
}

patchFile('src/components/ui/TriggerSection.tsx');
