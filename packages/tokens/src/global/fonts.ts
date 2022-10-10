import { fontWeights } from './font-weights';

export const fonts = {
  rubik: {
    family: 'Rubik',
    weight: [
      ...Object.values(fontWeights),
      ...Object.values(fontWeights).map(weight => `${weight}i`),
    ],
  },
} as const;
