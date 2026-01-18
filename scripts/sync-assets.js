const fs = require('fs');
const path = require('path');

const projectRoot = path.resolve(__dirname, '..');
const publicVendor = path.join(projectRoot, 'public', 'assets', 'vendor');

// Ensure vendor directory exists
if (!fs.existsSync(publicVendor)) {
    fs.mkdirSync(publicVendor, { recursive: true });
}

function copyDir(src, dest) {
    if (!fs.existsSync(src)) return;
    fs.mkdirSync(dest, { recursive: true });
    let entries = fs.readdirSync(src, { withFileTypes: true });

    for (let entry of entries) {
        let srcPath = path.join(src, entry.name);
        let destPath = path.join(dest, entry.name);

        entry.isDirectory() ?
            copyDir(srcPath, destPath) :
            fs.copyFileSync(srcPath, destPath);
    }
}

// 1. Localize flag-icons
console.log('Localizing flag-icons...');
const flagIconsSrc = path.join(projectRoot, 'node_modules', 'flag-icons');
const flagIconsDest = path.join(publicVendor, 'flag-icons');

if (fs.existsSync(flagIconsSrc)) {
    // We only need CSS and Flags
    if (!fs.existsSync(flagIconsDest)) fs.mkdirSync(flagIconsDest, { recursive: true });
    
    // Copy CSS
    const cssSrc = path.join(flagIconsSrc, 'css');
    const cssDest = path.join(flagIconsDest, 'css');
    copyDir(cssSrc, cssDest);

    // Copy Flags
    const flagsSrc = path.join(flagIconsSrc, 'flags');
    const flagsDest = path.join(flagIconsDest, 'flags');
    copyDir(flagsSrc, flagsDest);
    
    console.log('✓ flag-icons localized.');
} else {
    console.error('✗ flag-icons not found in node_modules.');
}

console.log('Asset synchronization complete.');
