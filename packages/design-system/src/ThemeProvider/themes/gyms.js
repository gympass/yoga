import baseTheme from './baseTheme';

const gyms = tokens => {
  const colors = {
    primary: tokens.colors.milan[3],
    secondary: tokens.colors.milan[2],
  };

  return { colors, ...baseTheme(colors) };
};

export default gyms;
