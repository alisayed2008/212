import { readFile } from 'node:fs/promises';
import test from 'node:test';
import assert from 'node:assert/strict';

test('desktop shell includes the required Phase 1 flow copy and handlers', async () => {
  const [html, app, css] = await Promise.all([
    readFile('index.html', 'utf8'),
    readFile('src/app.js', 'utf8'),
    readFile('src/styles.css', 'utf8'),
  ]);

  assert.match(html, /<div id="root"><\/div>/);
  assert.match(app, /Preparing your workspace/);
  assert.match(app, /Start with a free PrintAI account/);
  assert.match(app, /What do you want to make\?/);
  assert.match(app, /Drag & Drop an image here/);
  assert.match(app, /data-action="continue-free"/);
  assert.match(app, /data-action="create-project"/);
  assert.match(app, /File<\/span><span>Edit<\/span><span>View<\/span><span>Window<\/span><span>Settings/);
  assert.match(css, /@media \(prefers-reduced-motion: reduce\)/);
  assert.match(css, /grid-template-columns: 1fr 360px/);
});
