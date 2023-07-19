const radii = {
  sharp: 0,
  xsmall: 4,
  small: 8,
  regular: 16,
  circle: 9999,
} as const;

export type Radii = Partial<typeof radii>;

export default radii;
