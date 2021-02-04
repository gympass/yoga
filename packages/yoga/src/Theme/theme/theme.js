/* eslint-disable prefer-destructuring */
import * as componentThemes from '../../**/*.theme.js';

const theme = tokens => {
  const baseFont = tokens.fonts.rubik;
  const baseFontSize = tokens.fontSizes.medium;

  const colors = {
    ...tokens.colors,
    primary: tokens.colors.stamina,
    secondary: tokens.colors.vibin,
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

  const components = {};
  Object.entries(componentThemes).forEach(([names, themed]) => {
    const [, name] = names.split('$');
    components[name.toLowerCase()] = themed({
      ...tokens,
      colors,
      baseFont,
      baseFontSize,
    });
  });

  return {
    ...tokens,
    components,
    colors,
    baseFont,
    baseFontSize,
  };
};

export default theme;
