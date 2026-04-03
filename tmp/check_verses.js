import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const srcDir = path.join(__dirname, '..', 'src');
const scriptureDataPath = path.join(srcDir, 'scriptureData.tsx');

// Parse scriptureData.tsx to get existing verses
const scriptureDataContent = fs.readFileSync(scriptureDataPath, 'utf8');
const existingVerses = new Set();
const regexKey = /"([^"]+)":\s*"/g;
let match;
while ((match = regexKey.exec(scriptureDataContent)) !== null) {
  existingVerses.add(match[1]);
}

// Find all verse="..." in src
const missingVerses = new Set();

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.mdx')) {
      const content = fs.readFileSync(fullPath, 'utf8');
      const verseRegex = /<ScriptureLink[^>]*verse="([^"]+)"/g;
      let verseMatch;
      while ((verseMatch = verseRegex.exec(content)) !== null) {
        const verse = verseMatch[1];
        if (!existingVerses.has(verse)) {
          missingVerses.add(verse);
        }
      }
    }
  }
}

walkDir(srcDir);

console.log("Missing verses:");
for (const v of missingVerses) {
  console.log(v);
}
