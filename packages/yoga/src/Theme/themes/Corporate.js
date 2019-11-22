import BaseTheme from './BaseTheme';

const Corporate = tokens => {
  const colors = {
    primary: tokens.colors.newYork,
    secondary: tokens.colors.paris,
  };

  return { colors, ...BaseTheme(colors) };
};

export default Corporate;
