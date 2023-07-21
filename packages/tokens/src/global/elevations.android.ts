export interface ElevationsSizes extends Array<number> {
  zero?: number;
  small?: number;
  medium?: number;
  large?: number;
}

const elevations: ElevationsSizes = [0, 4, 8, 12];

[elevations.zero, elevations.small, elevations.medium, elevations.large] =
  elevations;

export default elevations;
