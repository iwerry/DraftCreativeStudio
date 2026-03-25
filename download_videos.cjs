const https = require('https');
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'public', 'studio');
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

const download = (url, dest) => {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
        // Handle redirect
        https.get(response.headers.location, (res) => {
          res.pipe(file);
          file.on('finish', () => { file.close(); resolve(); });
        }).on('error', reject);
      } else {
        response.pipe(file);
        file.on('finish', () => { file.close(); resolve(); });
      }
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
};

const videos = [
  { url: 'https://www.w3schools.com/html/mov_bbb.mp4', file: 'hero_1.mp4' },
  { url: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4', file: 'hero_2.mp4' },
  { url: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/friday.mp4', file: 'hero_3.mp4' }
];

async function run() {
  console.log('Downloading placeholder videos...');
  for (const v of videos) {
    try {
      console.log(`Downloading ${v.file}...`);
      await download(v.url, path.join(dir, v.file));
      console.log(`Successfully downloaded ${v.file}`);
    } catch (e) {
      console.error(`Failed to download ${v.file}:`, e.message);
    }
  }
}

run();
