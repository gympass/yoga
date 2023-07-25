const lineHeightSizes = {
  xxsmall: 12,
  xsmall: 16,
  small: 20,
  medium: 24,
  large: 28,
  xlarge: 32,
  xxlarge: 40,
  xxxlarge: 48,
  huge: 56,
} as const;

const lineHeight = {...Object.values(lineHeightSizes), ...lineHeightSizes};

export type LineHeightSizes = Partial<typeof lineHeight>;

export default lineHeight;
