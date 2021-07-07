import { css } from 'styled-components';
import {
  display,
  positions,
  position,
  top,
  right,
  bottom,
  left,
} from './layout';

const spacings = [0, 4, 8, 12];
[spacings.zero, spacings.small, spacings.medium, spacings.large] = spacings;

const theme = {
  yoga: {
    spacing: spacings,
  },
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
        top: spacings.medium,
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
          top: spacings.zero,
        });
        const expectedMediumSpacing = css({
          top: spacings.medium,
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
          right: spacings.zero,
        });
        const expectedMediumSpacing = css({
          right: spacings.medium,
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
          bottom: spacings.zero,
        });
        const expectedMediumSpacing = css({
          bottom: spacings.medium,
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
          left: spacings.zero,
        });
        const expectedMediumSpacing = css({
          left: spacings.medium,
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
  });
});
