import BaseTheme from './BaseTheme';

const Gyms = tokens => {
  const colors = {
    primary: tokens.colors.newYork,
    secondary: tokens.colors.saoPaulo,
  };

  return { colors, ...BaseTheme(colors) };
};

export default Gyms;
