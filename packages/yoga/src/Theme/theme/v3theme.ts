import createTheme from '../helpers/themeGenerator';

export const v3theme = createTheme(tokens => ({
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
      lineAndBorders: tokens.colors.lightest,
      backgroundAndDisabled: tokens.colors.clearNew,
    },
  },

  baseFont: tokens.fonts.inter,
}));
