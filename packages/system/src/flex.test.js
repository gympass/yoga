import { css } from 'styled-components';
import {
  flex,
  flexBasis,
  flexFlow,
  flexGrow,
  flexShrink,
  flexWrap,
  flexDirection,
  alignItems,
  alignContent,
  alignSelf,
  justifyContent,
  justifySelf,
  order,
  flexes,
} from './flex';

describe('flex', () => {
  describe('flexes', () => {
    it('Should return values for all flex props', () => {
      const expectedFlex = css({
        flex: '1',
        flexWrap: 'wrap',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        order: 3,
      });

      const f = flexes({
        flex: '1',
        flexDirection: 'column',
        flexWrap: 'wrap',
        order: 3,
        alignItems: 'center',
        justifyContent: 'center',
      });

      expect(f).toStrictEqual(expectedFlex);
    });
  });

  describe('flex', () => {
    it('Should return values for flex prop', () => {
      const expectedFlex = css({ flex: '0 1 auto' });

      const f = flex({ flex: '0 1 auto' });

      expect(f).toStrictEqual(expectedFlex);
    });
  });

  describe('flexBasis', () => {
    it('Should return values for flexBasis prop', () => {
      const expectedFlex = css({ flexBasis: 'auto' });

      const f = flexBasis({ flexBasis: 'auto' });

      expect(f).toStrictEqual(expectedFlex);
    });
  });

  describe('flexFlow', () => {
    it('Should return values for flexFlow prop', () => {
      const expectedFlex = css({ flexFlow: 'row wrap' });

      const f = flexFlow({ flexFlow: 'row wrap' });

      expect(f).toStrictEqual(expectedFlex);
    });
  });

  describe('flexGrow', () => {
    it('Should return values for flexGrow prop', () => {
      const expectedFlex = css({ flexGrow: 1 });

      const f = flexGrow({ flexGrow: 1 });

      expect(f).toStrictEqual(expectedFlex);
    });
  });

  describe('flexShrink', () => {
    it('Should return values for flex prop', () => {
      const expectedFlex = css({ flexShrink: 1 });

      const f = flexShrink({ flexShrink: 1 });

      expect(f).toStrictEqual(expectedFlex);
    });
  });

  describe('flexWrap', () => {
    it('Should return values for flexWrap prop', () => {
      const expectedFlex = css({ flexWrap: 'wrap' });

      const f = flexWrap({ flexWrap: 'wrap' });

      expect(f).toStrictEqual(expectedFlex);
    });
  });

  describe('flexDirection', () => {
    it('Should return values for flexDirection prop', () => {
      const expectedFlex = css({ flexDirection: 'column' });

      const f = flexDirection({ flexDirection: 'column' });

      expect(f).toStrictEqual(expectedFlex);
    });
  });

  describe('alignItems', () => {
    it('Should return values for alignItems prop', () => {
      const expectedFlex = css({ alignItems: 'center' });

      const f = alignItems({ alignItems: 'center' });

      expect(f).toStrictEqual(expectedFlex);
    });
  });

  describe('alignContent', () => {
    it('Should return values for alignContent prop', () => {
      const expectedFlex = css({ alignContent: 'space-between' });

      const f = alignContent({ alignContent: 'space-between' });

      expect(f).toStrictEqual(expectedFlex);
    });
  });

  describe('alignSelf', () => {
    it('Should return values for alignSelf prop', () => {
      const expectedFlex = css({ alignSelf: 'flex-start' });

      const f = alignSelf({ alignSelf: 'flex-start' });

      expect(f).toStrictEqual(expectedFlex);
    });
  });

  describe('justifyContent', () => {
    it('Should return values for justifyContent prop', () => {
      const expectedFlex = css({ justifyContent: 'space-around' });

      const f = justifyContent({ justifyContent: 'space-around' });

      expect(f).toStrictEqual(expectedFlex);
    });
  });

  describe('justifySelf', () => {
    it('Should return values for justifySelf prop', () => {
      const expectedFlex = css({ justifySelf: 'end' });

      const f = justifySelf({ justifySelf: 'end' });

      expect(f).toStrictEqual(expectedFlex);
    });
  });

  describe('order', () => {
    it('Should return values for order prop', () => {
      const expectedFlex = css({ order: 2 });

      const f = order({ order: 2 });

      expect(f).toStrictEqual(expectedFlex);
    });
  });
});
