const HTML = '<div id="root"></div>';

const CODE = `import React from 'react';
import ReactDOM from 'react-dom';
import {ThemeProvider, Button} from '@gympass/yoga';

const App = () => <ThemeProvider>
<Button>Gympass</Button>
</ThemeProvider>

ReactDOM.render(
  <App />,
  document.getElementById('root')
);`;

const PACKAGE = {
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
      content: CODE,
    },
    'index.html': {
      content: HTML,
    },
  },
};

const URL = 'https://codesandbox.io/api/v1/sandboxes/define?json=1';

const METHOD = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  body: JSON.stringify(PACKAGE),
};

export { URL, METHOD };
