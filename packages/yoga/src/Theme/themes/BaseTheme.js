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

  [
    colors.gray.surface,
    colors.gray.background,
    ,
    ,
    ,
    ,
    ,
    colors.gray.medium,
    colors.gray.dark,
    colors.gray.darker,
  ] = colors.gray;

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
