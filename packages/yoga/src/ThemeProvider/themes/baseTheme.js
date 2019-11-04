import tokens from '@gympass/yoga-tokens';
import { hexToRgb } from '@gympass/yoga-common';

const {
  spacing,
  radii,
  fontSizes,
  fontWeights,
  transitions,
  elevations,
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
    slider: {
      track: {
        backgroundColor: {
          active: colors.primary[3],
          inactive: colors.gray[2],
        },
        border: {
          radius: radii.circle,
        },
      },
      step: {
        backgroundColor: {
          active: primary[3],
          inactive: colors.gray[2],
        },
        border: {
          radius: radii.circle,
        },
        position: -30,
      },
      marker: {
        backgroundColor: primary[3],
        width: 24,
        height: 24,
        border: {
          width: 6,
          color: colors.white,
          radius: radii.circle,
        },
        shadow: elevations.small,
        pressed: {
          width: 40,
          height: 40,
          position: -18,
        },
      },
      tooltip: {
        shadow: elevations.small,
        radius: radii.rounded,
        backgroundColor: colors.gray[1],
        padding: {
          top: spacing.xxsmall,
          right: spacing.xxsmall,
          bottom: spacing.xxsmall,
          left: spacing.xxsmall,
        },
        height: 56,
        width: 95,
        font: {
          color: colors.gray[4],
          title: {
            size: fontSizes[2],
            weight: fontWeights.bold,
          },
          description: {
            size: fontSizes[2],
            weight: fontWeights.regular,
          },
        },
        arrow: {
          height: 16,
          width: 16,
        },
        ribbon: {
          backgroundColor: secondary[3],
          radius: radii.rounded,
          width: 95,
          font: {
            color: colors.white,
            size: fontSizes[1],
            weight: fontWeights.bold,
          },
        },
      },
    },
    list: {
      listItem: {
        padding: {
          top: spacing.large,
          right: spacing.xlarge,
          bottom: spacing.large,
          left: spacing.xlarge,
        },
      },
      border: {
        width: borders.small,
        color: colors.gray[2],
      },
    },
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
            hover: hexToRgb(primary[3], 0.3),
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
            hover: hexToRgb(primary[3], 0.3),
          },
          textColor: {
            disabled: colors.gray[3],
            enabled: primary[3],
            pressed: primary[2],
          },
        },
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

  return { components, baseFontSize, colors, spacing };
};

export default baseTheme;
