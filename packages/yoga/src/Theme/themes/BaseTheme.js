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
  fonts,
} = tokens;

const BaseTheme = ({ primary, secondary, tertiary }) => {
  const baseFontSize = fontSizes.medium;
  const colors = {
    primary,
    secondary,
    tertiary,
    gray: tokenColors.gray,
    white: tokenColors.white,
    dark: tokenColors.dark,
    positive: tokenColors.positive,
    negative: tokenColors.negative,
  };

  const components = {
    stepper: {
      padding: {
        left: spacing.xxlarge,
        right: spacing.xxlarge,
      },
      line: {
        backgroundColor: {
          active: colors.primary[3],
          inactive: colors.gray[3],
        },
      },
      dot: {
        radius: radii.circle,
        backgroundColor: {
          active: colors.primary[3],
          inactive: colors.gray[3],
        },
      },
      label: {
        font: {
          size: fontSizes.xsmall,
          weight: fontWeights.bold,
        },
        color: {
          active: colors.primary[3],
          inactive: colors.gray[7],
        },
      },
    },
    slider: {
      track: {
        backgroundColor: {
          active: colors.primary[3],
          inactive: colors.gray[3],
        },
        border: {
          radius: radii.circle,
        },
      },
      step: {
        backgroundColor: {
          active: primary[3],
          inactive: colors.gray[3],
        },
        border: {
          radius: radii.circle,
        },
      },
      marker: {
        backgroundColor: primary[3],
        border: {
          color: colors.white,
          radius: radii.circle,
        },
        shadow: elevations.small,
      },
      label: {
        font: {
          size: fontSizes.xsmall,
          weight: fontWeights.regular,
        },
      },
      tooltip: {
        shadow: elevations.small,
        radius: radii.rounded,
        backgroundColor: colors.gray[1],
        distance: spacing.large,
        padding: {
          top: spacing.xxsmall,
          right: spacing.xsmall,
          bottom: spacing.xxsmall,
          left: spacing.xsmall,
        },
        font: {
          color: colors.gray[8],
          title: {
            size: fontSizes.small,
            weight: fontWeights.regular,
          },
          description: {
            size: fontSizes.small,
            weight: fontWeights.regular,
          },
        },
        ribbon: {
          backgroundColor: secondary[3],
          radius: radii.rounded,
          padding: {
            top: spacing.xxsmall,
            right: spacing.xsmall,
            bottom: spacing.xxsmall,
            left: spacing.xsmall,
          },
          font: {
            color: colors.white,
            size: fontSizes.xsmall,
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
        color: colors.gray[3],
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
            enabled: primary[3],
            pressed: primary[2],
          },
          textColor: {
            disabled: colors.gray[7],
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
            disabled: colors.gray[7],
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
            disabled: colors.gray[7],
            enabled: primary[3],
            pressed: primary[2],
          },
        },
        link: {
          textColor: {
            disabled: colors.gray[7],
          },
          margin: {
            top: spacing.medium,
            bottom: spacing.xsmall,
          },
        },
      },
    },
    switch: {
      track: {
        width: 48,
        height: 24,
        backgroundColor: colors.gray[3],
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
          backgroundColor: colors.gray[3],
        },
      },
      focus: {
        checked: {
          backgroundColor: hexToRgb(primary[3], 0.2),
        },
        disabled: {
          backgroundColor: hexToRgb(colors.gray[7], 0.2),
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
          size: fontSizes.small,
        },
      },
      radii: radii.circle,
      border: {
        width: borders.small,
        color: colors.gray[3],
      },
    },
    card: {
      backgroundColor: colors.white,
      padding: {
        top: spacing.medium,
        right: spacing.medium,
        bottom: spacing.medium,
        left: spacing.medium,
      },
      radii: radii.rounded,
      elevation: elevations.small,
      ribbon: {
        radius: radii.circle,
        font: {
          size: fontSizes.xsmall,
        },
      },
      plan: {
        title: {
          margin: {
            top: spacing.xsmall,
            bottom: spacing.small,
          },
          font: {
            size: fontSizes.small,
            weight: fontWeights.regular,
          },
        },
        price: {
          margin: {
            top: spacing.small,
          },
          font: {
            size: fontSizes.large,
            weight: fontWeights.bold,
          },
        },
        period: {
          margin: {
            bottom: spacing.xsmall,
          },
          font: {
            size: fontSizes.small,
            weight: fontWeights.regular,
          },
        },
      },
    },
    checkbox: {
      margin: {
        right: spacing.xsmall,
      },
      border: {
        width: borders.medium,
        color: colors.primary[3],
        radius: radii.semiRounded,
      },
      label: {
        padding: {
          left: spacing.xsmall,
        },
        font: {
          size: fontSizes.small,
          color: colors.dark,
        },
      },
      helper: {
        margin: {
          top: spacing.xxsmall,
        },
        font: {
          size: fontSizes.small,
          color: colors.gray[7],
        },
        selected: {
          font: {
            color: colors.negative[1],
          },
        },
      },
      hover: {
        border: {
          radius: radii.circle,
        },
      },
      checked: {
        backgroundColor: colors.primary[3],
      },
      disabled: {
        backgroundColor: colors.gray[7],
        border: {
          color: colors.gray[7],
        },
      },
      error: {
        backgroundColor: colors.negative[1],
        border: {
          color: colors.negative[1],
        },
      },
    },
    grid: {
      gutter: {
        desktop: 24,
        mobile: 16,
      },
      container: {
        width: 1600,
        margin: {
          desktop: {
            left: 71,
            right: 71,
          },
          mobile: {
            left: 20,
            right: 20,
          },
        },
      },
    },
  };

  return { components, baseFontSize, colors, spacing, fonts };
};

export default BaseTheme;
