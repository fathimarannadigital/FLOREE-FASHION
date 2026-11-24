// scripts/download-premium-assets.js
const fs = require('fs');
const path = require('path');
const https = require('https');

const premiumAssets = [
  // High-fashion Vogue/Editorial style Hero poster
  {
    url: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=2400&q=90',
    dest: 'assets/images/hero-poster.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=2400&q=90',
    dest: 'assets/images/hero-couture-fallback.jpg'
  },
  // Packaging Unboxing Shot
  {
    url: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=1200&q=85',
    dest: 'assets/images/packaging-box.jpg'
  },
  // Atelier Silk Craftsmanship
  {
    url: 'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&w=1200&q=85',
    dest: 'assets/images/editorial/silk-texture.jpg'
  }
];

function download(item) {
  return new Promise((resolve) => {
    const fullPath = path.resolve(__dirname, '..', item.dest);
    const dir = path.dirname(fullPath);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

    const file = fs.createWriteStream(fullPath);
    https.get(item.url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        https.get(res.headers.location, (redir) => {
          redir.pipe(file);
          file.on('finish', () => { file.close(); resolve(true); });
        }).on('error', () => { fs.unlink(fullPath, ()=>{}); resolve(false); });
      } else if (res.statusCode === 200) {
        res.pipe(file);
        file.on('finish', () => { file.close(); resolve(true); });
      } else {
        fs.unlink(fullPath, ()=>{});
        resolve(false);
      }
    }).on('error', () => { fs.unlink(fullPath, ()=>{}); resolve(false); });
  });
}

async function run() {
  for (const item of premiumAssets) {
    await download(item);
  }
  console.log('Premium image upgrades completed!');
}
run();

