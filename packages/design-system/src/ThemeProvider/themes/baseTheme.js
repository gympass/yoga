import tokens from '@gympass/tokens';

const { spacing, elevate, radii, fontSizes, fontWeights, colors } = tokens;

const baseTheme = ({ primary, secondary }) => {
  const baseFontSize = fontSizes[3]; // 16

  const components = {
    button: {
      padding: {
        right: spacing.large,
        left: spacing.large,
      },
      height: {
        normal: 46,
        small: 32,
      },
      types: {
        contained: {
          border: {
            width: 'none',
            radius: radii.circle,
          },
          backgroundColor: {
            disabled: colors.gray[2],
            enabled: primary[3],
            pressed: primary[2],
          },
          textColor: {
            disabled: colors.gray[3],
            enabled: colors.white,
            pressed: colors.white,
          },
        },
        outline: {
          border: {
            width: 2,
            radius: radii.circle,
          },
          backgroundColor: {
            disabled: 'transparent',
            enabled: 'transparent',
            pressed: primary[0],
          },
          textColor: {
            disabled: colors.gray[3],
            enabled: primary[3],
            pressed: primary[3],
          },
        },
        text: {
          border: {
            width: 'none',
            radius: radii.circle,
          },
          backgroundColor: {
            disabled: 'transparent',
            enabled: 'transparent',
            pressed: 'transparent',
          },
          textColor: {
            disabled: colors.gray[3],
            enabled: primary[3],
            pressed: primary[2],
          },
        },
      },
      font: {
        size: fontSizes[2],
        weight: fontWeights.bold,
        color: {
          disabled: colors.gray[3],
          enabled: colors.white,
        },
      },
    },
  };

  return { components, baseFontSize };
};

export default baseTheme;
