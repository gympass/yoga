import weights from './font-weights';

export interface IFontProps {
  family: string;
  weight: (number | string)[];
}

export interface IFontsProps {
  rubik?: IFontProps;
}

const fonts: IFontsProps = {
  rubik: {
    family: 'Rubik',
    weight: [...weights, ...weights.map(weight => `${weight}i`)],
  },
};

export default fonts;
