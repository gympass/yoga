const sizes = {
  xxsmall: 10,
  xsmall: 12,
  small: 14,
  medium: 16,
  large: 20,
  xlarge: 24,
  xxlarge: 32,
  xxxlarge: 40,
  huge: 48,
  xhuge: 60,
} as const;

const fontSizes = { ...Object.values(sizes), ...sizes };

export type FontSizes = Partial<typeof fontSizes>;

export default fontSizes;
