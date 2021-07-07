import { css } from 'styled-components';
import {
  margin,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  marginHorizontal,
  marginVertical,
  padding,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
  paddingHorizontal,
  paddingVertical,
  width,
  height,
  spacing,
} from './spacing';

const spacings = [0, 4, 8, 12];
[spacings.zero, spacings.small, spacings.medium, spacings.large] = spacings;

const theme = {
  yoga: {
    spacing: spacings,
  },
};

describe('spacings', () => {
  describe('spacing', () => {
    it('Should return values for spacing prop', () => {
      const expectedZeroSpacing = css({
        margin: spacings.zero,
        padding: spacings.zero,
      });
      const expectedMediumSpacing = css({
        margin: spacings.medium,
        padding: spacings.medium,
      });

      const zero1 = spacing({ theme, p: 'zero', m: 'zero' });
      const zero2 = spacing({ theme, padding: 'zero', margin: 'zero' });

      expect(zero1).toStrictEqual(zero2);

      const medium1 = spacing({ theme, p: 'medium', m: 'medium' });
      const medium2 = spacing({ theme, padding: 'medium', margin: 'medium' });

      expect(medium1).toStrictEqual(medium2);

      const zeroOptions = [zero1, zero2];
      zeroOptions.map(z => expect(z).toStrictEqual(expectedZeroSpacing));

      const mediumOptions = [medium1, medium2];
      mediumOptions.map(s => expect(s).toStrictEqual(expectedMediumSpacing));
    });

    it('Should return the value if there is no theme match', () => {
      const expectedNoTheme = css({
        margin: 20,
        padding: 20,
      });

      const s = spacing({ theme, p: 20, m: 20 });
      expect(s).toStrictEqual(expectedNoTheme);
    });
  });

  describe('margin', () => {
    it('Should return values for margin prop', () => {
      const expectedZeroSpacing = css({
        margin: spacings.zero,
      });
      const expectedMediumSpacing = css({
        margin: spacings.medium,
      });

      const zero1 = margin({ theme, m: 'zero' });
      const zero2 = margin({ theme, margin: 'zero' });

      expect(zero1).toStrictEqual(zero2);

      const medium1 = margin({ theme, m: 'medium' });
      const medium2 = margin({ theme, margin: 'medium' });

      expect(medium1).toStrictEqual(medium2);

      const zeroOptions = [zero1, zero2];
      zeroOptions.map(z => expect(z).toStrictEqual(expectedZeroSpacing));

      const mediumOptions = [medium1, medium2];
      mediumOptions.map(m => expect(m).toStrictEqual(expectedMediumSpacing));
    });

    it('Should return the value if there is no theme match', () => {
      const expectedNoTheme = css({
        margin: 20,
      });

      const m = margin({ theme, m: 20 });
      expect(m).toStrictEqual(expectedNoTheme);
    });
  });

  describe('marginTop', () => {
    it('Should return values for marginTop prop', () => {
      const expectedZeroSpacing = css({
        marginTop: spacings.zero,
      });
      const expectedMediumSpacing = css({
        marginTop: spacings.medium,
      });

      const zero1 = marginTop({ theme, mt: 'zero' });
      const zero2 = marginTop({ theme, marginTop: 'zero' });

      expect(zero1).toStrictEqual(zero2);

      const medium1 = marginTop({ theme, mt: 'medium' });
      const medium2 = marginTop({ theme, marginTop: 'medium' });

      expect(medium1).toStrictEqual(medium2);

      const zeroOptions = [zero1, zero2];
      zeroOptions.map(z => expect(z).toStrictEqual(expectedZeroSpacing));

      const mediumOptions = [medium1, medium2];
      mediumOptions.map(m => expect(m).toStrictEqual(expectedMediumSpacing));
    });

    it('Should return the value if there is no theme match', () => {
      const expectedNoTheme = css({
        marginTop: 20,
      });

      const mt = marginTop({ theme, mt: 20 });
      expect(mt).toStrictEqual(expectedNoTheme);
    });
  });

  describe('marginRight', () => {
    it('Should return values for marginRight prop', () => {
      const expectedZeroSpacing = css({
        marginRight: spacings.zero,
      });
      const expectedMediumSpacing = css({
        marginRight: spacings.medium,
      });

      const zero1 = marginRight({ theme, mr: 'zero' });
      const zero2 = marginRight({ theme, marginRight: 'zero' });

      expect(zero1).toStrictEqual(zero2);

      const medium1 = marginRight({ theme, mr: 'medium' });
      const medium2 = marginRight({ theme, marginRight: 'medium' });

      expect(medium1).toStrictEqual(medium2);

      const zeroOptions = [zero1, zero2];
      zeroOptions.map(z => expect(z).toStrictEqual(expectedZeroSpacing));

      const mediumOptions = [medium1, medium2];
      mediumOptions.map(m => expect(m).toStrictEqual(expectedMediumSpacing));
    });

    it('Should return the value if there is no theme match', () => {
      const expectedNoTheme = css({
        marginRight: 20,
      });

      const mr = marginRight({ theme, mr: 20 });
      expect(mr).toStrictEqual(expectedNoTheme);
    });
  });

  describe('marginBottom', () => {
    it('Should return values for marginBottom prop', () => {
      const expectedZeroSpacing = css({
        marginBottom: spacings.zero,
      });
      const expectedMediumSpacing = css({
        marginBottom: spacings.medium,
      });

      const zero1 = marginBottom({ theme, mb: 'zero' });
      const zero2 = marginBottom({ theme, marginBottom: 'zero' });

      expect(zero1).toStrictEqual(zero2);

      const medium1 = marginBottom({ theme, mb: 'medium' });
      const medium2 = marginBottom({ theme, marginBottom: 'medium' });

      expect(medium1).toStrictEqual(medium2);

      const zeroOptions = [zero1, zero2];
      zeroOptions.map(z => expect(z).toStrictEqual(expectedZeroSpacing));

      const mediumOptions = [medium1, medium2];
      mediumOptions.map(m => expect(m).toStrictEqual(expectedMediumSpacing));
    });

    it('Should return the value if there is no theme match', () => {
      const expectedNoTheme = css({
        marginBottom: 20,
      });

      const mb = marginBottom({ theme, mb: 20 });
      expect(mb).toStrictEqual(expectedNoTheme);
    });
  });

  describe('marginLeft', () => {
    it('Should return values for marginLeft prop', () => {
      const expectedZeroSpacing = css({
        marginLeft: spacings.zero,
      });
      const expectedMediumSpacing = css({
        marginLeft: spacings.medium,
      });

      const zero1 = marginLeft({ theme, ml: 'zero' });
      const zero2 = marginLeft({ theme, marginLeft: 'zero' });

      expect(zero1).toStrictEqual(zero2);

      const medium1 = marginLeft({ theme, ml: 'medium' });
      const medium2 = marginLeft({ theme, marginLeft: 'medium' });

      expect(medium1).toStrictEqual(medium2);

      const zeroOptions = [zero1, zero2];
      zeroOptions.map(z => expect(z).toStrictEqual(expectedZeroSpacing));

      const mediumOptions = [medium1, medium2];
      mediumOptions.map(m => expect(m).toStrictEqual(expectedMediumSpacing));
    });

    it('Should return the value if there is no theme match', () => {
      const expectedNoTheme = css({
        marginLeft: 20,
      });

      const ml = marginLeft({ theme, ml: 20 });
      expect(ml).toStrictEqual(expectedNoTheme);
    });
  });

  describe('marginHorizontal', () => {
    it('Should return values for marginHorizontal prop', () => {
      const expectedZeroSpacing = css({
        marginLeft: spacings.zero,
        marginRight: spacings.zero,
      });
      const expectedMediumSpacing = css({
        marginLeft: spacings.medium,
        marginRight: spacings.medium,
      });

      const zero1 = marginHorizontal({ theme, mx: 'zero' });
      const zero2 = marginHorizontal({ theme, mh: 'zero' });
      const zero3 = marginHorizontal({ theme, marginHorizontal: 'zero' });

      expect(zero1).toStrictEqual(zero2);
      expect(zero2).toStrictEqual(zero3);

      const medium1 = marginHorizontal({ theme, mx: 'medium' });
      const medium2 = marginHorizontal({ theme, mh: 'medium' });
      const medium3 = marginHorizontal({ theme, marginHorizontal: 'medium' });

      expect(medium1).toStrictEqual(medium2);
      expect(medium2).toStrictEqual(medium3);

      const zeroOptions = [zero1, zero2];
      zeroOptions.map(z => expect(z).toStrictEqual(expectedZeroSpacing));

      const mediumOptions = [medium1, medium2];
      mediumOptions.map(m => expect(m).toStrictEqual(expectedMediumSpacing));
    });

    it('Should return the value if there is no theme match', () => {
      const expectedNoTheme = css({
        marginLeft: 20,
        marginRight: 20,
      });

      const mh = marginHorizontal({ theme, mh: 20 });
      expect(mh).toStrictEqual(expectedNoTheme);
    });
  });

  describe('marginVertical', () => {
    it('Should return values for marginVertical prop', () => {
      const expectedZeroSpacing = css({
        marginTop: spacings.zero,
        marginBottom: spacings.zero,
      });
      const expectedMediumSpacing = css({
        marginTop: spacings.medium,
        marginBottom: spacings.medium,
      });

      const zero1 = marginVertical({ theme, my: 'zero' });
      const zero2 = marginVertical({ theme, mv: 'zero' });
      const zero3 = marginVertical({ theme, marginVertical: 'zero' });

      expect(zero1).toStrictEqual(zero2);
      expect(zero2).toStrictEqual(zero3);

      const medium1 = marginVertical({ theme, my: 'medium' });
      const medium2 = marginVertical({ theme, mv: 'medium' });
      const medium3 = marginVertical({ theme, marginVertical: 'medium' });

      expect(medium1).toStrictEqual(medium2);
      expect(medium2).toStrictEqual(medium3);

      const zeroOptions = [zero1, zero2];
      zeroOptions.map(z => expect(z).toStrictEqual(expectedZeroSpacing));

      const mediumOptions = [medium1, medium2];
      mediumOptions.map(m => expect(m).toStrictEqual(expectedMediumSpacing));
    });

    it('Should return the value if there is no theme match', () => {
      const expectedNoTheme = css({
        marginTop: 20,
        marginBottom: 20,
      });

      const mv = marginVertical({ theme, mv: 20 });
      expect(mv).toStrictEqual(expectedNoTheme);
    });
  });

  describe('padding', () => {
    it('Should return values for padding prop', () => {
      const expectedZeroSpacing = css({
        padding: spacings.zero,
      });
      const expectedMediumSpacing = css({
        padding: spacings.medium,
      });

      const zero1 = padding({ theme, p: 'zero' });
      const zero2 = padding({ theme, padding: 'zero' });

      expect(zero1).toStrictEqual(zero2);

      const medium1 = padding({ theme, p: 'medium' });
      const medium2 = padding({ theme, padding: 'medium' });

      expect(medium1).toStrictEqual(medium2);

      const zeroOptions = [zero1, zero2];
      zeroOptions.map(z => expect(z).toStrictEqual(expectedZeroSpacing));

      const mediumOptions = [medium1, medium2];
      mediumOptions.map(m => expect(m).toStrictEqual(expectedMediumSpacing));
    });

    it('Should return the value if there is no theme match', () => {
      const expectedNoTheme = css({
        padding: 20,
      });

      const p = padding({ theme, p: 20 });
      expect(p).toStrictEqual(expectedNoTheme);
    });
  });

  describe('paddingTop', () => {
    it('Should return values for paddingTop prop', () => {
      const expectedZeroSpacing = css({
        paddingTop: spacings.zero,
      });
      const expectedMediumSpacing = css({
        paddingTop: spacings.medium,
      });

      const zero1 = paddingTop({ theme, pt: 'zero' });
      const zero2 = paddingTop({ theme, paddingTop: 'zero' });

      expect(zero1).toStrictEqual(zero2);

      const medium1 = paddingTop({ theme, pt: 'medium' });
      const medium2 = paddingTop({ theme, paddingTop: 'medium' });

      expect(medium1).toStrictEqual(medium2);

      const zeroOptions = [zero1, zero2];
      zeroOptions.map(z => expect(z).toStrictEqual(expectedZeroSpacing));

      const mediumOptions = [medium1, medium2];
      mediumOptions.map(m => expect(m).toStrictEqual(expectedMediumSpacing));
    });

    it('Should return the value if there is no theme match', () => {
      const expectedNoTheme = css({
        paddingTop: 20,
      });

      const pt = paddingTop({ theme, pt: 20 });
      expect(pt).toStrictEqual(expectedNoTheme);
    });
  });

  describe('paddingRight', () => {
    it('Should return values for paddingRight prop', () => {
      const expectedZeroSpacing = css({
        paddingRight: spacings.zero,
      });
      const expectedMediumSpacing = css({
        paddingRight: spacings.medium,
      });

      const zero1 = paddingRight({ theme, pr: 'zero' });
      const zero2 = paddingRight({ theme, paddingRight: 'zero' });

      expect(zero1).toStrictEqual(zero2);

      const medium1 = paddingRight({ theme, pr: 'medium' });
      const medium2 = paddingRight({ theme, paddingRight: 'medium' });

      expect(medium1).toStrictEqual(medium2);

      const zeroOptions = [zero1, zero2];
      zeroOptions.map(z => expect(z).toStrictEqual(expectedZeroSpacing));

      const mediumOptions = [medium1, medium2];
      mediumOptions.map(m => expect(m).toStrictEqual(expectedMediumSpacing));
    });

    it('Should return the value if there is no theme match', () => {
      const expectedNoTheme = css({
        paddingRight: 20,
      });

      const pr = paddingRight({ theme, pr: 20 });
      expect(pr).toStrictEqual(expectedNoTheme);
    });
  });

  describe('paddingBottom', () => {
    it('Should return values for paddingBottom prop', () => {
      const expectedZeroSpacing = css({
        paddingBottom: spacings.zero,
      });
      const expectedMediumSpacing = css({
        paddingBottom: spacings.medium,
      });

      const zero1 = paddingBottom({ theme, pb: 'zero' });
      const zero2 = paddingBottom({ theme, paddingBottom: 'zero' });

      expect(zero1).toStrictEqual(zero2);

      const medium1 = paddingBottom({ theme, pb: 'medium' });
      const medium2 = paddingBottom({ theme, paddingBottom: 'medium' });

      expect(medium1).toStrictEqual(medium2);

      const zeroOptions = [zero1, zero2];
      zeroOptions.map(z => expect(z).toStrictEqual(expectedZeroSpacing));

      const mediumOptions = [medium1, medium2];
      mediumOptions.map(m => expect(m).toStrictEqual(expectedMediumSpacing));
    });

    it('Should return the value if there is no theme match', () => {
      const expectedNoTheme = css({
        paddingBottom: 20,
      });

      const pb = paddingBottom({ theme, pb: 20 });
      expect(pb).toStrictEqual(expectedNoTheme);
    });
  });

  describe('paddingLeft', () => {
    it('Should return values for paddingLeft prop', () => {
      const expectedZeroSpacing = css({
        paddingLeft: spacings.zero,
      });
      const expectedMediumSpacing = css({
        paddingLeft: spacings.medium,
      });

      const zero1 = paddingLeft({ theme, pl: 'zero' });
      const zero2 = paddingLeft({ theme, paddingLeft: 'zero' });

      expect(zero1).toStrictEqual(zero2);

      const medium1 = paddingLeft({ theme, pl: 'medium' });
      const medium2 = paddingLeft({ theme, paddingLeft: 'medium' });

      expect(medium1).toStrictEqual(medium2);

      const zeroOptions = [zero1, zero2];
      zeroOptions.map(z => expect(z).toStrictEqual(expectedZeroSpacing));

      const mediumOptions = [medium1, medium2];
      mediumOptions.map(m => expect(m).toStrictEqual(expectedMediumSpacing));
    });

    it('Should return the value if there is no theme match', () => {
      const expectedNoTheme = css({
        paddingLeft: 20,
      });

      const pl = paddingLeft({ theme, pl: 20 });
      expect(pl).toStrictEqual(expectedNoTheme);
    });
  });

  describe('paddingHorizontal', () => {
    it('Should return values for paddingHorizontal prop', () => {
      const expectedZeroSpacing = css({
        paddingLeft: spacings.zero,
        paddingRight: spacings.zero,
      });
      const expectedMediumSpacing = css({
        paddingLeft: spacings.medium,
        paddingRight: spacings.medium,
      });

      const zero1 = paddingHorizontal({ theme, px: 'zero' });
      const zero2 = paddingHorizontal({ theme, ph: 'zero' });
      const zero3 = paddingHorizontal({ theme, paddingHorizontal: 'zero' });

      expect(zero1).toStrictEqual(zero2);
      expect(zero2).toStrictEqual(zero3);

      const medium1 = paddingHorizontal({ theme, px: 'medium' });
      const medium2 = paddingHorizontal({ theme, ph: 'medium' });
      const medium3 = paddingHorizontal({ theme, paddingHorizontal: 'medium' });

      expect(medium1).toStrictEqual(medium2);
      expect(medium2).toStrictEqual(medium3);

      const zeroOptions = [zero1, zero2];
      zeroOptions.map(z => expect(z).toStrictEqual(expectedZeroSpacing));

      const mediumOptions = [medium1, medium2];
      mediumOptions.map(m => expect(m).toStrictEqual(expectedMediumSpacing));
    });

    it('Should return the value if there is no theme match', () => {
      const expectedNoTheme = css({
        paddingLeft: 20,
        paddingRight: 20,
      });

      const ph = paddingHorizontal({ theme, ph: 20 });
      expect(ph).toStrictEqual(expectedNoTheme);
    });
  });

  describe('paddingVertical', () => {
    it('Should return values for paddingVertical prop', () => {
      const expectedZeroSpacing = css({
        paddingTop: spacings.zero,
        paddingBottom: spacings.zero,
      });
      const expectedMediumSpacing = css({
        paddingTop: spacings.medium,
        paddingBottom: spacings.medium,
      });

      const zero1 = paddingVertical({ theme, py: 'zero' });
      const zero2 = paddingVertical({ theme, pv: 'zero' });
      const zero3 = paddingVertical({ theme, paddingVertical: 'zero' });

      expect(zero1).toStrictEqual(zero2);
      expect(zero2).toStrictEqual(zero3);

      const medium1 = paddingVertical({ theme, py: 'medium' });
      const medium2 = paddingVertical({ theme, pv: 'medium' });
      const medium3 = paddingVertical({ theme, paddingVertical: 'medium' });

      expect(medium1).toStrictEqual(medium2);
      expect(medium2).toStrictEqual(medium3);

      const zeroOptions = [zero1, zero2];
      zeroOptions.map(z => expect(z).toStrictEqual(expectedZeroSpacing));

      const mediumOptions = [medium1, medium2];
      mediumOptions.map(m => expect(m).toStrictEqual(expectedMediumSpacing));
    });

    it('Should return the value if there is no theme match', () => {
      const expectedNoTheme = css({
        paddingTop: 20,
        paddingBottom: 20,
      });

      const pv = paddingVertical({ theme, pv: 20 });
      expect(pv).toStrictEqual(expectedNoTheme);
    });
  });

  describe('width', () => {
    it('Should return values for width prop', () => {
      const expectedZeroSpacing = css({
        width: spacings.zero,
      });
      const expectedMediumSpacing = css({
        width: spacings.medium,
      });

      const zero1 = width({ theme, w: 'zero' });
      const zero2 = width({ theme, width: 'zero' });

      expect(zero1).toStrictEqual(zero2);

      const medium1 = width({ theme, w: 'medium' });
      const medium2 = width({ theme, width: 'medium' });

      expect(medium1).toStrictEqual(medium2);

      const zeroOptions = [zero1, zero2];
      zeroOptions.map(z => expect(z).toStrictEqual(expectedZeroSpacing));

      const mediumOptions = [medium1, medium2];
      mediumOptions.map(m => expect(m).toStrictEqual(expectedMediumSpacing));
    });

    it('Should return the value if there is no theme match', () => {
      const expectedNoTheme = css({
        width: 20,
      });

      const pv = width({ theme, w: 20 });
      expect(pv).toStrictEqual(expectedNoTheme);
    });
  });

  describe('height', () => {
    it('Should return values for height prop', () => {
      const expectedZeroSpacing = css({
        height: spacings.zero,
      });
      const expectedMediumSpacing = css({
        height: spacings.medium,
      });

      const zero1 = height({ theme, h: 'zero' });
      const zero2 = height({ theme, height: 'zero' });

      expect(zero1).toStrictEqual(zero2);

      const medium1 = height({ theme, h: 'medium' });
      const medium2 = height({ theme, height: 'medium' });

      expect(medium1).toStrictEqual(medium2);

      const zeroOptions = [zero1, zero2];
      zeroOptions.map(z => expect(z).toStrictEqual(expectedZeroSpacing));

      const mediumOptions = [medium1, medium2];
      mediumOptions.map(m => expect(m).toStrictEqual(expectedMediumSpacing));
    });

    it('Should return the value if there is no theme match', () => {
      const expectedNoTheme = css({
        height: 20,
      });

      const pv = height({ theme, h: 20 });
      expect(pv).toStrictEqual(expectedNoTheme);
    });
  });
});
