export interface BorderProps extends Array<number> {
  zero?: number;
  small?: number;
  medium?: number;
}

const border: BorderProps = [0, 1, 2];

[border.zero, border.small, border.medium] = border;

export default border;
