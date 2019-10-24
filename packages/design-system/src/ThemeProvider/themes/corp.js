import baseTheme from './baseTheme';

const corp = tokens => {
  const colors = {
    primary: tokens.colors.newYork,
    secondary: tokens.colors.paris,
  };

  return { colors, ...baseTheme(colors) };
};

export default corp;
