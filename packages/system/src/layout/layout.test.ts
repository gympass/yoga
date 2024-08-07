import { css } from 'styled-components';
import {
  display,
  positions,
  position,
  top,
  right,
  bottom,
  left,
  zIndex,
} from './layout';
import { Theme } from '@gympass/yoga/Theme';

const spacing = {
  zero: 0,
  medium: 20,
};

const theme = {
  yoga: {
    spacing,
  } as Theme,
};

describe('layout', () => {
  describe('display', () => {
    it('Should return values for display prop', () => {
      const expectedDisplay = css({ display: 'block' });

      const b = display({ theme, d: 'block' });
      const block = display({ theme, display: 'block' });

      expect(b).toStrictEqual(block);

      const bgOptions = [b, block];

      bgOptions.map(c => expect(c).toStrictEqual(expectedDisplay));
    });
  });

  describe('positions', () => {
    it('Should return values for all position props', () => {
      const expectedPosition = css({
        position: 'absolute',
        top: spacing.medium,
        left: '50%',
      });

      const p = positions({
        theme,
        position: 'absolute',
        top: 'medium',
        left: '50%',
      });

      expect(p).toStrictEqual(expectedPosition);
    });

    describe('position', () => {
      it('Should return values for position prop', () => {
        const expectedPosition = css({ position: 'absolute' });

        const p = position({ position: 'absolute' });

        expect(p).toStrictEqual(expectedPosition);
      });
    });

    describe('top', () => {
      it('Should return values for top prop', () => {
        const expectedZeroSpacing = css({
          top: spacing.zero,
        });
        const expectedMediumSpacing = css({
          top: spacing.medium,
        });

        const zero = top({ theme, top: 'zero' });
        const medium = top({ theme, top: 'medium' });

        expect(zero).toStrictEqual(expectedZeroSpacing);

        expect(medium).toStrictEqual(expectedMediumSpacing);
      });

      it('Should return the value if there is no theme match', () => {
        const expectedNoTheme = css({
          top: '50%',
        });

        const t = top({ theme, top: '50%' });

        expect(t).toStrictEqual(expectedNoTheme);
      });
    });

    describe('right', () => {
      it('Should return values for right prop', () => {
        const expectedZeroSpacing = css({
          right: spacing.zero,
        });
        const expectedMediumSpacing = css({
          right: spacing.medium,
        });

        const zero = right({ theme, right: 'zero' });
        const medium = right({ theme, right: 'medium' });

        expect(zero).toStrictEqual(expectedZeroSpacing);

        expect(medium).toStrictEqual(expectedMediumSpacing);
      });

      it('Should return the value if there is no theme match', () => {
        const expectedNoTheme = css({
          right: '50%',
        });

        const r = right({ theme, right: '50%' });

        expect(r).toStrictEqual(expectedNoTheme);
      });
    });

    describe('bottom', () => {
      it('Should return values for bottom prop', () => {
        const expectedZeroSpacing = css({
          bottom: spacing.zero,
        });
        const expectedMediumSpacing = css({
          bottom: spacing.medium,
        });

        const zero = bottom({ theme, bottom: 'zero' });
        const medium = bottom({ theme, bottom: 'medium' });

        expect(zero).toStrictEqual(expectedZeroSpacing);

        expect(medium).toStrictEqual(expectedMediumSpacing);
      });

      it('Should return the value if there is no theme match', () => {
        const expectedNoTheme = css({
          bottom: '50%',
        });

        const b = bottom({ theme, bottom: '50%' });

        expect(b).toStrictEqual(expectedNoTheme);
      });
    });

    describe('left', () => {
      it('Should return values for left prop', () => {
        const expectedZeroSpacing = css({
          left: spacing.zero,
        });
        const expectedMediumSpacing = css({
          left: spacing.medium,
        });

        const zero = left({ theme, left: 'zero' });
        const medium = left({ theme, left: 'medium' });

        expect(zero).toStrictEqual(expectedZeroSpacing);

        expect(medium).toStrictEqual(expectedMediumSpacing);
      });

      it('Should return the value if there is no theme match', () => {
        const expectedNoTheme = css({
          left: '50%',
        });

        const l = left({ theme, left: '50%' });

        expect(l).toStrictEqual(expectedNoTheme);
      });
    });

    describe('zIndex', () => {
      it('Should return values for z-index prop', () => {
        const expectedZIndex0 = css({
          zIndex: 0,
        });
        const expectedZIndex100 = css({
          zIndex: 100,
        });
        const expectedZIndexNegative = css({
          zIndex: -1,
        });

        const zero = zIndex({ zIndex: 0 });
        const oneHundred = zIndex({ zIndex: 100 });
        const negative = zIndex({ zIndex: -1 });

        expect(zero).toStrictEqual(expectedZIndex0);

        expect(oneHundred).toStrictEqual(expectedZIndex100);

        expect(negative).toStrictEqual(expectedZIndexNegative);
      });
    });
  });
});
