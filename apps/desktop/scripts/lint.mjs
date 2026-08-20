import { readFile } from 'node:fs/promises';

const files = ['index.html', 'src/app.js', 'src/styles.css'];
for (const file of files) {
  const contents = await readFile(file, 'utf8');
  if (contents.includes('onclick="') || contents.includes('javascript:')) {
    throw new Error(`Unsafe inline handler pattern found in ${file}`);
  }
}
console.log('Desktop source lint checks passed');
