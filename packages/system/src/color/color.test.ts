import { css } from 'styled-components';
import { backgroundColor } from './color';

const colorsTheme = {
  vibin: '#D8385E',
  feedback: {
    info: '#7068D4',
  },
};

const theme = {
  yoga: {
    colors: colorsTheme,
  },
}

describe('backgroundColor', () => {
  it('Should return values for color prop', () => {
    const expectedColor = css({ backgroundColor: colorsTheme.vibin });

    const bg = backgroundColor({ theme, bg: 'vibin' });
    const bgColor = backgroundColor({ theme, bgColor: 'vibin' });
    const backGroundColor = backgroundColor({
      theme,
      backgroundColor: 'vibin',
    });

    expect(bg).toStrictEqual(bgColor);
    expect(bgColor).toStrictEqual(backGroundColor);

    const bgOptions = [bg, bgColor, backGroundColor];

    bgOptions.map(c => expect(c).toStrictEqual(expectedColor));
  });

  it('Should return the value based on its path', () => {
    const expectedNoTheme = css({ backgroundColor: colorsTheme.feedback.info });

    const bg = backgroundColor({
      theme,
      backgroundColor: 'feedback.info',
    });

    expect(bg).toStrictEqual(expectedNoTheme);
  });

  it('Should return the value if there is no theme match', () => {
    const expectedNoTheme = css({ backgroundColor: 'tomato' });

    const bg = backgroundColor({ theme, backgroundColor: 'tomato' });

    expect(bg).toStrictEqual(expectedNoTheme);
  });
});
