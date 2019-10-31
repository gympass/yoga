const HTML = '<div id="root"></div>';
const URL = 'https://codesandbox.io/api/v1/sandboxes/define?json=1';

const getCode = component => `import React from 'react';
import ReactDOM from 'react-dom';
import {ThemeProvider, Button} from '@gympass/yoga';

const App = () => <ThemeProvider>
${component}
</ThemeProvider>

ReactDOM.render(
  <App />,
  document.getElementById('root')
);`;

const getPackage = component =>
  JSON.stringify({
    files: {
      'package.json': {
        content: {
          dependencies: {
            react: 'latest',
            'react-dom': 'latest',
            '@gympass/yoga': 'latest',
            'styled-components': 'latest',
          },
        },
      },
      'index.js': {
        content: getCode(component),
      },
      'index.html': {
        content: HTML,
      },
    },
  });

const setOptions = component => ({
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  body: getPackage(component),
});

export { URL, setOptions };
