import createTheme from '../helpers/themeGenerator';

export const v3theme = createTheme(tokens => ({
  v3theme: true,

  colors: {
    secondary: tokens.colors.staminaNew,

    deep: tokens.colors.deepNew,
    hope: tokens.colors.hopeNew,
    light: tokens.colors.lightNew,
    clear: tokens.colors.clearNew,
    peace: tokens.colors.peaceNew,
    relax: tokens.colors.relaxNew,
    medium: tokens.colors.mediumNew,
    uplift: tokens.colors.upliftNew,
    stamina: tokens.colors.staminaNew,
    success: tokens.colors.successNew,
    neutral: tokens.colors.neutralNew,
    deepPurple: tokens.colors.deepPurpleNew,

    feedback: {
      success: Object.assign(
        [tokens.colors.successNew, tokens.colors.hopeNew],
        {
          light: tokens.colors.successNew,
          dark: tokens.colors.hopeNew,
        },
      ),
      informative: Object.assign(
        [tokens.colors.neutralNew, tokens.colors.relaxNew],
        {
          light: tokens.colors.neutralNew,
          dark: tokens.colors.relaxNew,
        },
      ),
      neutral: Object.assign(
        [tokens.colors.lightNew, tokens.colors.mediumNew],
        {
          light: tokens.colors.lightNew,
          dark: tokens.colors.mediumNew,
        },
      ),
    },

    text: {
      primary: tokens.colors.staminaNew,
      secondary: tokens.colors.deepNew,
      disabled: tokens.colors.lightNew,
    },

    elements: {
      selectionAndIcons: tokens.colors.mediumNew,
      lineAndBorders: tokens.colors.lightNew,
      backgroundAndDisabled: tokens.colors.clearNew,
    },
  },

  baseFont: tokens.fonts.inter,
  components: {
    text: {
      display1: {
        fontFamily: 'NaN Holo Condensed',
        fontsize: tokens.fontSizes.xhuge,
        fontWeight: tokens.fontWeights.bold,
        lineHeight: tokens.lineHeights.xhuge,
      },
      display2: {
        fontFamily: 'NaN Holo Condensed',
        fontsize: tokens.fontSizes.xxxlarge,
        fontWeight: tokens.fontWeights.bold,
        lineHeight: tokens.lineHeights.xxlarge,
      },
      display3: {
        fontFamily: 'NaN Holo Condensed',
        fontsize: tokens.fontSizes.xxlarge,
        fontWeight: tokens.fontWeights.bold,
        lineHeight: tokens.lineHeights.xlarge,
      },
      display4: {
        fontFamily: 'NaN Holo Condensed',
        fontsize: tokens.fontSizes.xlarge,
        fontWeight: tokens.fontWeights.bold,
        lineHeight: tokens.lineHeights.medium,
      },
      displayNumber: {
        fontFamily: 'NaN Holo Condensed',
        fontsize: tokens.fontSizes.xxxlarge,
        fontWeight: tokens.fontWeights.bold,
        lineHeight: tokens.lineHeights.xxlarge,
      },
      h1: {
        fontsize: tokens.fontSizes.huge,
        fontWeight: tokens.fontWeights.medium,
        lineHeight: tokens.lineHeights.huge,
      },
      'h1-light': null,
      'h1-bold': {
        fontWeight: tokens.fontWeights.bold,
      },
      h2: {
        fontsize: tokens.fontSizes.xxxlarge,
        fontWeight: tokens.fontWeights.medium,
        lineHeight: tokens.lineHeights.xxxlarge,
      },
      'h2-light': null,
      'h2-bold': {
        fontWeight: tokens.fontWeights.bold,
      },
      h3: {
        fontsize: tokens.fontSizes.xxlarge,
        lineHeight: tokens.lineHeights.xxlarge,
        fontWeight: tokens.fontWeights.medium,
      },
      'h3-light': null,
      'h3-bold': {
        fontWeight: tokens.fontWeights.bold,
      },
      h4: {
        fontsize: tokens.fontSizes.xlarge,
        fontWeight: tokens.fontWeights.medium,
        lineHeight: tokens.lineHeights.xlarge,
      },
      'h4-light': null,
      'h4-bold': {
        fontWeight: tokens.fontWeights.bold,
      },
      h5: {
        fontsize: tokens.fontSizes.large,
        fontWeight: tokens.fontWeights.medium,
        lineHeight: tokens.lineHeights.large,
      },
      'h5-light': null,
      'h5-bold': {
        fontWeight: tokens.fontWeights.bold,
      },
      body1: {
        fontsize: tokens.fontSizes.medium,
        fontWeight: tokens.fontWeights.medium,
        lineHeight: tokens.lineHeights.medium,
      },
      'body1-bold': {
        fontWeight: tokens.fontWeights.bold,
      },
      body2: {
        fontsize: tokens.fontSizes.small,
        fontWeight: tokens.fontWeights.medium,
        lineHeight: tokens.lineHeights.small,
      },
      'body2-bold': {
        fontWeight: tokens.fontWeights.bold,
      },
      caption: {
        fontsize: tokens.fontSizes.xsmall,
        fontWeight: tokens.fontWeights.regular,
        lineHeight: tokens.lineHeights.xsmall,
      },
      overline: {
        fontsize: tokens.fontSizes.xsmall,
        fontWeight: tokens.fontWeights.bold,
        lineHeight: tokens.lineHeights.xsmall,
      },
      sectionTitle: {
        fontsize: tokens.fontSizes.xsmall,
        fontWeight: tokens.fontWeights.medium,
        lineHeight: tokens.lineHeights.xsmall,
        letterSpacing: 1,
        textTransform: 'uppercase',
      },
      smallestException: {
        fontsize: tokens.fontSizes.xxsmall,
        fontWeight: tokens.fontWeights.regular,
        lineHeight: tokens.lineHeights.xxsmall,
      },

      // deprecated, please don't use
      p: {
        fontsize: tokens.fontSizes.medium,
        fontWeight: tokens.fontWeights.medium,
        lineHeight: tokens.lineHeights.medium,
      },
      'p-light': null,
      'p-bold': {
        fontWeight: tokens.fontWeights.bold,
      },
      small: {
        fontsize: tokens.fontSizes.small,
        fontWeight: tokens.fontWeights.medium,
        lineHeight: tokens.lineHeights.small,
      },
      'small-light': null,
      'small-bold': {
        fontWeight: tokens.fontWeights.bold,
      },
      tiny: {
        fontsize: tokens.fontSizes.xsmall,
        fontWeight: tokens.fontWeights.regular,
        lineHeight: tokens.lineHeights.xsmall,
      },
      'tiny-light': null,
      light: {
        fontWeight: tokens.fontWeights.light,
      },
      regular: {
        fontWeight: tokens.fontWeights.regular,
      },
      medium: {
        fontWeight: tokens.fontWeights.medium,
      },
      bold: {
        fontWeight: tokens.fontWeights.bold,
      },
      black: {
        fontWeight: tokens.fontWeights.black,
      },
    },
    button: {
      font: {
        size: {
          default: tokens.fontSizes.medium,
          small: tokens.fontSizes.small,
        },
        weight: tokens.fontWeights.semiBold,
        height: {
          default: tokens.lineHeights.medium,
          small: tokens.lineHeights.xsmall,
        }
      },
    },
    input: {
      font: {
        weight: tokens.fontWeights.medium,
      },
      label: {
        font: {
          weight: tokens.fontWeights.medium,
        },
      },
    },
    dropdown: {
      input: {
        font: {
          size: tokens.fontSizes.small,
          lineHeight: tokens.lineHeights.small,
        },
      },
      option: {
        font: {
          size: tokens.fontSizes.small,
          lineHeight: tokens.lineHeights.small,
          weight: tokens.fontWeights.regular,
        }
      },
      backdrop: {
        content: {
          title: {
            font: {
              weight: tokens.fontWeights.bold,
              size: tokens.fontSizes.medium,
             },
          }
        }
      },
      selected: {
        option: {
          font: {
            weight: tokens.fontWeights.bold,
            size: tokens.fontSizes.small,
          },
        },
      },
    }
  },
}));
