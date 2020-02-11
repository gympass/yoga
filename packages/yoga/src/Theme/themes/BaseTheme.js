import tokens from '@gympass/yoga-tokens';

import {
  progress,
  stepper,
  slider,
  list,
  button,
  checkboxswitch,
  radiogroup,
  card,
  checkbox,
  grid,
  text,
  rating,
  tag,
} from './components';

const {
  breakpoints,
  spacing,
  radii,
  fontSizes,
  fontWeights,
  transitions,
  elevations,
  colors: tokenColors,
  borders,
  fonts,
  lineHeights,
} = tokens;

const BaseTheme = ({ primary, secondary, tertiary }) => {
  const [baseFontFamily] = fonts;
  const baseFontSize = fontSizes.medium;
  const colors = {
    primary,
    secondary,
    tertiary,
    gray: tokenColors.gray,
    white: tokenColors.white,
    dark: tokenColors.dark,
    positive: tokenColors.positive,
    negative: tokenColors.negative,
    informative: tokenColors.informative,
    warning: tokenColors.warning,
  };

  const components = {
    stepper: stepper({ colors, spacing, fontWeights, radii }),
    slider: slider({ colors, radii, elevations, spacing, fontWeights }),
    list: list({ spacing, borders, colors }),
    button: button({ spacing, fontSizes, borders, radii, colors, fontWeights }),
    switch: checkboxswitch({
      colors,
      radii,
      transitions,
      spacing,
      elevations,
    }),
    radioGroup: radiogroup({
      radii,
      colors,
      fontWeights,
      spacing,
      borders,
      fontSizes,
    }),
    card: card({ colors, spacing, radii, elevations, borders, fontWeights }),
    checkbox: checkbox({ spacing, colors, borders, radii, fontSizes }),
    grid: grid(),
    text: text({ fontSizes, lineHeights, fontWeights }),
    rating: rating({ spacing, tokenColors }),
    tag: tag({ spacing, fontSizes, fontWeights, radii }),
    progress: progress({ spacing, colors, radii, fontSizes }),
  };

  return {
    components,
    baseFontFamily,
    baseFontSize,
    colors,
    spacing,
    fonts,
    breakpoints,
  };
};

export default BaseTheme;
