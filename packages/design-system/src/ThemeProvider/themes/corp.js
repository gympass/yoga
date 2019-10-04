import baseTheme from './baseTheme';

const corp = tokens => {
  const colors = {
    primary: tokens.colors.newYork[1],
    secondary: tokens.colors.newYork[0],
  };

  return { colors, ...baseTheme(colors) };
};

export default corp;
