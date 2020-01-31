import injectImport from '..';

const web = (imports, code, theme) => `import React from 'react';
import ReactDOM from 'react-dom';
${injectImport(imports, ['ThemeProvider'], ['@gympass/yoga'])}

const App = () => <ThemeProvider ${theme ? `theme='${theme}'` : ''}>
${code}
</ThemeProvider>

ReactDOM.render(
  <App />,
  document.getElementById('root')
);`;

export default web;
