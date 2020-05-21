import BaseTheme from './BaseTheme';

const Corporate = tokens => {
  const colors = {
    primary: tokens.colors.buenosAires,
    secondary: tokens.colors.saoPaulo,
  };

  return { colors, ...BaseTheme(colors) };
};

export default Corporate;
