import BaseTheme from './BaseTheme';

const Wellness = tokens => {
  const colors = {
    primary: tokens.colors.paris,
    secondary: tokens.colors.madrid,
    tertiary: tokens.colors.saoPaulo,
  };

  return {
    colors,
    ...BaseTheme(colors),
  };
};

export default Wellness;
