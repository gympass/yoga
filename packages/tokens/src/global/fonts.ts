import { weights } from './font-weights';

export interface Font {
  family: string;
  weight: (number | string)[];
}

export interface Fonts {
  rubik?: Font;
  inter?: Font;
}

const fontWeights = Object.values(weights);
const weight = [...fontWeights, ...fontWeights.map(value => `${value}i`)];

const fonts: Fonts = {
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
