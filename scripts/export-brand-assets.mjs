import { mkdir } from 'node:fs/promises';
import { createRequire } from 'node:module';
import os from 'node:os';
import path from 'node:path';

const projectRequire = createRequire(import.meta.url);
const bundledRequire = createRequire(
  path.join(os.homedir(), '.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/noop.js'),
);

let sharp;
try {
  sharp = projectRequire('sharp');
} catch {
  sharp = bundledRequire('sharp');
}

const root = process.cwd();
const brandDir = path.join(root, 'public', 'brand');

const exports = [
  ['wabase-og.svg', 'wabase-og.png', 1200, 630],
  ['wabase-logo-icon.svg', 'wabase-logo-icon.png', 1024, 1024],
  ['wabase-logo-mark-transparent.svg', 'wabase-logo-mark-transparent.png', 1024, 1024],
  ['wabase-logo-horizontal.svg', 'wabase-logo-horizontal.png', 1500, 420],
];

await mkdir(brandDir, { recursive: true });

for (const [source, target, width, height] of exports) {
  await sharp(path.join(brandDir, source), { density: 192 })
    .resize(width, height, { fit: 'fill' })
    .png({ compressionLevel: 9, adaptiveFiltering: true })
    .toFile(path.join(brandDir, target));
  console.log(`${target} ${width}x${height}`);
}
