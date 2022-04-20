import { css } from 'styled-components';
import { elevation } from './elevation';
import { elevation as androidElevation } from './elevation.android';

describe('Web and iOS', () => {
  const shadow = (umbra) =>
    Number(umbra) && umbra > 0
      ? `0 ${umbra}px ${umbra * 2}px rgb(0, 0, 0, 0.25)`
      : 'none';

  const elevations = [0, 1, 2].map(shadow);

  [elevations.zero, elevations.small, elevations.medium] = elevations;

  const theme = {
    yoga: {
      elevations,
    },
  };

  describe('elevation', () => {
    it('Should return values for elevation prop', () => {
      const expectedZeroElevation = css({ boxShadow: elevations.zero });
      const expectedSmallElevation = css({ boxShadow: elevations.small });

      const zero1 = elevation({ theme, bs: 'zero' });
      const zero2 = elevation({ theme, boxShadow: 'zero' });
      const zero3 = elevation({ theme, elevation: 'zero' });

      expect(zero1).toStrictEqual(zero2);
      expect(zero2).toStrictEqual(zero3);

      const small1 = elevation({ theme, bs: 'small' });
      const small2 = elevation({ theme, boxShadow: 'small' });
      const small3 = elevation({ theme, elevation: 'small' });

      expect(small1).toStrictEqual(small2);
      expect(small2).toStrictEqual(small3);

      const zeroOptions = [zero1, zero2, zero3];

      zeroOptions.map((z) => expect(z).toStrictEqual(expectedZeroElevation));

      const smallOptions = [small1, small2, small3];

      smallOptions.map((s) => expect(s).toStrictEqual(expectedSmallElevation));
    });

    it('Should return the value if there is no theme match', () => {
      const expectedNoTheme = css({ boxShadow: '0 2px 2px black' });

      const bs = elevation({ theme, boxShadow: '0 2px 2px black' });

      expect(bs).toStrictEqual(expectedNoTheme);
    });
  });
});

describe('Android', () => {
  const elevations = ['0', '1', '2'];

  [elevations.zero, elevations.small, elevations.medium] = elevations;

  const theme = {
    yoga: {
      elevations,
    },
  };

  describe('elevation', () => {
    it('Should return values for elevation prop', () => {
      const expectedZeroElevation = css({ elevation: elevations.zero });
      const expectedSmallElevation = css({ elevation: elevations.small });

      const zero1 = androidElevation({ theme, bs: 'zero' });
      const zero2 = androidElevation({ theme, boxShadow: 'zero' });
      const zero3 = androidElevation({ theme, elevation: 'zero' });

      expect(zero1).toStrictEqual(zero2);
      expect(zero2).toStrictEqual(zero3);

      const small1 = androidElevation({ theme, bs: 'small' });
      const small2 = androidElevation({ theme, boxShadow: 'small' });
      const small3 = androidElevation({ theme, elevation: 'small' });

      expect(small1).toStrictEqual(small2);
      expect(small2).toStrictEqual(small3);

      const zeroOptions = [zero1, zero2, zero3];

      zeroOptions.map((z) => expect(z).toStrictEqual(expectedZeroElevation));

      const smallOptions = [small1, small2, small3];

      smallOptions.map((s) => expect(s).toStrictEqual(expectedSmallElevation));
    });

    it('Should return the value if there is no theme match', () => {
      const expectedNoTheme = css({ elevation: '20' });

      const ae = androidElevation({ theme, boxShadow: '20' });

      expect(ae).toStrictEqual(expectedNoTheme);
    });
  });
});
