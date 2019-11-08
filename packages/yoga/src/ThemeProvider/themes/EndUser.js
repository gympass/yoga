import BaseTheme from './BaseTheme';

const EndUser = tokens => {
  const colors = {
    primary: tokens.colors.madrid,
    secondary: tokens.colors.saoPaulo,
  };

  return {
    colors,
    ...BaseTheme(colors),
  };
};

export default EndUser;
