export interface IElevationsProps extends Array<number> {
  zero?: number;
  small?: number;
  medium?: number;
  large?: number;
}

const elevations: IElevationsProps = [0, 4, 8, 12];

[elevations.zero, elevations.small, elevations.medium, elevations.large] =
  elevations;

export default elevations;
