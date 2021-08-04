import { css } from 'styled-components';
import { overflow, overflowX, overflowY, overflows } from './overflow';

describe('overflow', () => {
  describe('overflows', () => {
    it('Should return values for all overflow props', () => {
      const expectedDisplay = css({ overflowX: 'scroll', overflowY: 'scroll' });

      const ofProp = overflows({ ox: 'scroll', oy: 'scroll' });
      const overflowsProp = overflows({
        overflowX: 'scroll',
        overflowY: 'scroll',
      });
      expect(ofProp).toStrictEqual(overflowsProp);
      const bgOptions = [ofProp, overflowsProp];
      bgOptions.map(c => expect(c).toStrictEqual(expectedDisplay));
    });
  });
  describe('overflow', () => {
    it('Should return values for overflow prop', () => {
      const expectedDisplay = css({ overflow: 'scroll' });

      const ofProp = overflow({ of: 'scroll' });
      const overflowProp = overflow({ overflow: 'scroll' });
      expect(ofProp).toStrictEqual(overflowProp);
      const bgOptions = [ofProp, overflowProp];
      bgOptions.map(c => expect(c).toStrictEqual(expectedDisplay));
    });
  });
  describe('overflowX', () => {
    it('Should return values for overflow-x prop', () => {
      const expectedDisplay = css({ overflowX: 'auto' });

      const oxProp = overflowX({ ox: 'auto' });
      const overflowXProp = overflowX({ overflowX: 'auto' });
      expect(oxProp).toStrictEqual(overflowXProp);
      const bgOptions = [oxProp, overflowXProp];
      bgOptions.map(c => expect(c).toStrictEqual(expectedDisplay));
    });
  });
  describe('overflowY', () => {
    it('Should return values for overflow-y prop', () => {
      const expectedDisplay = css({ overflowY: 'auto' });

      const oyProp = overflowY({ oy: 'auto' });
      const overflowYProp = overflowY({ overflowY: 'auto' });
      expect(oyProp).toStrictEqual(overflowYProp);
      const bgOptions = [oyProp, overflowYProp];
      bgOptions.map(c => expect(c).toStrictEqual(expectedDisplay));
    });
  });
});
