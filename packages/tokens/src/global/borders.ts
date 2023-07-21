export interface BorderSizes extends Array<number> {
  zero?: number;
  small?: number;
  medium?: number;
}

const border: BorderSizes = [0, 1, 2];

[border.zero, border.small, border.medium] = border;

export default border;
