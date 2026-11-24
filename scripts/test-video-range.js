// scripts/test-video-range.js
const http = require('http');
require('../server.js');

setTimeout(() => {
  const options = {
    hostname: 'localhost',
    port: 3000,
    path: '/assets/videos/hero-model-walk.webm',
    method: 'GET',
    headers: {
      'Range': 'bytes=0-1023'
    }
  };

  const req = http.request(options, (res) => {
    console.log(`Video Range Status: ${res.statusCode} (Expected: 206)`);
    console.log(`Content-Range: ${res.headers['content-range']}`);
    console.log(`Content-Length: ${res.headers['content-length']}`);
    console.log(`Content-Type: ${res.headers['content-type']}`);
    process.exit(res.statusCode === 206 ? 0 : 1);
  });

  req.on('error', (e) => {
    console.error(e);
    process.exit(1);
  });

  req.end();
}, 500);

