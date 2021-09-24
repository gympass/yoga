import { css } from 'styled-components';
import {
  fontSize,
  fontWeight,
  color,
  lineHeight,
  typography,
} from './typography';

import { fontWeight as fontWeightAndroid } from './fontWeight.android';

const fontSizes = [10, 20, 40];

[fontSizes.small, fontSizes.medium, fontSizes.large] = fontSizes;

const lineHeights = [12, 16, 20];

[lineHeights.small, lineHeights.medium, lineHeights.large] = lineHeights;

const fontWeights = [300, 500, 900];

[fontWeights.light, fontWeights.medium, fontWeights.bold] = fontWeights;

const baseFont = {
  family: 'Rubik',
  weight: [...fontWeights, ...fontWeights.map(weight => `${weight}i`)],
};

const colors = {
  vibin: '#D8385E',
  text: {
    primary: '#000',
  },
};

const theme = {
  yoga: {
    colors,
    fontSizes,
    lineHeights,
    fontWeights,
    baseFont,
  },
};

describe('Web and iOS', () => {
  describe('typography', () => {
    describe('typography', () => {
      it('Should return values for typography prop', () => {
        const expectedTypography = css({
          color: colors.vibin,
          fontSize: fontSizes.medium,
          fontWeight: fontWeights.bold,
          lineHeight: `${lineHeights.medium}px`,
        });

        const font = typography({
          theme,
          color: 'vibin',
          fs: fontSizes.medium,
          fw: fontWeights.bold,
          lh: lineHeights.medium,
        });

        expect(font).toStrictEqual(expectedTypography);
      });

      it('Should return the value if there is no theme match', () => {
        const expectedNoTheme = css({ color: 'tomato' });

        const font = typography({ theme, color: 'tomato' });

        expect(font).toStrictEqual(expectedNoTheme);
      });
    });

    describe('fontSize', () => {
      it('Should return values for fontSize prop', () => {
        const expectedFontSize = css({ fontSize: fontSizes.medium });

        const fs1 = fontSize({ theme, fs: 'medium' });
        const fs2 = fontSize({ theme, fontSize: 'medium' });

        expect(fs1).toStrictEqual(fs2);

        const fontSizesOptions = [fs1, fs2];

        fontSizesOptions.map(c => expect(c).toStrictEqual(expectedFontSize));
      });

      it('Should return the value if there is no theme match', () => {
        const expectedNoTheme = css({ fontSize: 72 });

        const fs = fontSize({ theme, fs: 72 });

        expect(fs).toStrictEqual(expectedNoTheme);
      });
    });

    describe('fontWeight', () => {
      it('Should return values for fontWeight prop', () => {
        const expectedFontWeight = css({ fontWeight: fontWeights.medium });

        const fw1 = fontWeight({ theme, fw: 'medium' });
        const fw2 = fontWeight({ theme, fontWeight: 'medium' });

        expect(fw1).toStrictEqual(fw2);

        const fontWeightsOptions = [fw1, fw2];

        fontWeightsOptions.map(c =>
          expect(c).toStrictEqual(expectedFontWeight),
        );
      });

      it('Should return the value if there is no theme match', () => {
        const expectedNoTheme = css({ fontWeight: 600 });

        const fw = fontWeight({ theme, fw: 600 });

        expect(fw).toStrictEqual(expectedNoTheme);
      });
    });

    describe('lineHeight', () => {
      it('Should return values for lineHeight prop', () => {
        const expectedLineHeight = css({
          lineHeight: `${lineHeights.medium}px`,
        });

        const lh1 = lineHeight({ theme, lh: 'medium' });
        const lh2 = lineHeight({ theme, lineHeight: 'medium' });

        expect(lh1).toStrictEqual(lh2);

        const lineHeightsOptions = [lh1, lh2];

        lineHeightsOptions.map(c =>
          expect(c).toStrictEqual(expectedLineHeight),
        );
      });

      it('Should return the value if there is no theme match', () => {
        const expectedNoTheme = css({ lineHeight: '5px' });

        const lh = lineHeight({ theme, lh: 5 });

        expect(lh).toStrictEqual(expectedNoTheme);
      });
    });

    describe('color', () => {
      it('Should return values for color prop', () => {
        const expectedColor = css({ color: colors.vibin });

        const c1 = color({ theme, c: 'vibin' });
        const c2 = color({ theme, color: 'vibin' });

        expect(c1).toStrictEqual(c2);

        const colorOptions = [c1, c2];

        colorOptions.map(c => expect(c).toStrictEqual(expectedColor));
      });

      it('Should return the color based on its path', () => {
        const expectedNoTheme = css({ color: colors.text.primary });

        const c = color({ theme, color: 'text.primary' });

        expect(c).toStrictEqual(expectedNoTheme);
      });

      it('Should return the value if there is no theme match', () => {
        const expectedNoTheme = css({ color: 'tomato' });

        const c = color({ theme, color: 'tomato' });

        expect(c).toStrictEqual(expectedNoTheme);
      });
    });
  });
});

describe('Android', () => {
  describe('typography', () => {
    describe('fontWeight', () => {
      it('Should return the correspondent fontFamily', () => {
        const expectedFontFamily = css({
          fontFamily: `${baseFont.family}-${fontWeights.medium}`,
        });

        const fw1 = fontWeightAndroid({ theme, fw: 'medium' });

        expect(fw1).toStrictEqual(expectedFontFamily);
      });

      it('Should return values for fontWeight prop', () => {
        const expectedFontFamily = css({
          fontFamily: `${baseFont.family}-${fontWeights.medium}`,
        });

        const fw1 = fontWeightAndroid({ theme, fw: 'medium' });
        const fw2 = fontWeightAndroid({ theme, fontWeight: 'medium' });

        expect(fw1).toStrictEqual(fw2);

        const fontWeightsOptions = [fw1, fw2];

        fontWeightsOptions.map(c =>
          expect(c).toStrictEqual(expectedFontFamily),
        );
      });

      it('Should return the value if there is no theme match', () => {
        const expectedNoTheme = css({
          fontFamily: `${baseFont.family}-200`,
        });

        const fw = fontWeightAndroid({ theme, fw: 200 });

        expect(fw).toStrictEqual(expectedNoTheme);
      });
    });
  });
});
