import BaseTheme from './BaseTheme';

const Kids = tokens => {
  const colors = {
    primary: tokens.colors.buenosAires,
    secondary: tokens.colors.saoPaulo,
    tertiary: tokens.colors.madrid,
  };

  return {
    colors,
    ...BaseTheme(colors),
  };
};

export default Kids;
