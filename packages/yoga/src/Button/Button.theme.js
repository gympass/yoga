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
        disabled: colors.elements.backgroundAndDisabled,
        default: colors.primary,
        pressed: hexToRgb(colors.primary, 0.75),
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
        disabled: 'transparent',
        default: 'transparent',
        pressed: 'transparent',
        hover: hexToRgb(colors.primary, 0.25),
      },
      font: {
        default: {
          color: colors.text.primary,
        },
        disabled: {
          color: colors.text.disabled,
        },
        pressed: {
          color: hexToRgb(colors.text.primary, 0.75),
        },
      },
    },
    text: {
      backgroundColor: 'transparent',
      font: {
        default: {
          color: colors.text.primary,
        },
        disabled: {
          color: colors.text.disabled,
        },
        hover: {
          color: hexToRgb(colors.primary, 0.5),
        },
        pressed: {
          color: hexToRgb(colors.primary, 0.75),
        },
      },
    },
    link: {
      font: {
        color: colors.secondary,
        disabled: {
          color: colors.text.disabled,
        },
      },
      margin: {
        top: spacing.small,
        bottom: spacing.xxsmall,
      },
    },
  },
});

export default Button;
