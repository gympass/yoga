import weights from './font-weights';

export interface FontProps {
  family: string;
  weight: (number | string)[];
}

export interface FontsProps {
  rubik?: FontProps;
}

const fonts: FontsProps = {
  rubik: {
    family: 'Rubik',
    weight: [...weights, ...weights.map(weight => `${weight}i`)],
  },
};

export default fonts;
