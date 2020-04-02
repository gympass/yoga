/* eslint-disable prefer-destructuring */
import tokens from '@gympass/yoga-tokens';
import * as componentThemes from '../../**/*.theme.js';

const BaseTheme = ({ primary, secondary, tertiary }) => {
  const baseFont = tokens.fonts.openSans;
  const baseFontSize = tokens.fontSizes.medium;
  const colors = {
    primary,
    secondary,
    tertiary,
    gray: tokens.colors.gray,
    white: tokens.colors.white,
    dark: tokens.colors.dark,
    positive: tokens.colors.positive,
    negative: tokens.colors.negative,
    informative: tokens.colors.informative,
    warning: tokens.colors.warning,
    disabled: {
      background: tokens.colors.gray[4],
      content: tokens.colors.gray[7],
    },
    rating: tokens.colors.milan[3],
  };

  colors.gray.surface = tokens.colors.gray[0];
  colors.gray.background = tokens.colors.gray[1];
  colors.gray.medium = tokens.colors.gray[7];
  colors.gray.dark = tokens.colors.gray[8];
  colors.gray.darker = tokens.colors.gray[9];

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

export default BaseTheme;
