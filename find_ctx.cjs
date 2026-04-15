const fs = require('fs');
const lines = fs.readFileSync('src/App.jsx','utf8').split('\n');
// The buttons at ~48274 are inside a wrapper. Find it.
for (let i = 48273; i > 48150; i--) {
  const l = lines[i].trim();
  if (l.includes('no-print') || l.includes('ml-auto') || l.includes('flex gap') || l.includes('carta-visual') || l.includes('dataType')) {
    console.log((i+1) + ': ' + l.substring(0, 80));
  }
}
