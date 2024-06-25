import { css } from 'styled-components';
import { fontWeight as androidFontWeight } from './fontWeight.android';

describe('Android', () => {
  const fontWeights = {
    regular: 400,
    semiBold: 600,
    black: 900,
  };

  const baseFont = {
    family: 'sans-serif',
  };

  const theme = {
    yoga: {
      baseFont,
    },
  };

  describe('fontWeight', () => {
    it('Should return values for fontWeight prop', () => {
      const expectedRegularFontWeight = css({
        fontFamily: `${baseFont.family}`,
      });
      const expectedSemiBoldFontWeight = css({
        fontFamily: `${baseFont.family}-${fontWeights.semiBold}`,
      });
      const expectedBlackFontWeight = css({
        fontFamily: `${baseFont.family}-${fontWeights.black}`,
      });

      const regular = androidFontWeight({ theme, fontWeight: 400 });
      const regular1 = androidFontWeight({ theme, fw: 400 });
      const semiBold = androidFontWeight({ theme, fontWeight: 600 });
      const black = androidFontWeight({ theme, fw: 900 });

      expect(regular).toStrictEqual(regular1);
      expect(regular).toStrictEqual(expectedRegularFontWeight);
      expect(semiBold).toStrictEqual(expectedSemiBoldFontWeight);
      expect(black).toStrictEqual(expectedBlackFontWeight);
    });

    it('Should return the value if there is no theme match', () => {
      const expectedNoTheme = css({ fontFamily: `${baseFont.family}-800` });

      const fw = androidFontWeight({ theme, fontWeight: 800 });

      expect(fw).toStrictEqual(expectedNoTheme);
    });
  });
});
