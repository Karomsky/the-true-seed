const fs = require('fs');
const path = require('path');

const filePath = 'e:\\gdev\\trueseed\\the-true-seed\\src\\data\\lessons.tsx';
let content = fs.readFileSync(filePath, 'utf8');

// Match duplicate lines like:
//       titleEs: lesson01Fm.titleEs,
//       titleEs: lesson01Fm.titleEs,
//       ...
// This regex matches a line and then any number of identical subsequent lines.
// It uses a backreference to identify the same content.
// We need to handle white space at the start.

const lines = content.split('\n');
const resultLines = [];
let lastLine = null;

for (let i = 0; i < lines.length; i++) {
    const currentLine = lines[i];
    const trimmed = currentLine.trim();
    
    // Check if it's one of our target duplicate properties
    const isDuplicateTarget = trimmed.startsWith('titleEs:') || 
                              trimmed.startsWith('searchKeywordsEs:') || 
                              trimmed.startsWith('searchContentEs:');
    
    if (isDuplicateTarget && trimmed === (lastLine ? lastLine.trim() : null)) {
        // Skip this line if it's a duplicate of the previous line
        continue;
    }
    
    resultLines.push(currentLine);
    lastLine = currentLine;
}

fs.writeFileSync(filePath, resultLines.join('\n'));
console.log('Cleanup complete.');
