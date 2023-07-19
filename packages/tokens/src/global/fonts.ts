import weights from './font-weights';

export interface Font {
  family: string;
  weight: (number | string)[];
}

export interface Fonts {
  rubik?: Font;
}

const fonts: Fonts = {
  rubik: {
    family: 'Rubik',
    weight: Object.entries(weights).flatMap(([weight, value]) => [value, `${weight}i`]),
  },
};

export default fonts;
