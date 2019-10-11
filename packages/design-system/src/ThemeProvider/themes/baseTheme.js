import tokens from '@gympass/tokens';

const { spacing, elevate, radii, fontSizes, fontWeights, colors } = tokens;

const baseTheme = ({ primary, secondary }) => {
  const baseFontSize = fontSizes[3]; // 16

  const components = {
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

  return { components, baseFontSize };
};

export default baseTheme;
