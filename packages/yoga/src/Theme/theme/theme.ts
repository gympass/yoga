/* eslint-disable prefer-destructuring */
import { merge } from '@gympass/yoga-common';
import componentThemes from './componentThemes';

import yogaTokens from '@gympass/yoga-tokens';

const theme = (tokens: typeof yogaTokens) => {
  const baseFont = tokens.fonts.rubik;
  const baseFontSize = tokens.fontSizes.medium;

  const colors = {
    ...tokens.colors,
    primary: tokens.colors.vibin,
    secondary: tokens.colors.stamina,
    feedback: {
      success: Object.assign([tokens.colors.success, tokens.colors.hope], {
        light: tokens.colors.success,
        dark: tokens.colors.hope,
      }),
      informative: Object.assign([tokens.colors.neutral, tokens.colors.relax], {
        light: tokens.colors.neutral,
        dark: tokens.colors.relax,
      }),
      attention: Object.assign([tokens.colors.attention, tokens.colors.verve], {
        light: tokens.colors.attention,
        dark: tokens.colors.verve,
      }),
      neutral: Object.assign([tokens.colors.light, tokens.colors.medium], {
        light: tokens.colors.light,
        dark: tokens.colors.medium,
      }),
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

  return {
    ...tokens,
    colors,
    baseFont,
    baseFontSize,
  };
};

const composeTheme = (tokens: typeof yogaTokens, customTheming = {}) => {
  const baseTheme = theme(tokens);
  const customTheme = merge(baseTheme, customTheming);

  const { colors, baseFont, baseFontSize } = customTheme;
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

  return merge(customTheme, { components });
};

export default composeTheme;
