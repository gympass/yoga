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

const BaseTheme = ({ primary, secondary }) => {
  const baseFontSize = fontSizes[3];
  const colors = {
    primary,
    secondary,
    gray: tokenColors.gray,
    white: tokenColors.white,
    dark: tokenColors.dark,
  };

  const components = {
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
    card: {
      padding: spacing.medium,
      radii: radii.rounded,
      background: {
        default: colors.white,
        selected: colors.secondary[3],
      },
      elevation: elevations.small,
      header: {
        ribbon: {
          right: -spacing.medium,
          padding: {
            x: spacing.xsmall,
            y: spacing.medium,
          },
          radii: {
            topLeft: 16,
            bottomLeft: 16,
          },
          background: {
            primary: colors.primary[1],
            secondary: colors.secondary[1],
          },
          font: {
            size: fontSizes[1],
            weight: fontWeights.bold,
            color: {
              primary: colors.primary[3],
              secondary: colors.secondary[3],
            },
          },
        },
      },
      plan: {
        header: {
          margin: {
            bottom: spacing.xxlarge,
          },
          title: {
            font: {
              size: fontSizes[1],
              color: {
                default: colors.gray[4],
                selected: colors.white,
              },
            },
          },
        },
        price: {
          font: {
            size: fontSizes[7],
            weight: fontWeights.bold,
            color: {
              default: colors.black,
              selected: colors.white,
            },
          },
        },
        period: {
          font: {
            size: fontSizes[1],
            padding: {
              top: spacing.xxsmall,
            },
            color: {
              default: colors.gray[4],
              selected: colors.white,
            },
          },
        },
        footer: {
          margin: {
            top: spacing.large,
          },
          gymsQuantity: {
            font: {
              size: fontSizes[2],
              weight: fontWeights.bold,
              color: {
                default: colors.secondary[3],
                selected: colors.white,
              },
            },
          },
        },
        radioGroup: {
          radio: {
            border: {
              radius: radii.circle,
            },
            hover: {
              backgroundColor: colors.gray[1],
            },
            backgroundColor: {
              enabled: 'transparent',
            },
            checked: {
              backgroundColor: {
                enabled: primary[3],
              },
              textColor: {
                enabled: colors.white,
              },
              font: {
                weight: fontWeights.bold,
              },
            },
            padding: {
              right: spacing.xlarge,
              left: spacing.xlarge,
            },
            height: {
              normal: 40,
              small: 32,
            },
            font: {
              size: fontSizes[2],
            },
          },
          radii: radii.circle,
          border: {
            width: borders.small,
            color: colors.gray[2],
          },
        },
      },
    },
  };
  return { components, baseFontSize, colors, spacing };
};

export default BaseTheme;
