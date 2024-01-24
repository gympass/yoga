import 'proxy-polyfill';
import tokens from '@gympass/yoga-tokens';

import theme from '../../theme';

const skeleton = theme(tokens);

const CACHE_PLACEHOLDER = null;

const withoutKey = (fn, key) =>
  !{}.hasOwnProperty.call(fn, key) || key === 'prototype';

const createFakeObj = (paths, object) => {
  const fn = props => paths.reduce((acc, path) => acc[path], props);

  // We only need the key to be present, the value does not matter.
  Object.keys(object).forEach(key => {
    fn[key] = CACHE_PLACEHOLDER;
  });

  return new Proxy(fn, {
    get(target, key) {
      if (withoutKey(fn, key)) return target[key];

      if (fn[key]) return fn[key];

      // We replace the value, this will be used as cache on the next call.
      fn[key] = createFakeObj([...paths, key], object[key]);
      return fn[key];
    },
  });
};

// TODO: Change this, maybe even using the custom theme from the declaration.
// export type PropParameter = { theme: { yoga: typeof skeleton } };
export type PropParameter = any;

type CallableFunction<T> = {
  (props: PropParameter): T;
};

type NestedObject<T> = {
  [K in keyof T]: T[K] extends Record<string, any>
    ? NestedObject<T[K]> & CallableFunction<T[K]>
    : T[K] & CallableFunction<T[K]>;
};

type ThemeReader = CallableFunction<typeof skeleton> &
  NestedObject<typeof skeleton>;

// @ts-ignore TODO: Remove any
export default createFakeObj(['theme', 'yoga'], skeleton) as ThemeReader;
