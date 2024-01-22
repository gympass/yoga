import { weights } from './font-weights';

const fontWeights = Object.values(weights);
const weight = [
  ...fontWeights,
  ...fontWeights.map(value => `${value}i` as const),
];

type Font = {
  family: string;
  weight: typeof weight;
};

const fonts: Record<string, Font> = {
  rubik: {
    family: 'Rubik',
    weight,
  },
  inter: {
    family: 'Inter',
    weight,
  },
};

export default fonts;
