export interface IBorderProps extends Array<number> {
  zero?: number;
  small?: number;
  medium?: number;
}

const border: IBorderProps = [0, 1, 2];

[border.zero, border.small, border.medium] = border;

export default border;
