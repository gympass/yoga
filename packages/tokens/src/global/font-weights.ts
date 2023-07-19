const fontWeights = {
  light: 300,
  regular: 400,
  medium: 500,
  bold: 700,
  black: 900,
} as const;

export type FontWeights = Partial<typeof fontWeights>;

export default fontWeights;
