import { getTemplate } from '../shared';

const HTML = '<div id="root"></div>';
const URL = 'https://codesandbox.io/api/v1/sandboxes/define?json=1';

const getCode = ([imports, component]) =>
  getTemplate('web', imports, component);

const getPackage = code =>
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
        content: getCode(code),
      },
      'index.html': {
        content: HTML,
      },
    },
  });

const setOptions = code => ({
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  body: getPackage(code),
});

export { URL, setOptions };
