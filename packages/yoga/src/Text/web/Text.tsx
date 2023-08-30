import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { system } from '@gympass/yoga-system';
import textStyle from '../textStyle.web';

const typeOptions = [
  'p',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'small',
  'tiny',
  'light',
  'regular',
  'medium',
  'bold',
  'black',
  'sectionTitle',
  'smallestException'
] as const;

type Types = typeof typeOptions[number];

const sizes = [
  'xxsmall',
  'xsmall',
  'small',
  'medium',
  'large',
  'xlarge',
  'xxlarge',
  'xxxlarge',
  'huge',
];
type fontSizes = typeof sizes[number];

const colors = [
  'primary',
  'secondary',
  'vibin',
  'hope',
  'energy',
  'relax',
  'peace',
  'verve',
  'uplift',
  'deepPurple',
  'stamina',
  'dark',
  'medium',
  'deep',
  'light',
  'clear',
  'white'
] as const;

const styledText = (type: Types, element = false): React.FC<PropsWithChildren<TextProps>> => (element
  ? styled[type]
  : styled.p)`
    margin: 0;
    padding: 0;
    ${textStyle(type)}
    ${system}
`;

const H1 = styledText('h1', true);

const H2 = styledText('h2', true);

const H3 = styledText('h3', true);

const H4 = styledText('h4', true);

const H5 = styledText('h5', true);

const Small = styledText('small');

const Tiny = styledText('tiny');

const Light = styledText('light');

const Regular = styledText('regular');

const Medium = styledText('medium');

const Bold = styledText('bold');

const Black = styledText('black');

const SectionTitle = styledText('sectionTitle');

const SmallestException = styledText('smallestException');

type colorProps = typeof colors[number];
interface TextProps {
  inverted?: boolean;
  numberOfLines?: number;
  /** @deprecated use color instead */
  variant?: colorProps;
  color?: colorProps;
  /** @deprecated use fontSize instead */
  size?: fontSizes;
  fontSize?: fontSizes;
  /** set the font-weight to regular */
  light?: boolean;
}

const TextRenderer = styledText('p');

const Text = (props: PropsWithChildren<TextProps>) => <TextRenderer {...props} />;

Text.H1 = H1;
Text.H2 = H2;
Text.H3 = H3;
Text.H4 = H4;
Text.H5 = H5;
Text.Small = Small;
Text.Tiny = Tiny;
Text.Light = Light;
Text.Regular = Regular;
Text.Medium = Medium;
Text.Bold = Bold;
Text.Black = Black;
Text.SectionTitle = SectionTitle;
Text.SmallestException = SmallestException;

export default Text;
