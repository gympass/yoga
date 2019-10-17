import baseTheme from './baseTheme';

const gyms = tokens => {
  const colors = {
    primary: tokens.colors.milan,
    secondary: tokens.colors.milan,
  };

  return { colors, ...baseTheme(colors) };
};

export default gyms;
