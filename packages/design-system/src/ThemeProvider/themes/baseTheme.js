import tokens from '@gympass/tokens';

const baseTheme = ({ primary, secondary }) => {
  const components = {
    button: {
      backgroundColor: primary,
      hover: {
        shadow: tokens.elevate(secondary, 2),
      },
      active: {
        shadow: tokens.elevate(secondary, 1),
      },
    },
  };

  return { components };
};

export default baseTheme;
