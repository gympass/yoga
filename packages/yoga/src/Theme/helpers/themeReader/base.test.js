import ProxyPolyfillBuilder from 'proxy-polyfill/src/proxy';

import theme from './index';

describe('themeReader - base specs', () => {
  beforeAll(() => {
    // Tests should ran using the polyfill.
    global.Proxy = ProxyPolyfillBuilder();
  });

  it('should return a function', () => {
    expect(theme).toBeInstanceOf(Function);
  });

  it('should return undefined if key does not exist on the theme', () => {
    expect(typeof theme.colors.randomValue).toBe('undefined');
    expect(typeof theme.randomValue).toBe('undefined');
  });

  it('should have theme.yoga as the base path', () => {
    const yoga = 'wow cool theme, such tokens';
    const obj = { theme: { yoga } };

    expect(theme(obj)).toBe(yoga);
  });

  it('should be able to get fields with keys', () => {
    const value = 'deep!';
    const obj = {
      theme: {
        yoga: {
          breakpoints: {
            xs: {
              margin: value,
            },
          },
        },
      },
    };

    expect(theme.breakpoints.xs.margin(obj)).toBe(value);
  });

  it('should be able to get fields with array position', () => {
    const array = ['nice', 'array', 'bro'];
    const obj = {
      theme: {
        yoga: {
          borders: array,
        },
      },
    };

    array.forEach((val, i) => {
      expect(theme.borders[i](obj)).toBe(val);
    });
  });

  it('should be destructible', () => {
    const baseFontSizeValue = 'nice size';
    const primaryValue = 'very primary';
    const lgValue = 'much large';

    const obj = {
      theme: {
        yoga: {
          baseFontSize: baseFontSizeValue,
          colors: {
            primary: primaryValue,
          },
          breakpoints: {
            lg: lgValue,
          },
        },
      },
    };

    const {
      baseFontSize,
      colors: { primary },
      breakpoints,
    } = theme;

    expect(primary(obj)).toBe(primaryValue);
    expect(breakpoints.lg(obj)).toBe(lgValue);
    expect(baseFontSize(obj)).toBe(baseFontSizeValue);
  });
});
