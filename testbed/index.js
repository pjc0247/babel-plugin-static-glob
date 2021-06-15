const babel = require('@babel/core');
const staticGlob = require('../index');

const before = `
__glob('**/*').map(x => console.log(x));
`;
const after = babel.transformSync(
  before,
  {
    filename: 'index.js',
    presets: [],
    plugins: [staticGlob()],
  },
).code;

console.log(after);