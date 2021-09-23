import * as tokens from '@gympass/yoga-tokens';
import createTheme from './index';

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
