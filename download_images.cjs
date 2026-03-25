const fs = require('fs');
const https = require('https');
const path = require('path');

const dir = path.join(__dirname, 'public', 'studio');

if (fs.existsSync(dir)) {
  fs.rmSync(dir, { recursive: true, force: true });
}
fs.mkdirSync(dir, { recursive: true });

const download = (url, dest) => {
  https.get(url, (res) => {
    if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
      let redirectUrl = res.headers.location;
      if (!redirectUrl.startsWith('http')) {
        redirectUrl = 'https://picsum.photos' + redirectUrl;
      }
      https.get(redirectUrl, (redirectRes) => redirectRes.pipe(fs.createWriteStream(dest)));
    } else {
      res.pipe(fs.createWriteStream(dest));
    }
  });
};

download('https://picsum.photos/seed/studio_brand_dark/1280/720.webp', path.join(dir, 'hero_1.webp'));
download('https://picsum.photos/seed/lab_code_dark/1280/720.webp', path.join(dir, 'hero_2.webp'));
download('https://picsum.photos/seed/academy_class_dark/1280/720.webp', path.join(dir, 'hero_3.webp'));

['photo','film','edit','motion','branding','ui','marketing','script'].forEach(s => {
  download(`https://picsum.photos/seed/${s}/800/600.webp`, path.join(dir, `skill_${s}.webp`));
});

['urban','tech','edu','app'].forEach(p => {
  download(`https://picsum.photos/seed/${p}/800/600.webp`, path.join(dir, `proj_${p}.webp`));
});

download('https://picsum.photos/seed/studio_brand_dark/1920/1080.webp', path.join(dir, 'cover_studio.webp'));
download('https://picsum.photos/seed/lab_code_dark/1920/1080.webp', path.join(dir, 'cover_lab.webp'));
download('https://picsum.photos/seed/academy_class_dark/1920/1080.webp', path.join(dir, 'cover_academy.webp'));

console.log("Downloads initiated in background!");
