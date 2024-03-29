const spacingSizes = {
  zero: 0,
  xxxsmall: 4,
  xxsmall: 8,
  xsmall: 12,
  small: 16,
  medium: 20,
  large: 24,
  xlarge: 32,
  xxlarge: 40,
  xxxlarge: 56,
  huge: 72,
  xhuge: 80,
} as const;

const spacing = {...Object.values(spacingSizes), ...spacingSizes};

export type SpacingSizes = Partial<typeof spacing>;

export default spacing;
