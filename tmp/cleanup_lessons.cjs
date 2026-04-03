const fs = require('fs');
const path = require('path');

const filePath = 'e:\\gdev\\trueseed\\the-true-seed\\src\\data\\lessons.tsx';
let content = fs.readFileSync(filePath, 'utf8');

const lines = content.split(/\r?\n/);
const resultLines = [];
let lastTrimmed = null;

for (let i = 0; i < lines.length; i++) {
    const currentLine = lines[i];
    const trimmed = currentLine.trim();
    
    // Check if it's one of our target duplicate properties
    const isDuplicateTarget = trimmed.startsWith('titleEs:') || 
                              trimmed.startsWith('searchKeywordsEs:') || 
                              trimmed.startsWith('searchContentEs:');
    
    // If it's a duplicate target and it's the SAME as the last line we kept, skip it.
    if (isDuplicateTarget && trimmed === lastTrimmed) {
        continue;
    }
    
    resultLines.push(currentLine);
    if (trimmed !== '') {
        lastTrimmed = trimmed;
    }
}

fs.writeFileSync(filePath, resultLines.join('\n'));
console.log('Cleanup complete.');
