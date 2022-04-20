import { css } from 'styled-components';
import {
  border,
  borderTop,
  borderRight,
  borderBottom,
  borderLeft,
  borderColor,
  borderTopColor,
  borderRightColor,
  borderBottomColor,
  borderLeftColor,
  borderWidth,
  borderTopWidth,
  borderRightWidth,
  borderBottomWidth,
  borderLeftWidth,
  borderRadius,
  borderTopLeftRadius,
  borderTopRightRadius,
  borderBottomLeftRadius,
  borderBottomRightRadius,
} from './border';

const borders = [0, 1, 2];

[borders.zero, borders.small, borders.medium] = borders;

const radii = [0, 4, 8, 9999];

[radii.sharp, radii.semiRounded, radii.rounded, radii.circle] = radii;

const colors = {
  vibin: '#D8385E',
  hope: '#1D856C',
};

const theme = {
  yoga: {
    borders,
    colors,
    radii,
  },
};

describe('borders', () => {
  describe('border', () => {
    it('Should return values for border prop', () => {
      const expectedZeroStyle = css({ border: 'none' });
      const expectedSmallStyle = css({ border: `${borders.small}px solid` });

      const zero1 = border({ theme, b: 'zero' });
      const zero2 = border({ theme, border: 'zero' });

      expect(zero1).toStrictEqual(zero2);

      const small1 = border({ theme, b: 'small' });
      const small2 = border({ theme, border: 'small' });

      expect(small1).toStrictEqual(small2);

      const zeroOptions = [zero1, zero2];

      zeroOptions.map((z) => expect(z).toStrictEqual(expectedZeroStyle));

      const smallOptions = [small1, small2];

      smallOptions.map((s) => expect(s).toStrictEqual(expectedSmallStyle));
    });

    it('Should return the value if there is no theme match', () => {
      const expectedNoTheme = css({ border: '10px solid' });

      const b = border({ theme, border: '10px solid' });

      expect(b).toStrictEqual(expectedNoTheme);
    });
  });

  describe('borderTop', () => {
    it('Should return values for borderTop prop', () => {
      const expectedZeroStyle = css({ borderTop: 'none' });
      const expectedSmallStyle = css({ borderTop: `${borders.small}px solid` });

      const zero1 = borderTop({ theme, bt: 'zero' });
      const zero2 = borderTop({ theme, borderTop: 'zero' });

      expect(zero1).toStrictEqual(zero2);

      const small1 = borderTop({ theme, bt: 'small' });
      const small2 = borderTop({ theme, borderTop: 'small' });

      expect(small1).toStrictEqual(small2);

      const zeroOptions = [zero1, zero2];

      zeroOptions.map((z) => expect(z).toStrictEqual(expectedZeroStyle));

      const smallOptions = [small1, small2];

      smallOptions.map((s) => expect(s).toStrictEqual(expectedSmallStyle));
    });

    it('Should return the value if there is no theme match', () => {
      const expectedNoTheme = css({ borderTop: '10px solid' });

      const b = borderTop({ theme, borderTop: '10px solid' });

      expect(b).toStrictEqual(expectedNoTheme);
    });
  });

  describe('borderRight', () => {
    it('Should return values for borderRight prop', () => {
      const expectedZeroStyle = css({ borderRight: 'none' });
      const expectedSmallStyle = css({
        borderRight: `${borders.small}px solid`,
      });

      const zero1 = borderRight({ theme, br: 'zero' });
      const zero2 = borderRight({ theme, borderRight: 'zero' });

      expect(zero1).toStrictEqual(zero2);

      const small1 = borderRight({ theme, br: 'small' });
      const small2 = borderRight({ theme, borderRight: 'small' });

      expect(small1).toStrictEqual(small2);

      const zeroOptions = [zero1, zero2];

      zeroOptions.map((z) => expect(z).toStrictEqual(expectedZeroStyle));

      const smallOptions = [small1, small2];

      smallOptions.map((s) => expect(s).toStrictEqual(expectedSmallStyle));
    });

    it('Should return the value if there is no theme match', () => {
      const expectedNoTheme = css({ borderRight: '10px solid' });

      const b = borderRight({ theme, borderRight: '10px solid' });

      expect(b).toStrictEqual(expectedNoTheme);
    });
  });

  describe('borderBottom', () => {
    it('Should return values for borderBottom prop', () => {
      const expectedZeroStyle = css({ borderBottom: 'none' });
      const expectedSmallStyle = css({
        borderBottom: `${borders.small}px solid`,
      });

      const zero1 = borderBottom({ theme, bb: 'zero' });
      const zero2 = borderBottom({ theme, borderBottom: 'zero' });

      expect(zero1).toStrictEqual(zero2);

      const small1 = borderBottom({ theme, bb: 'small' });
      const small2 = borderBottom({ theme, borderBottom: 'small' });

      expect(small1).toStrictEqual(small2);

      const zeroOptions = [zero1, zero2];

      zeroOptions.map((z) => expect(z).toStrictEqual(expectedZeroStyle));

      const smallOptions = [small1, small2];

      smallOptions.map((s) => expect(s).toStrictEqual(expectedSmallStyle));
    });

    it('Should return the value if there is no theme match', () => {
      const expectedNoTheme = css({ borderBottom: '10px solid' });

      const b = borderBottom({ theme, borderBottom: '10px solid' });

      expect(b).toStrictEqual(expectedNoTheme);
    });
  });

  describe('borderLeft', () => {
    it('Should return values for borderLeft prop', () => {
      const expectedZeroStyle = css({ borderLeft: 'none' });
      const expectedSmallStyle = css({
        borderLeft: `${borders.small}px solid`,
      });

      const zero1 = borderLeft({ theme, bl: 'zero' });
      const zero2 = borderLeft({ theme, borderLeft: 'zero' });

      expect(zero1).toStrictEqual(zero2);

      const small1 = borderLeft({ theme, bl: 'small' });
      const small2 = borderLeft({ theme, borderLeft: 'small' });

      expect(small1).toStrictEqual(small2);

      const zeroOptions = [zero1, zero2];

      zeroOptions.map((z) => expect(z).toStrictEqual(expectedZeroStyle));

      const smallOptions = [small1, small2];

      smallOptions.map((s) => expect(s).toStrictEqual(expectedSmallStyle));
    });

    it('Should return the value if there is no theme match', () => {
      const expectedNoTheme = css({ borderLeft: '10px solid' });

      const b = borderLeft({ theme, borderLeft: '10px solid' });

      expect(b).toStrictEqual(expectedNoTheme);
    });
  });

  describe('borderColor', () => {
    it('Should return values for borderColor prop', () => {
      const vibinStyle = css({ borderColor: colors.vibin });
      const hopeStyle = css({
        borderColor: colors.hope,
      });

      const vibin1 = borderColor({ theme, bc: 'vibin' });
      const vibin2 = borderColor({ theme, borderColor: 'vibin' });

      expect(vibin1).toStrictEqual(vibin2);

      const hope1 = borderColor({ theme, bc: 'hope' });
      const hope2 = borderColor({ theme, borderColor: 'hope' });

      expect(hope1).toStrictEqual(hope2);

      const vibinOptions = [vibin1, vibin2];

      vibinOptions.map((z) => expect(z).toStrictEqual(vibinStyle));

      const hopeOptions = [hope1, hope2];

      hopeOptions.map((s) => expect(s).toStrictEqual(hopeStyle));
    });

    it('Should return the value if there is no theme match', () => {
      const expectedNoTheme = css({ borderColor: 'red' });

      const b = borderColor({ theme, borderColor: 'red' });

      expect(b).toStrictEqual(expectedNoTheme);
    });
  });

  describe('borderTopColor', () => {
    it('Should return values for borderTopColor prop', () => {
      const vibinStyle = css({ borderTopColor: colors.vibin });
      const hopeStyle = css({
        borderTopColor: colors.hope,
      });

      const vibin1 = borderTopColor({ theme, btc: 'vibin' });
      const vibin2 = borderTopColor({ theme, borderTopColor: 'vibin' });

      expect(vibin1).toStrictEqual(vibin2);

      const hope1 = borderTopColor({ theme, btc: 'hope' });
      const hope2 = borderTopColor({ theme, borderTopColor: 'hope' });

      expect(hope1).toStrictEqual(hope2);

      const vibinOptions = [vibin1, vibin2];

      vibinOptions.map((z) => expect(z).toStrictEqual(vibinStyle));

      const hopeOptions = [hope1, hope2];

      hopeOptions.map((s) => expect(s).toStrictEqual(hopeStyle));
    });

    it('Should return the value if there is no theme match', () => {
      const expectedNoTheme = css({ borderTopColor: 'red' });

      const b = borderTopColor({ theme, borderTopColor: 'red' });

      expect(b).toStrictEqual(expectedNoTheme);
    });
  });

  describe('borderRightColor', () => {
    it('Should return values for borderRightColor prop', () => {
      const vibinStyle = css({ borderRightColor: colors.vibin });
      const hopeStyle = css({
        borderRightColor: colors.hope,
      });

      const vibin1 = borderRightColor({ theme, brc: 'vibin' });
      const vibin2 = borderRightColor({ theme, borderRightColor: 'vibin' });

      expect(vibin1).toStrictEqual(vibin2);

      const hope1 = borderRightColor({ theme, brc: 'hope' });
      const hope2 = borderRightColor({ theme, borderRightColor: 'hope' });

      expect(hope1).toStrictEqual(hope2);

      const vibinOptions = [vibin1, vibin2];

      vibinOptions.map((z) => expect(z).toStrictEqual(vibinStyle));

      const hopeOptions = [hope1, hope2];

      hopeOptions.map((s) => expect(s).toStrictEqual(hopeStyle));
    });

    it('Should return the value if there is no theme match', () => {
      const expectedNoTheme = css({ borderRightColor: 'red' });

      const b = borderRightColor({ theme, borderRightColor: 'red' });

      expect(b).toStrictEqual(expectedNoTheme);
    });
  });

  describe('borderBottomColor', () => {
    it('Should return values for borderBottomColor prop', () => {
      const vibinStyle = css({ borderBottomColor: colors.vibin });
      const hopeStyle = css({
        borderBottomColor: colors.hope,
      });

      const vibin1 = borderBottomColor({ theme, bbc: 'vibin' });
      const vibin2 = borderBottomColor({ theme, borderBottomColor: 'vibin' });

      expect(vibin1).toStrictEqual(vibin2);

      const hope1 = borderBottomColor({ theme, bbc: 'hope' });
      const hope2 = borderBottomColor({ theme, borderBottomColor: 'hope' });

      expect(hope1).toStrictEqual(hope2);

      const vibinOptions = [vibin1, vibin2];

      vibinOptions.map((z) => expect(z).toStrictEqual(vibinStyle));

      const hopeOptions = [hope1, hope2];

      hopeOptions.map((s) => expect(s).toStrictEqual(hopeStyle));
    });

    it('Should return the value if there is no theme match', () => {
      const expectedNoTheme = css({ borderBottomColor: 'red' });

      const b = borderBottomColor({ theme, borderBottomColor: 'red' });

      expect(b).toStrictEqual(expectedNoTheme);
    });
  });

  describe('borderLeftColor', () => {
    it('Should return values for borderLeftColor prop', () => {
      const vibinStyle = css({ borderLeftColor: colors.vibin });
      const hopeStyle = css({
        borderLeftColor: colors.hope,
      });

      const vibin1 = borderLeftColor({ theme, blc: 'vibin' });
      const vibin2 = borderLeftColor({ theme, borderLeftColor: 'vibin' });

      expect(vibin1).toStrictEqual(vibin2);

      const hope1 = borderLeftColor({ theme, blc: 'hope' });
      const hope2 = borderLeftColor({ theme, borderLeftColor: 'hope' });

      expect(hope1).toStrictEqual(hope2);

      const vibinOptions = [vibin1, vibin2];

      vibinOptions.map((z) => expect(z).toStrictEqual(vibinStyle));

      const hopeOptions = [hope1, hope2];

      hopeOptions.map((s) => expect(s).toStrictEqual(hopeStyle));
    });

    it('Should return the value if there is no theme match', () => {
      const expectedNoTheme = css({ borderLeftColor: 'red' });

      const b = borderLeftColor({ theme, borderLeftColor: 'red' });

      expect(b).toStrictEqual(expectedNoTheme);
    });
  });

  describe('borderWidth', () => {
    it('Should return values for borderWidth prop', () => {
      const expectedZeroStyle = css({ borderWidth: borders.zero });
      const expectedMediumStyle = css({
        borderWidth: borders.medium,
      });

      const zero1 = borderWidth({ theme, bw: 'zero' });
      const zero2 = borderWidth({ theme, borderWidth: 'zero' });

      expect(zero1).toStrictEqual(zero2);

      const medium1 = borderWidth({ theme, bw: 'medium' });
      const medium2 = borderWidth({ theme, borderWidth: 'medium' });

      expect(medium1).toStrictEqual(medium2);

      const zeroOptions = [zero1, zero2];

      zeroOptions.map((z) => expect(z).toStrictEqual(expectedZeroStyle));

      const mediumOptions = [medium1, medium2];

      mediumOptions.map((s) => expect(s).toStrictEqual(expectedMediumStyle));
    });

    it('Should return the value if there is no theme match', () => {
      const expectedNoTheme = css({ borderWidth: '30%' });

      const b = borderWidth({ theme, borderWidth: '30%' });

      expect(b).toStrictEqual(expectedNoTheme);
    });
  });

  describe('borderTopWidth', () => {
    it('Should return values for borderTopWidth prop', () => {
      const expectedZeroStyle = css({ borderTopWidth: borders.zero });
      const expectedMediumStyle = css({
        borderTopWidth: borders.medium,
      });

      const zero1 = borderTopWidth({ theme, btw: 'zero' });
      const zero2 = borderTopWidth({ theme, borderTopWidth: 'zero' });

      expect(zero1).toStrictEqual(zero2);

      const medium1 = borderTopWidth({ theme, btw: 'medium' });
      const medium2 = borderTopWidth({ theme, borderTopWidth: 'medium' });

      expect(medium1).toStrictEqual(medium2);

      const zeroOptions = [zero1, zero2];

      zeroOptions.map((z) => expect(z).toStrictEqual(expectedZeroStyle));

      const mediumOptions = [medium1, medium2];

      mediumOptions.map((s) => expect(s).toStrictEqual(expectedMediumStyle));
    });

    it('Should return the value if there is no theme match', () => {
      const expectedNoTheme = css({ borderTopWidth: '30%' });

      const b = borderTopWidth({ theme, borderTopWidth: '30%' });

      expect(b).toStrictEqual(expectedNoTheme);
    });
  });

  describe('borderRightWidth', () => {
    it('Should return values for borderRightWidth prop', () => {
      const expectedZeroStyle = css({ borderRightWidth: borders.zero });
      const expectedMediumStyle = css({
        borderRightWidth: borders.medium,
      });

      const zero1 = borderRightWidth({ theme, brw: 'zero' });
      const zero2 = borderRightWidth({ theme, borderRightWidth: 'zero' });

      expect(zero1).toStrictEqual(zero2);

      const medium1 = borderRightWidth({ theme, brw: 'medium' });
      const medium2 = borderRightWidth({ theme, borderRightWidth: 'medium' });

      expect(medium1).toStrictEqual(medium2);

      const zeroOptions = [zero1, zero2];

      zeroOptions.map((z) => expect(z).toStrictEqual(expectedZeroStyle));

      const mediumOptions = [medium1, medium2];

      mediumOptions.map((s) => expect(s).toStrictEqual(expectedMediumStyle));
    });

    it('Should return the value if there is no theme match', () => {
      const expectedNoTheme = css({ borderRightWidth: '30%' });

      const b = borderRightWidth({ theme, borderRightWidth: '30%' });

      expect(b).toStrictEqual(expectedNoTheme);
    });
  });

  describe('borderBottomWidth', () => {
    it('Should return values for borderBottomWidth prop', () => {
      const expectedZeroStyle = css({ borderBottomWidth: borders.zero });
      const expectedMediumStyle = css({
        borderBottomWidth: borders.medium,
      });

      const zero1 = borderBottomWidth({ theme, bbw: 'zero' });
      const zero2 = borderBottomWidth({ theme, borderBottomWidth: 'zero' });

      expect(zero1).toStrictEqual(zero2);

      const medium1 = borderBottomWidth({ theme, bbw: 'medium' });
      const medium2 = borderBottomWidth({ theme, borderBottomWidth: 'medium' });

      expect(medium1).toStrictEqual(medium2);

      const zeroOptions = [zero1, zero2];

      zeroOptions.map((z) => expect(z).toStrictEqual(expectedZeroStyle));

      const mediumOptions = [medium1, medium2];

      mediumOptions.map((s) => expect(s).toStrictEqual(expectedMediumStyle));
    });

    it('Should return the value if there is no theme match', () => {
      const expectedNoTheme = css({ borderBottomWidth: '30%' });

      const b = borderBottomWidth({ theme, borderBottomWidth: '30%' });

      expect(b).toStrictEqual(expectedNoTheme);
    });
  });

  describe('borderLeftWidth', () => {
    it('Should return values for borderLeftWidth prop', () => {
      const expectedZeroStyle = css({ borderLeftWidth: borders.zero });
      const expectedMediumStyle = css({
        borderLeftWidth: borders.medium,
      });

      const zero1 = borderLeftWidth({ theme, blw: 'zero' });
      const zero2 = borderLeftWidth({ theme, borderLeftWidth: 'zero' });

      expect(zero1).toStrictEqual(zero2);

      const medium1 = borderLeftWidth({ theme, blw: 'medium' });
      const medium2 = borderLeftWidth({ theme, borderLeftWidth: 'medium' });

      expect(medium1).toStrictEqual(medium2);

      const zeroOptions = [zero1, zero2];

      zeroOptions.map((z) => expect(z).toStrictEqual(expectedZeroStyle));

      const mediumOptions = [medium1, medium2];

      mediumOptions.map((s) => expect(s).toStrictEqual(expectedMediumStyle));
    });

    it('Should return the value if there is no theme match', () => {
      const expectedNoTheme = css({ borderLeftWidth: '30%' });

      const b = borderLeftWidth({ theme, borderLeftWidth: '30%' });

      expect(b).toStrictEqual(expectedNoTheme);
    });
  });
});

describe('radius', () => {
  describe('borderRadius', () => {
    it('Should return values for border prop', () => {
      const expectedSharpStyle = css({ borderRadius: radii.sharp });
      const expectedRoundedStyle = css({ borderRadius: radii.rounded });

      const sharp1 = borderRadius({ theme, bRadius: 'sharp' });
      const sharp2 = borderRadius({ theme, borderRadius: 'sharp' });

      expect(sharp1).toStrictEqual(sharp2);

      const rounded1 = borderRadius({ theme, bRadius: 'rounded' });
      const rounded2 = borderRadius({ theme, borderRadius: 'rounded' });

      expect(rounded1).toStrictEqual(rounded2);

      const sharpOptions = [sharp1, sharp2];

      sharpOptions.map((s) => expect(s).toStrictEqual(expectedSharpStyle));

      const roundedOptions = [rounded1, rounded2];

      roundedOptions.map((r) => expect(r).toStrictEqual(expectedRoundedStyle));
    });

    it('Should return the value if there is no theme match', () => {
      const expectedNoTheme = css({ borderRadius: '50%' });

      const b = borderRadius({ theme, borderRadius: '50%' });

      expect(b).toStrictEqual(expectedNoTheme);
    });
  });

  describe('borderTopLeftRadius', () => {
    it('Should return values for border prop', () => {
      const expectedSharpStyle = css({ borderTopLeftRadius: radii.sharp });
      const expectedRoundedStyle = css({ borderTopLeftRadius: radii.rounded });

      const sharp1 = borderTopLeftRadius({ theme, btlr: 'sharp' });
      const sharp2 = borderTopLeftRadius({
        theme,
        borderTopLeftRadius: 'sharp',
      });

      expect(sharp1).toStrictEqual(sharp2);

      const rounded1 = borderTopLeftRadius({ theme, btlr: 'rounded' });
      const rounded2 = borderTopLeftRadius({
        theme,
        borderTopLeftRadius: 'rounded',
      });

      expect(rounded1).toStrictEqual(rounded2);

      const sharpOptions = [sharp1, sharp2];

      sharpOptions.map((s) => expect(s).toStrictEqual(expectedSharpStyle));

      const roundedOptions = [rounded1, rounded2];

      roundedOptions.map((r) => expect(r).toStrictEqual(expectedRoundedStyle));
    });

    it('Should return the value if there is no theme match', () => {
      const expectedNoTheme = css({ borderTopLeftRadius: '50%' });

      const b = borderTopLeftRadius({ theme, borderTopLeftRadius: '50%' });

      expect(b).toStrictEqual(expectedNoTheme);
    });
  });

  describe('borderTopRightRadius', () => {
    it('Should return values for border prop', () => {
      const expectedSharpStyle = css({ borderTopRightRadius: radii.sharp });
      const expectedRoundedStyle = css({ borderTopRightRadius: radii.rounded });

      const sharp1 = borderTopRightRadius({ theme, btrr: 'sharp' });
      const sharp2 = borderTopRightRadius({
        theme,
        borderTopRightRadius: 'sharp',
      });

      expect(sharp1).toStrictEqual(sharp2);

      const rounded1 = borderTopRightRadius({ theme, btrr: 'rounded' });
      const rounded2 = borderTopRightRadius({
        theme,
        borderTopRightRadius: 'rounded',
      });

      expect(rounded1).toStrictEqual(rounded2);

      const sharpOptions = [sharp1, sharp2];

      sharpOptions.map((s) => expect(s).toStrictEqual(expectedSharpStyle));

      const roundedOptions = [rounded1, rounded2];

      roundedOptions.map((r) => expect(r).toStrictEqual(expectedRoundedStyle));
    });

    it('Should return the value if there is no theme match', () => {
      const expectedNoTheme = css({ borderTopRightRadius: '50%' });

      const b = borderTopRightRadius({ theme, borderTopRightRadius: '50%' });

      expect(b).toStrictEqual(expectedNoTheme);
    });
  });

  describe('borderBottomLeftRadius', () => {
    it('Should return values for border prop', () => {
      const expectedSharpStyle = css({ borderBottomLeftRadius: radii.sharp });
      const expectedRoundedStyle = css({
        borderBottomLeftRadius: radii.rounded,
      });

      const sharp1 = borderBottomLeftRadius({ theme, bblr: 'sharp' });
      const sharp2 = borderBottomLeftRadius({
        theme,
        borderBottomLeftRadius: 'sharp',
      });

      expect(sharp1).toStrictEqual(sharp2);

      const rounded1 = borderBottomLeftRadius({ theme, bblr: 'rounded' });
      const rounded2 = borderBottomLeftRadius({
        theme,
        borderBottomLeftRadius: 'rounded',
      });

      expect(rounded1).toStrictEqual(rounded2);

      const sharpOptions = [sharp1, sharp2];

      sharpOptions.map((s) => expect(s).toStrictEqual(expectedSharpStyle));

      const roundedOptions = [rounded1, rounded2];

      roundedOptions.map((r) => expect(r).toStrictEqual(expectedRoundedStyle));
    });

    it('Should return the value if there is no theme match', () => {
      const expectedNoTheme = css({ borderBottomLeftRadius: '50%' });

      const b = borderBottomLeftRadius({
        theme,
        borderBottomLeftRadius: '50%',
      });

      expect(b).toStrictEqual(expectedNoTheme);
    });
  });

  describe('borderBottomRightRadius', () => {
    it('Should return values for border prop', () => {
      const expectedSharpStyle = css({ borderBottomRightRadius: radii.sharp });
      const expectedRoundedStyle = css({
        borderBottomRightRadius: radii.rounded,
      });

      const sharp1 = borderBottomRightRadius({ theme, bbrr: 'sharp' });
      const sharp2 = borderBottomRightRadius({
        theme,
        borderBottomRightRadius: 'sharp',
      });

      expect(sharp1).toStrictEqual(sharp2);

      const rounded1 = borderBottomRightRadius({ theme, bbrr: 'rounded' });
      const rounded2 = borderBottomRightRadius({
        theme,
        borderBottomRightRadius: 'rounded',
      });

      expect(rounded1).toStrictEqual(rounded2);

      const sharpOptions = [sharp1, sharp2];

      sharpOptions.map((s) => expect(s).toStrictEqual(expectedSharpStyle));

      const roundedOptions = [rounded1, rounded2];

      roundedOptions.map((r) => expect(r).toStrictEqual(expectedRoundedStyle));
    });

    it('Should return the value if there is no theme match', () => {
      const expectedNoTheme = css({ borderBottomRightRadius: '50%' });

      const b = borderBottomRightRadius({
        theme,
        borderBottomRightRadius: '50%',
      });

      expect(b).toStrictEqual(expectedNoTheme);
    });
  });
});
