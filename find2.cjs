const fs = require('fs');
const lines = fs.readFileSync('src/App.jsx','utf8').split('\n');
// Find where this entire block starts — search for the IIFE that contains printSection
// printSection is at 47936, so the IIFE must start before that
for (let i = 47935; i > 47880; i--) {
  const l = lines[i].trim();
  if (l.startsWith('(() =>') || l.startsWith('{(() =>') || l.includes('dataType') || l.includes('activeTab')) {
    console.log((i+1) + ': ' + l.substring(0, 80));
  }
}
console.log('---');
// Also check what renders this — is it conditional on activeTab?
for (let i = 47885; i < 47895; i++) {
  console.log((i+1) + ': ' + lines[i].trim().substring(0, 80));
}
