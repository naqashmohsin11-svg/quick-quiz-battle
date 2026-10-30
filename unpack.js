'use strict';
const fs = require('node:fs');
const path = require('node:path');
const os = require('node:os');
const zlib = require('node:zlib');
const { execFileSync } = require('node:child_process');

const bundleDir = path.join(__dirname, 'bundle');
const encoded = [1, 2, 3, 4]
  .map((part) => fs.readFileSync(path.join(bundleDir, `part${part}.b64`), 'utf8').trim())
  .join('');
const tarPath = path.join(os.tmpdir(), 'quick-quiz-battle-sources.tar');
fs.writeFileSync(tarPath, zlib.gunzipSync(Buffer.from(encoded, 'base64')));
execFileSync('tar', ['-xf', tarPath, '-C', __dirname], { stdio: 'inherit' });
fs.rmSync(tarPath, { force: true });
console.log('Quick Quiz Battle sources extracted.');
