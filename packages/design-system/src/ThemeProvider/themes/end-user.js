import baseTheme from './baseTheme';

const endUser = tokens => {
  const colors = {
    primary: tokens.colors.madrid[3],
    secondary: tokens.colors.madrid[2],
  };

  return {
    colors,
    ...baseTheme(colors),
  };
};

export default endUser;
