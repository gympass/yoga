export interface ILineHeightProps extends Array<number> {
  sharp?: number;
  xsmall?: number;
  small?: number;
  regular?: number;
  circle?: number;
}

const radii: ILineHeightProps = [0, 4, 8, 16, 9999];

[radii.sharp, radii.xsmall, radii.small, radii.regular, radii.circle] = radii;

export default radii;
