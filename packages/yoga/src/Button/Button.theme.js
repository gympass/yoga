import { hexToRgb } from '@gympass/yoga-common';

const Button = ({
  spacing,
  fontSizes,
  borders,
  radii,
  colors,
  fontWeights,
}) => ({
  padding: {
    default: {
      right: spacing.large,
      left: spacing.large,
    },
    small: {
      right: spacing.small,
      left: spacing.small,
    },
  },
  height: {
    default: 48,
    small: 32,
  },
  font: {
    size: {
      default: fontSizes.medium,
      small: fontSizes.small,
    },
    weight: fontWeights.medium,
  },
  border: {
    radius: radii.circle,
  },
  icon: {
    size: {
      default: 24,
      small: 16,
    },
    margin: {
      right: spacing.xxsmall,
    },
  },
  types: {
    contained: {
      backgroundColor: {
        disabled: colors.elements.backgroundAndDisabled,
        primary: {
          default: colors.primary,
          pressed: hexToRgb(colors.primary, 0.75),
        },
        secondary: {
          default: colors.secondary,
          pressed: hexToRgb(colors.secondary, 0.75),
        },
      },
      font: {
        default: {
          color: colors.white,
        },
        disabled: {
          color: colors.text.disabled,
        },
        pressed: {
          color: colors.white,
        },
      },
    },
    outline: {
      backgroundColor: {
        default: 'transparent',
        primary: {
          hover: colors.primary,
        },
        secondary: {
          hover: colors.secondary,
        },
      },
      border: {
        width: borders.small,
      },
      font: {
        default: {
          primary: {
            color: colors.primary,
          },
          secondary: {
            color: colors.secondary,
          },
        },
        disabled: {
          color: colors.text.disabled,
        },
        hover: {
          color: colors.white,
        },
        pressed: {
          primary: {
            color: hexToRgb(colors.primary, 0.75),
          },
          secondary: {
            color: hexToRgb(colors.secondary, 0.75),
          },
        },
      },
    },
    text: {
      backgroundColor: 'transparent',
    },
    link: {
      font: {
        primary: {
          color: colors.primary,
        },
        secondary: {
          color: colors.secondary,
        },
        disabled: {
          color: colors.text.disabled,
        },
      },
      margin: {
        top: spacing.small,
        bottom: spacing.xxsmall,
      },
    },
    icon: {
      size: {
        default: 24,
        large: 48,
      },
      svg: {
        default: 12,
        large: 24,
      },
      margin: {
        top: spacing.small,
        bottom: spacing.xxsmall,
      },
    },
  },
});

export default Button;
