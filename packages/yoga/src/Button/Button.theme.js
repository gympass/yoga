import { hexToRgb } from '@gympass/yoga-common';

const Button = ({
  spacing,
  fontSizes,
  borders,
  radii,
  colors,
  fontWeights,
  baseFont,
}) => ({
  padding: {
    right: spacing.xlarge,
    left: spacing.xlarge,
  },
  height: {
    default: 48,
    small: 32,
  },
  font: {
    family: baseFont.family,
    size: fontSizes.small,
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
        disabled: colors.gray[3],
        default: colors.primary[3],
        pressed: colors.primary[2],
      },
      font: {
        default: {
          color: colors.white,
        },
        disabled: {
          color: colors.gray[7],
        },
        pressed: {
          color: colors.white,
        },
      },
    },
    outline: {
      backgroundColor: {
        disabled: 'transparent',
        default: 'transparent',
        pressed: 'transparent',
        hover: hexToRgb(colors.primary[3], 0.3),
      },
      font: {
        default: {
          color: colors.primary[3],
        },
        disabled: {
          color: colors.gray[7],
        },
        pressed: {
          color: colors.primary[2],
        },
      },
    },
    text: {
      backgroundColor: {
        disabled: 'transparent',
        default: 'transparent',
        pressed: 'transparent',
        hover: hexToRgb(colors.primary[3], 0.3),
      },
      font: {
        default: {
          color: colors.primary[3],
        },
        disabled: {
          color: colors.gray[7],
        },
        pressed: {
          color: colors.primary[2],
        },
      },
    },
    link: {
      font: {
        disabled: {
          color: colors.gray[7],
        },
      },
      margin: {
        top: spacing.medium,
        bottom: spacing.xsmall,
      },
    },
  },
});

export default Button;
