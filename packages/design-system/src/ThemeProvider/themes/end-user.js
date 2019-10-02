import baseTheme from './baseTheme';

const endUser = tokens => {
  const colors = {
    primary: tokens.colors.madrid[1],
    secondary: tokens.colors.madrid[0],
  };

  return {
    colors,
    ...baseTheme(colors),
  };
};

export default endUser;
