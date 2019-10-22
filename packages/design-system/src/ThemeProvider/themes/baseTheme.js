import tokens from '@gympass/tokens';
import { hexToRgb } from '@gympass/common';

const {
  spacing,
  elevate,
  radii,
  fontSizes,
  fontWeights,
  colors,
  transitions,
  elevations,
} = tokens;

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
      backgroundColor: primary[3],
      hover: {
        shadow: elevate(primary[2], 2),
      },
      active: {
        shadow: elevate(primary[2], 1),
      },
      font: {
        size: fontSizes[2],
        weight: fontWeights.bold,
        color: colors.white,
      },
    },
    switch: {
      track: {
        width: 48,
        height: 24,
        backgroundColor: colors.gray[2],
        radii: radii.circle,
        transition: {
          duration: transitions.duration,
        },
        checked: {
          backgroundColor: primary[3],
        },
        disabled: {
          backgroundColor: colors.gray[1],
        },
      },
      thumb: {
        width: spacing.medium,
        height: spacing.medium,
        left: spacing.xxsmall,
        radii: radii.circle,
        backgroundColor: colors.white,
        shadow: elevations.small,
        transition: {
          duration: transitions.duration,
        },
        checked: {
          backgroundColor: primary[3],
        },
        disabled: {
          backgroundColor: colors.gray[2],
        },
      },
      focus: {
        checked: {
          backgroundColor: hexToRgb(primary[3], 0.2),
        },
        disabled: {
          backgroundColor: hexToRgb(colors.gray[3], 0.2),
        },
      },
    },
  };

  return { components, baseFontSize, spacing };
};

export default baseTheme;
