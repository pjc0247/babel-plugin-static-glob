babel-plugin-static-glob
====

```tsx
__glob('**/*.js').map(x => console.log(x));
```

will be transpiled into:

```
[
  './src/index.js',
  './src/App.js',
  './src/component/TestComponent.js',
  './src/page/LoginPage.js',
].map(x => console.log(x));
```