import tokens from '@gympass/tokens';
import { hexToRgb } from '@gympass/common';

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
        normal: 48,
        small: 32,
      },
      font: {
        size: fontSizes[2],
        weight: fontWeights.bold,
      },
      hover: {
        shadow: elevate(primary[3], 2),
      },
      border: {
        width: 2,
        radius: radii.circle,
      },
      types: {
        contained: {
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
          backgroundColor: {
            disabled: 'transparent',
            enabled: 'transparent',
            pressed: 'transparent',
            hover: `rgba(${hexToRgb(primary[3])}, 0.3)`,
          },
          textColor: {
            disabled: colors.gray[3],
            enabled: primary[3],
            pressed: primary[2],
          },
        },
        text: {
          backgroundColor: {
            disabled: 'transparent',
            enabled: 'transparent',
            pressed: 'transparent',
            hover: `rgba(${hexToRgb(primary[3])}, 0.3)`,
          },
          textColor: {
            disabled: colors.gray[3],
            enabled: primary[3],
            pressed: primary[2],
          },
        },
      },
    },
  };

  return { components, baseFontSize };
};

export default baseTheme;
