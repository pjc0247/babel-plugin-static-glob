const glob = require('glob');

const StaticGlobPlugin = () => () => {
  return {
    visitor: {
      CallExpression(x) {
        const name = x.node.callee.name;
        const arg0 = x.node.arguments[0];

        if (name !== '__glob')
          return;

        const files = glob.sync(arg0.value)
          .map(file => `'${file}'`)
          .join(',');

        x.replaceWithSourceString(`
[
${files}
]`);
      }
    }
  };
};

module.exports = StaticGlobPlugin;
