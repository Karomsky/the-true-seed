const fs = require('fs');
let content = fs.readFileSync('src/data/lessons.tsx', 'utf8');

// The replacement patterns
content = content.replace(/titleTl:\s*([a-zA-Z0-9_]+)\.titleTl,/g, (match, prefix) => {
  return `${match}\n      titleEs: ${prefix}.titleEs,`;
});

content = content.replace(/searchKeywordsTl:\s*([a-zA-Z0-9_]+)\.searchKeywordsTl,/g, (match, prefix) => {
  return `${match}\n      searchKeywordsEs: ${prefix}.searchKeywordsEs,`;
});

content = content.replace(/searchContentTl:\s*([a-zA-Z0-9_]+)\.searchContentTl,/g, (match, prefix) => {
  return `${match}\n      searchContentEs: ${prefix}.searchContentEs,`;
});

fs.writeFileSync('src/data/lessons.tsx', content);
console.log('Fixed properties!');
