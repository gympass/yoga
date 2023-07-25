const elevationSizes = {
  zero: 0,
  small: 4,
  medium: 8,
  large: 12,
} as const;

const elevations = {...Object.values(elevationSizes), ...elevationSizes};

export type ElevationSizes = Partial<typeof elevations>;

export default elevations;
