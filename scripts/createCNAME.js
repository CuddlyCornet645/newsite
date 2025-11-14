// scripts/createCNAME.js
import fs from 'fs';

const domain = 'www.dssoft.ch';
fs.writeFileSync('dist/CNAME', domain);
console.log('CNAME file created for GitHub Pages deployment.');
