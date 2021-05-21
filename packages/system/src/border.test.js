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

const colors = {
  vibin: '#D8385E',
  hope: '#1D856C',
};

const theme = {
  yoga: {
    borders,
    colors,
  },
};

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
    zeroOptions.map(z => expect(z).toStrictEqual(expectedZeroStyle));

    const smallOptions = [small1, small2];
    smallOptions.map(s => expect(s).toStrictEqual(expectedSmallStyle));
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
    zeroOptions.map(z => expect(z).toStrictEqual(expectedZeroStyle));

    const smallOptions = [small1, small2];
    smallOptions.map(s => expect(s).toStrictEqual(expectedSmallStyle));
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
    const expectedSmallStyle = css({ borderRight: `${borders.small}px solid` });

    const zero1 = borderRight({ theme, br: 'zero' });
    const zero2 = borderRight({ theme, borderRight: 'zero' });
    expect(zero1).toStrictEqual(zero2);

    const small1 = borderRight({ theme, br: 'small' });
    const small2 = borderRight({ theme, borderRight: 'small' });
    expect(small1).toStrictEqual(small2);

    const zeroOptions = [zero1, zero2];
    zeroOptions.map(z => expect(z).toStrictEqual(expectedZeroStyle));

    const smallOptions = [small1, small2];
    smallOptions.map(s => expect(s).toStrictEqual(expectedSmallStyle));
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
    zeroOptions.map(z => expect(z).toStrictEqual(expectedZeroStyle));

    const smallOptions = [small1, small2];
    smallOptions.map(s => expect(s).toStrictEqual(expectedSmallStyle));
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
    zeroOptions.map(z => expect(z).toStrictEqual(expectedZeroStyle));

    const smallOptions = [small1, small2];
    smallOptions.map(s => expect(s).toStrictEqual(expectedSmallStyle));
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
    vibinOptions.map(z => expect(z).toStrictEqual(vibinStyle));

    const hopeOptions = [hope1, hope2];
    hopeOptions.map(s => expect(s).toStrictEqual(hopeStyle));
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
    vibinOptions.map(z => expect(z).toStrictEqual(vibinStyle));

    const hopeOptions = [hope1, hope2];
    hopeOptions.map(s => expect(s).toStrictEqual(hopeStyle));
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
    vibinOptions.map(z => expect(z).toStrictEqual(vibinStyle));

    const hopeOptions = [hope1, hope2];
    hopeOptions.map(s => expect(s).toStrictEqual(hopeStyle));
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
    vibinOptions.map(z => expect(z).toStrictEqual(vibinStyle));

    const hopeOptions = [hope1, hope2];
    hopeOptions.map(s => expect(s).toStrictEqual(hopeStyle));
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
    vibinOptions.map(z => expect(z).toStrictEqual(vibinStyle));

    const hopeOptions = [hope1, hope2];
    hopeOptions.map(s => expect(s).toStrictEqual(hopeStyle));
  });

  it('Should return the value if there is no theme match', () => {
    const expectedNoTheme = css({ borderLeftColor: 'red' });

    const b = borderLeftColor({ theme, borderLeftColor: 'red' });
    expect(b).toStrictEqual(expectedNoTheme);
  });
});
