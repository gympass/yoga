import baseTheme from './baseTheme';

const endUser = tokens => {
  const colors = {
    primary: tokens.colors.madrid,
    secondary: tokens.colors.saoPaulo,
  };

  return {
    colors,
    ...baseTheme(colors),
  };
};

export default endUser;
