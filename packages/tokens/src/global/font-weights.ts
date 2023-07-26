export const weights = {
  light: 300,
  regular: 400,
  medium: 500,
  bold: 700,
  black: 900,
} as const;

const fontWeights = {...weights, ...Object.values(weights)};

export type FontWeights = Partial<typeof fontWeights>;

export default fontWeights;
