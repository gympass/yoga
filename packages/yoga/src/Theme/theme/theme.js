/* eslint-disable prefer-destructuring */
import { merge } from '@gympass/yoga-common';
import * as componentThemes from '../../**/*.theme.js';

const getComponentThemes = tokens => {
  const { colors, baseFont, baseFontSize } = tokens;
  const components = Object.entries(componentThemes).reduce(
    (acc, [names, themed]) => {
      const [, name] = names.split('$');

      return {
        ...acc,
        [name.toLowerCase()]: themed({
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

  [
    colors.feedback.success.light,
    colors.feedback.success.dark,
  ] = colors.feedback.success;
  [
    colors.feedback.informative.light,
    colors.feedback.informative.dark,
  ] = colors.feedback.informative;
  [
    colors.feedback.attention.light,
    colors.feedback.attention.dark,
  ] = colors.feedback.attention;

  return {
    ...tokens,
    colors,
    baseFont,
    baseFontSize,
  };
};

const composeTheme = (tokens, customTheming = {}) => {
  const baseTheme = theme(tokens);
  const customTheme = merge(baseTheme, customTheming);
  const componentTheming = getComponentThemes(customTheme);

  return merge(customTheme, componentTheming);
};

export default composeTheme;
