const border = {
  zero: 0,
  small: 1,
  medium: 2,
} as const;

export type BorderSizes = Partial<typeof border>;

export default border;
