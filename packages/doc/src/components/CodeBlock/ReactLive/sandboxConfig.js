import { web } from '../shared/templates';

const HTML = '<div id="root"></div>';
const URL = 'https://codesandbox.io/api/v1/sandboxes/define?json=1';

const getPackage = ([imports, component, theme]) =>
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
        content: web(imports, component, theme),
      },
      'index.html': {
        content: HTML,
      },
    },
  });

const setOptions = options => ({
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  body: getPackage(options),
});

export { URL, setOptions };
