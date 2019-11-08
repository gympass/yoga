import BaseTheme from './BaseTheme';

const Gyms = tokens => {
  const colors = {
    primary: tokens.colors.milan,
    secondary: tokens.colors.paris,
  };

  return { colors, ...BaseTheme(colors) };
};

export default Gyms;
