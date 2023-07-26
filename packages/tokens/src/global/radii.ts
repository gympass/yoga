const radiiSizes = {
  sharp: 0,
  xsmall: 4,
  small: 8,
  regular: 16,
  circle: 9999,
} as const;

const radii = {...Object.values(radiiSizes), ...radiiSizes};

export type Radii = Partial<typeof radii>;

export default radii;
