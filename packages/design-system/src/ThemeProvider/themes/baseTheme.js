import tokens from '@gympass/tokens';

const {
  spacing,
  elevate,
  radii,
  fontSizes,
  fontWeights,
  colors: tokenColors,
} = tokens;

const baseTheme = ({ primary, secondary }) => {
  const baseFontSize = fontSizes[3]; // 16
  const colors = {
    primary,
    secondary,
    gray: tokenColors.gray,
    white: tokenColors.white,
    black: tokenColors.black,
  };

  const components = {
    list: {
      padding: {
        top: spacing.large,
        right: spacing.xlarge,
      },
      border: {
        width: '1px',
        style: 'solid',
        color: colors.gray[2],
      },
    },
    button: {
      padding: {
        top: spacing.small,
        right: spacing.large,
        bottom: spacing.small,
        left: spacing.large,
      },
      border: {
        width: 'none',
        radius: radii.circle,
      },
      backgroundColor: primary,
      hover: {
        shadow: elevate(secondary, 2),
      },
      active: {
        shadow: elevate(secondary, 1),
      },
      font: {
        size: fontSizes[2],
        weight: fontWeights.bold,
        color: colors.white,
      },
    },
  };

  return { components, baseFontSize, colors };
};

export default baseTheme;
