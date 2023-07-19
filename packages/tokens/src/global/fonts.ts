import weights from './font-weights';

export interface Font {
  family: string;
  weight: (number | string)[];
}

export interface Fonts {
  rubik?: Font;
}

const fontWeights = Object.values(weights);

const fonts: Fonts = {
  rubik: {
    family: 'Rubik',
    weight: [...fontWeights, ...fontWeights.map(value => `${value}i`)],
  },
};

export default fonts;
