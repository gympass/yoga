const endUser = tokens => {
  const colors = {
    primary: tokens.colors.madrid.climbing,
    secondary: tokens.colors.madrid.crossfit,
  };

  const components = {
    button: {
      backgroundColor: tokens.components.button.backgroundColor,
      hover: {
        shadow: tokens.elevate(colors.secondary, 2),
      },
      active: {
        shadow: tokens.elevate(colors.secondary, 1),
      },
    },
  };

  return {
    colors,
    components,
  };
};

export default endUser;
