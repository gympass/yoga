/* eslint-disable prefer-destructuring */
import { hexToRgb } from '@gympass/yoga-common';
import * as componentThemes from '../../**/*.theme.js';

const theme = tokens => {
  const baseFont = tokens.fonts.rubik;
  const baseFontSize = tokens.fontSizes.medium;

  const colors = {
    ...tokens.colors,
    primary: tokens.colors.stamina,
    secondary: tokens.colors.vibin,
    feedback: {
      success: [hexToRgb(tokens.colors.hope, 0.25), tokens.colors.hope],
      informative: [hexToRgb(tokens.colors.relax, 0.25), tokens.colors.relax],
      attention: [hexToRgb(tokens.colors.verve, 0.25), tokens.colors.verve],
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
