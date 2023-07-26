const borderSizes = {
  zero: 0,
  small: 1,
  medium: 2,
} as const;

const border = {...Object.values(borderSizes), ...borderSizes};

export type BorderSizes = Partial<typeof border>;

export default border;
