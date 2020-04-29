import theme from './themeReader';

describe('theme reader', () => {
  it('should return a function', () => {
    expect(theme).toBeInstanceOf(Function);
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
          my: { nested: { value } },
        },
      },
    };

    expect(theme.my.nested.value(obj)).toBe(value);
  });

  it('should be able to get fields with array position', () => {
    const array = ['nice', 'array', 'bro'];
    const obj = {
      theme: {
        yoga: {
          array,
        },
      },
    };

    array.forEach((val, i) => {
      expect(theme.array[i](obj)).toBe(val);
    });
  });
});
