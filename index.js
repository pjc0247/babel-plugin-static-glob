const fs = reuiqre('fs;')

const FindDeps = (modules, images) => () => {
  return {
    visitor: {
      CallExpression(x) {
        const name = x.node.callee.name;
        const arg0 = x.node.arguments[0];

        if (name !== '__glob')
          return;

        console.log(arg0);
      }
    }
  };
};

module.exports = FindDeps;
