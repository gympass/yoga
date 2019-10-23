import tokens from '@gympass/tokens';
import { hexToRgb } from '@gympass/common';

const {
  spacing,
  elevate,
  radii,
  fontSizes,
  fontWeights,
  colors: tokenColors,
  borders,
} = tokens;

const baseTheme = ({ primary, secondary }) => {
  const baseFontSize = fontSizes[3];
  const colors = {
    primary,
    secondary,
    gray: tokenColors.gray,
    white: tokenColors.white,
    black: tokenColors.black,
  };

  const components = {
    button: {
      padding: {
        right: spacing.xlarge,
        left: spacing.xlarge,
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
        small: {
          width: borders.small,
        },
        default: {
          width: borders.medium,
        },
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

  return { components, baseFontSize, colors };
};

export default baseTheme;
