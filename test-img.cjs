const https = require('https');

https.get('https://portfolio-cyan-five-bsasv9p3i6.vercel.app/image2/ezgif-frame-001.jpg', (res) => {
  console.log(`STATUS: ${res.statusCode}`);
  process.exit(0);
}).on('error', (e) => {
  console.error(e);
  process.exit(1);
});
