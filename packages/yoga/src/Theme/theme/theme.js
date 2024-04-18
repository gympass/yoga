/* eslint-disable prefer-destructuring */
import { merge } from '@gympass/yoga-common';
import componentThemes from './themeImports';

const getComponentThemes = tokens => {
  const { colors, baseFont, baseFontSize } = tokens;
  const components = Object.entries(componentThemes).reduce(
    (componentsStyles, [names, themed]) => {
      const name = names.toLowerCase();

      return {
        ...componentsStyles,
        [name]: themed({
          ...tokens,
          colors,
          baseFont,
          baseFontSize,
        }),
      };
    },
    {},
  );

  return { components };
};

const theme = tokens => {
  const baseFont = tokens.fonts.rubik;
  const baseFontSize = tokens.fontSizes.medium;

  const colors = {
    ...tokens.colors,
    primary: tokens.colors.vibin,
    secondary: tokens.colors.stamina,
    feedback: {
      success: [tokens.colors.success, tokens.colors.hope],
      informative: [tokens.colors.neutral, tokens.colors.relax],
      attention: [tokens.colors.attention, tokens.colors.verve],
      neutral: [tokens.colors.light, tokens.colors.medium],
    },
    text: {
      primary: tokens.colors.stamina,
      secondary: tokens.colors.deep,
      disabled: tokens.colors.light,
    },
    elements: {
      selectionAndIcons: tokens.colors.medium,
      lineAndBorders: tokens.colors.light,
      backgroundAndDisabled: tokens.colors.clear,
    },
  };

  [colors.feedback.success.light, colors.feedback.success.dark] =
    colors.feedback.success;

  [colors.feedback.informative.light, colors.feedback.informative.dark] =
    colors.feedback.informative;

  [colors.feedback.attention.light, colors.feedback.attention.dark] =
    colors.feedback.attention;

  [colors.feedback.neutral.light, colors.feedback.neutral.dark] =
    colors.feedback.neutral;

  return {
    ...tokens,
    colors,
    baseFont,
    baseFontSize,
    v3theme: false,
  };
};

const composeTheme = (tokens, customTheming = {}) => {
  const baseTheme = theme(tokens);
  const customTheme = merge(baseTheme, customTheming);
  const componentTheming = getComponentThemes(customTheme);

  return merge(componentTheming, customTheme);
};

export default composeTheme;
