const { Project, SyntaxKind } = require('ts-morph');

const project = new Project({
  skipAddingFilesFromTsConfig: true
});

const sourceFile = project.addSourceFileAtPath('src/data/lessons.tsx');

const getLessonsDecl = sourceFile.getVariableDeclaration('getLessons');
const arrowFunc = getLessonsDecl.getInitializerIfKind(SyntaxKind.ArrowFunction);
if (arrowFunc) {
  const body = arrowFunc.getBody();
  if (body.getKind() === SyntaxKind.Block) {
    body.insertStatements(0, `
  const lz = (en: any, tl?: any, es?: any) => {
    if (lang === 'es') return es || en;
    if (lang === 'tl') return tl || en;
    return en;
  };`);
  }
}

let modified = 0;
const conditionalExpressions = sourceFile.getDescendantsOfKind(SyntaxKind.ConditionalExpression);

for (let i = conditionalExpressions.length - 1; i >= 0; i--) {
  const node = conditionalExpressions[i];
  if (node.wasForgotten()) continue;
  
  const condition = node.getCondition();
  if (condition.getKind() === SyntaxKind.BinaryExpression) {
    const left = condition.getLeft().getText();
    const right = condition.getRight().getText();
    
    if (left === 'lang' && right === "'en'") {
      const enExpr = node.getWhenTrue().getText();
      let tlExpr = null;
      let esExpr = null;
      
      let whenFalse = node.getWhenFalse();
      if (whenFalse.getKind() === SyntaxKind.ConditionalExpression) {
        const innerCond = whenFalse.getCondition();
        if (innerCond.getKind() === SyntaxKind.BinaryExpression) {
            const iLeft = innerCond.getLeft().getText();
            const iRight = innerCond.getRight().getText();
            if (iLeft === 'lang' && iRight === "'tl'") {
                tlExpr = whenFalse.getWhenTrue().getText();
                esExpr = whenFalse.getWhenFalse().getText();
            }
        }
      }
      
      if (!tlExpr) {
        tlExpr = whenFalse.getText();
      }

      let esArg = esExpr ? `, ${esExpr}` : '';
      let newExprStr = `lz(${enExpr}, ${tlExpr}${esArg})`;
      
      node.replaceWithText(newExprStr);
      modified++;
    }
  }
}

sourceFile.saveSync();
console.log('Modified ternaries: ' + modified);
