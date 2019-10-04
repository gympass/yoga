const corp = tokens => {
  const colors = {
    primary: tokens.colors.newYork.climbing,
    secondary: tokens.colors.newYork.crossfit,
  };

  const components = {
    button: {
      backgroundColor: colors.primary,
      shadow: tokens.elevate(colors.secondary, 0),
      hover: {
        shadow: tokens.elevate(colors.secondary, 1),
      },
      active: {
        shadow: tokens.elevate(colors.secondary, 0),
      },
    },
  };

  return { colors, components };
};

export default corp;
