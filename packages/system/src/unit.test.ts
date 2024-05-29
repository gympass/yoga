import { toPx } from './unit';

describe('Unit', () => {
  describe('toPx', () => {
    it('should add "px" to the number', () => {
      expect(toPx(10)).toBe('10px');
    });

    it('should return 0 without adding unit', () => {
      expect(toPx(0)).toBe(0);
    });

    it('should return a numeric string with "px"', () => {
      expect(toPx('20')).toBe('20px');
    });

    it('should add "px" to a decimal numeric string or number', () => {
      expect(toPx(0.5)).toBe('0.5px');
      expect(toPx('0.5')).toBe('0.5px');
    });
  });
});
