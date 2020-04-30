import 'proxy-polyfill';

import baseTheme from '../themes/BaseTheme';

const skeleton = baseTheme({
  primary: 'primary',
  secondary: 'secondary',
  tertiary: 'tertiary',
});

const withoutKey = (fn, key) => !{}.hasOwnProperty.call(fn, key);

const createFakeObj = (paths, object) => {
  const fn = props => paths.reduce((acc, path) => acc[path], props);

  Object.getOwnPropertyNames(object).forEach(key => {
    // We only need the key to be present, the value does not matter.
    fn[key] = true;
  });

  return new Proxy(fn, {
    get(target, key) {
      if (key === 'isReactComponent') return false;

      if (withoutKey(fn, key)) return target[key];

      return createFakeObj([...paths, key], object[key]);
    },
  });
};

export default createFakeObj(['theme', 'yoga'], skeleton);
