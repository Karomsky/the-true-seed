const fs = require('fs');
const path = require('path');

const lessonsFile = path.join(__dirname, '..', 'src', 'data', 'lessons.tsx');
let lessonsContent = fs.readFileSync(lessonsFile, 'utf8');

const lessonsDir = path.join(__dirname, '..', 'src', 'content', 'lessons');
const mdxFiles = fs.readdirSync(lessonsDir).filter(f => f.endsWith('.mdx'));

console.log('Starting Quiz Title frontmatter migration...');

let modifications = 0;

mdxFiles.forEach((filename) => {
    const lessonNumMatch = filename.match(/^(\d{2})-/);
    if (!lessonNumMatch) return;
    const lessonNumStr = lessonNumMatch[1];
    
    // Find the lesson object in lessons.tsx
    // Usually it looks like:
    // quiz: {
    //    title: lz("English", "Tagalog", "Spanish"),
    
    // OR:
    // quiz: {
    //    title: "English"
    
    const fmVarName = `lesson${lessonNumStr}Fm`;
    
    const blockRegex = new RegExp(`content: <Lesson${lessonNumStr}Content[\\s\\S]*?quiz: \\{\\s*title: (.+?),\\s*questions:`, 'm');
    const match = lessonsContent.match(blockRegex);
    
    if (match) {
        const titleLine = match[1].trim(); 
        let titleEn = '';
        let titleTl = '';
        let titleEs = '';
        
        // Check if it's using lz() 
        if (titleLine.startsWith('lz(')) {
            // e.g. lz("The Revelation", "Ang Pahayag", "La RevelaciA3n")
            // simple regex extraction
            const lzArgsMatch = titleLine.match(/lz\s*\(\s*["']([^"']+)["']\s*(?:,\s*["']([^"']+)["'])?\s*(?:,\s*["']([^"']+)["'])?\s*\)/);
            if (lzArgsMatch) {
                titleEn = lzArgsMatch[1];
                titleTl = lzArgsMatch[2] || titleEn;
                titleEs = lzArgsMatch[3] || titleEn;
            }
        } else if (titleLine.startsWith('"') || titleLine.startsWith("'")) {
            // e.g. "The Only True God"
            const strMatch = titleLine.match(/["']([^"']+)["']/);
            if (strMatch) {
                titleEn = strMatch[1];
                titleTl = titleEn; // if no translation was provided
                titleEs = titleEn;
            }
        }
        
        if (titleEn) {
            // Now, we need to inject this into the MDX frontmatter
            const mdxPath = path.join(lessonsDir, filename);
            let mdxContent = fs.readFileSync(mdxPath, 'utf8');
            
            // Inject right before the closing ---
            if (!mdxContent.includes('quizTitle:')) {
                const fmEndIndex = mdxContent.indexOf('---', 1);
                if (fmEndIndex !== -1) {
                    const injection = `quizTitle: "${titleEn}"\nquizTitleTl: "${titleTl}"\nquizTitleEs: "${titleEs}"\n`;
                    mdxContent = mdxContent.slice(0, fmEndIndex) + injection + mdxContent.slice(fmEndIndex);
                    fs.writeFileSync(mdxPath, mdxContent);
                    
                    // Replace in lessons.tsx
                    const newTitleLine = `lz(${fmVarName}.quizTitle, ${fmVarName}.quizTitleTl, ${fmVarName}.quizTitleEs)`;
                    lessonsContent = lessonsContent.replace(match[0], match[0].replace(titleLine, newTitleLine));
                    modifications++;
                    console.log(`Migrated quiz title for ${filename}`);
                }
            }
        }
    }
});

if (modifications > 0) {
    fs.writeFileSync(lessonsFile, lessonsContent);
    console.log(`Successfully migrated ${modifications} quiz titles into MDX frontmatter.`);
} else {
    console.log('No new migrations needed or an error occurred parsing the files.');
}
