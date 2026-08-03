const fs = require('fs');

const svgStr = fs.readFileSync('public/images/new8.svg', 'utf8');
console.log('--- SVG snippet ---');
console.log(svgStr.substring(0, 1000));
console.log('...\n' + svgStr.substring(svgStr.length - 1000));
