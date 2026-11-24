// scripts/download-assets.js
const fs = require('fs');
const path = require('path');
const https = require('https');

const assets = [
  // Hero fallbacks & poster
  {
    url: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1920&q=85',
    dest: 'assets/images/hero-poster.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=1920&q=85',
    dest: 'assets/images/campaign/campaign-hero.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=85',
    dest: 'assets/images/editorial/story-editorial.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=85',
    dest: 'assets/images/editorial/art-of-dressing.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1200&q=85',
    dest: 'assets/images/editorial/about-philosophy.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=1200&q=85',
    dest: 'assets/images/editorial/about-craft.jpg'
  },
  // Categories
  {
    url: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=85',
    dest: 'assets/images/categories/everyday-elegance.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=85',
    dest: 'assets/images/categories/casual-wear.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=800&q=85',
    dest: 'assets/images/categories/party-wear.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=85',
    dest: 'assets/images/categories/modern-dresses.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=800&q=85',
    dest: 'assets/images/categories/occasion-wear.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=800&q=85',
    dest: 'assets/images/categories/trending-styles.jpg'
  },
  // Products (Key primary images)
  {
    url: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=85',
    dest: 'assets/images/products/product-1-1.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=800&q=85',
    dest: 'assets/images/products/product-1-2.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=800&q=85',
    dest: 'assets/images/products/product-2-1.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?auto=format&fit=crop&w=800&q=85',
    dest: 'assets/images/products/product-2-2.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1548624313-0396c75e4b1a?auto=format&fit=crop&w=800&q=85',
    dest: 'assets/images/products/product-3-1.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=800&q=85',
    dest: 'assets/images/products/product-3-2.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=800&q=85',
    dest: 'assets/images/products/product-4-1.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1520006403909-838d6b92c22e?auto=format&fit=crop&w=800&q=85',
    dest: 'assets/images/products/product-4-2.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=85',
    dest: 'assets/images/products/product-5-1.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1508427953056-b00b8d78ebf5?auto=format&fit=crop&w=800&q=85',
    dest: 'assets/images/products/product-5-2.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=800&q=85',
    dest: 'assets/images/products/product-6-1.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=85',
    dest: 'assets/images/products/product-6-2.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=85',
    dest: 'assets/images/products/product-7-1.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1500917293891-ef795ce70e53?auto=format&fit=crop&w=800&q=85',
    dest: 'assets/images/products/product-7-2.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=85',
    dest: 'assets/images/products/product-8-1.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=800&q=85',
    dest: 'assets/images/products/product-8-2.jpg'
  },
  // Instagram posts
  {
    url: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=80',
    dest: 'assets/images/instagram/insta-1.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80',
    dest: 'assets/images/instagram/insta-2.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80',
    dest: 'assets/images/instagram/insta-3.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=600&q=80',
    dest: 'assets/images/instagram/insta-4.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=600&q=80',
    dest: 'assets/images/instagram/insta-5.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=600&q=80',
    dest: 'assets/images/instagram/insta-6.jpg'
  }
];

function download(item) {
  return new Promise((resolve) => {
    const fullPath = path.resolve(__dirname, '..', item.dest);
    const dir = path.dirname(fullPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    // Check if file already exists
    if (fs.existsSync(fullPath) && fs.statSync(fullPath).size > 1000) {
      // console.log(`Already exists: ${item.dest}`);
      return resolve(true);
    }

    const file = fs.createWriteStream(fullPath);
    const req = https.get(item.url, {
      headers: {
        'User-Agent': 'Mozilla/5.0'
      }
    }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        https.get(res.headers.location, (redirectRes) => {
          redirectRes.pipe(file);
          file.on('finish', () => {
            file.close();
            console.log(`Downloaded (redirect): ${item.dest}`);
            resolve(true);
          });
        }).on('error', (err) => {
          fs.unlink(fullPath, () => {});
          console.error(`Error redirect ${item.dest}:`, err.message);
          resolve(false);
        });
      } else if (res.statusCode === 200) {
        res.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log(`Downloaded: ${item.dest}`);
          resolve(true);
        });
      } else {
        fs.unlink(fullPath, () => {});
        console.error(`Failed ${item.dest}: status ${res.statusCode}`);
        resolve(false);
      }
    });

    req.on('error', (err) => {
      fs.unlink(fullPath, () => {});
      console.error(`Error ${item.dest}:`, err.message);
      resolve(false);
    });
  });
}

async function run() {
  console.log(`Starting download of ${assets.length} assets...`);
  for (const item of assets) {
    await download(item);
  }
  console.log('All downloads completed!');
}

run();

