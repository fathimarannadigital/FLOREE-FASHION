// scripts/test-server.js
const http = require('http');
const path = require('path');
const fs = require('fs');

// Require server logic
require('../server.js');

setTimeout(async () => {
  const tests = [
    { path: '/', expectedStatus: 200, name: 'Home Index' },
    { path: '/src/js/app.js', expectedStatus: 200, name: 'App JS Module' },
    { path: '/src/css/hero.css', expectedStatus: 200, name: 'Hero CSS' },
    { path: '/assets/videos/hero-model-walk.webm', expectedStatus: 200, name: 'Hero Video' },
    { path: '/assets/images/hero-poster.jpg', expectedStatus: 200, name: 'Poster Image' }
  ];

  let passed = 0;
  for (const test of tests) {
    try {
      const res = await new Promise((resolve, reject) => {
        http.get(`http://localhost:3000${test.path}`, (response) => {
          resolve(response);
        }).on('error', reject);
      });

      if (res.statusCode === test.expectedStatus) {
        console.log(`✓ [PASS] ${test.name}: HTTP ${res.statusCode} (Content-Type: ${res.headers['content-type']})`);
        passed++;
      } else {
        console.error(`✗ [FAIL] ${test.name}: HTTP ${res.statusCode}`);
      }
    } catch (err) {
      console.error(`✗ [ERROR] ${test.name}:`, err.message);
    }
  }

  console.log(`\nResults: ${passed}/${tests.length} tests passed.`);
  process.exit(passed === tests.length ? 0 : 1);
}, 1000);

