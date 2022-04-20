import { css } from 'styled-components';
import { overflow, overflowX, overflowY, overflows } from './overflow';

describe('overflow', () => {
  describe('overflows', () => {
    it('Should return values for all overflow props', () => {
      const expectedOverflow = css({
        overflowX: 'scroll',
        overflowY: 'scroll',
      });
      const ofProp = overflows({ ox: 'scroll', oy: 'scroll' });
      const overflowsProp = overflows({
        overflowX: 'scroll',
        overflowY: 'scroll',
      });

      expect(ofProp).toStrictEqual(overflowsProp);

      const ofOptions = [ofProp, overflowsProp];

      ofOptions.map((c) => expect(c).toStrictEqual(expectedOverflow));
    });
  });

  describe('overflow', () => {
    it('Should return values for overflow prop', () => {
      const expectedOverflow = css({ overflow: 'scroll' });

      const ofProp = overflow({ of: 'scroll' });
      const overflowProp = overflow({ overflow: 'scroll' });

      expect(ofProp).toStrictEqual(overflowProp);

      const ofOptions = [ofProp, overflowProp];

      ofOptions.map((c) => expect(c).toStrictEqual(expectedOverflow));
    });
  });

  describe('overflowX', () => {
    it('Should return values for overflow-x prop', () => {
      const expectedOverflow = css({ overflowX: 'auto' });

      const oxProp = overflowX({ ox: 'auto' });
      const overflowXProp = overflowX({ overflowX: 'auto' });

      expect(oxProp).toStrictEqual(overflowXProp);

      const oxOptions = [oxProp, overflowXProp];

      oxOptions.map((c) => expect(c).toStrictEqual(expectedOverflow));
    });
  });

  describe('overflowY', () => {
    it('Should return values for overflow-y prop', () => {
      const expectedOverflow = css({ overflowY: 'auto' });

      const oyProp = overflowY({ oy: 'auto' });
      const overflowYProp = overflowY({ overflowY: 'auto' });

      expect(oyProp).toStrictEqual(overflowYProp);

      const oyOptions = [oyProp, overflowYProp];

      oyOptions.map((c) => expect(c).toStrictEqual(expectedOverflow));
    });
  });
});
