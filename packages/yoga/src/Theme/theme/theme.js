/* eslint-disable prefer-destructuring */
import * as componentThemes from '../../**/*.theme.js';

/**
 * @typedef {typeof import('@gympass/yoga-tokens/src/global')} Tokens
 * @typedef {import('@gympass/yoga-tokens/src/global/fonts').Font} Font
 * @typedef {import('@gympass/yoga-tokens/src/global/font-sizes').FontSize} FontSize
 * @typedef {import('@gympass/yoga-tokens/src/global/colors').Color} Color
 * @typedef {import('@gympass/yoga-tokens/src/global/colors').Colors} Colors
 */

/**
 * @typedef {Object} ExtendColors
 *
 * @property {Color} primary
 * @property {Color} secondary
 * @property {{
 *   success: {
 *     light: Color
 *     dark: Color
 *   }
 *   informative: {
 *     light: Color
 *     dark: Color
 *   }
 *   attention: {
 *     light: Color
 *     dark: Color
 *   }
 * }} feedback
 * @property {{
 *   primary: Color
 *   secondary: Color
 *   disabled: Color
 * }} text
 * @property {{
 *   selectionAndIcons: Color
 *   lineAndBorders: Color
 *   backgroundAndDisabled: Color
 * }} elements
 */

/**
 * @typedef ThemeColors
 * @type {Colors & ExtendColors}
 */

/**
 * @typedef YogaTheme
 *
 * @property {Font} baseFont
 * @property {FontSize} baseFontSize
 * @property {ThemeColors} colors
 */

/**
 * @typedef Theme
 * @type {YogaTheme & Tokens}
 */

/**
 * @param {Tokens} tokens
 * @returns {Theme & Tokens} Yoga theme
 */
const theme = tokens => {
  /** @type {Font} */
  const baseFont = tokens.fonts.rubik;
  /** @type {FontSize} */
  const baseFontSize = tokens.fontSizes.medium;

  /** @type {ThemeColors} */
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
