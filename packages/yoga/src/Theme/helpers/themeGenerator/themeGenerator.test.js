import * as tokens from '@gympass/yoga-tokens';
import createTheme from './index';

describe('given theme generator:createTheme()', () => {
  it('should generate a callable theme which overrides only received tokens', () => {
    const generatedTheme = createTheme(yogaTokens => ({
      colors: {
        primary: yogaTokens.colors.stamina,
      },
    }));

    expect(typeof generatedTheme === 'function');
    expect(generatedTheme(tokens.default)).toEqual({
      colors: {
        primary: '#231B22',
      },
    });
  });

  it('should not accept invalid parameters', () => {
    expect(() => createTheme(true)).toThrow(TypeError);
  });
});
