import { fontWeights } from './font-weights';

export const fonts = {
  rubik: {
    family: 'Rubik',
    weight: [
      ...Object.entries(fontWeights),
      ...Object.entries(fontWeights).map(weight => `${weight}i`),
    ],
  },
} as const;
