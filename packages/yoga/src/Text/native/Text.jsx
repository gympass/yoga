import React from 'react';
import styled from 'styled-components';
import { oneOf, bool } from 'prop-types';
import { system } from '@gympass/yoga-system';
import textStyle from '../textStyle';
import { deprecated } from '../../shared';

const styledText = type => styled.Text`
  ${textStyle(type)}
  ${system}
`;

const H1 = styledText('h1');

H1.displayName = 'Text.H1';

const H2 = styledText('h2');

H2.displayName = 'Text.H2';

const H3 = styledText('h3');

H3.displayName = 'Text.H3';

const H4 = styledText('h4');

H4.displayName = 'Text.H4';

const H5 = styledText('h5');

H5.displayName = 'Text.H5';

const Small = styledText('small');

Small.displayName = 'Text.Small';

const Tiny = styledText('tiny');

Tiny.displayName = 'Text.Tiny';

const Light = styledText('light');

Light.displayName = 'Text.Light';

const Regular = styledText('regular');

Regular.displayName = 'Text.Regular';

const Medium = styledText('medium');

Medium.displayName = 'Text.Medium';

const Bold = styledText('bold');

Bold.displayName = 'Text.Bold';

const Black = styledText('black');

Black.displayName = 'Text.Black';

const SectionTitle = styledText('sectionTitle');

SectionTitle.displayName = 'Text.SectionTitle';

const SmallestException = styledText('smallestException');

SmallestException.displayName = 'Text.SmallestException';

const Test1 = styledText('display1');

Test1.displayName = 'Text.Test1';

const Display1 = styledText('display1');

Display1.displayName = 'Text.Display1';

const Display2 = styledText('display2');

Display2.displayName = 'Text.Display2';

const Display3 = styledText('display3');

Display3.displayName = 'Text.Display3';

const Display4 = styledText('display4');

Display4.displayName = 'Text.Display4';

const DisplayNumber = styledText('displayNumber');

DisplayNumber.displayName = 'Text.DisplayNumber';

const TextRenderer = styledText('p');

const Text = props => <TextRenderer {...props} />;

Text.displayName = 'Text';

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
Text.Test1 = Test1;
Text.Display1 = Display1;
Text.Display2 = Display2;
Text.Display3 = Display3;
Text.Display4 = Display4;
Text.DisplayNumber = DisplayNumber;

const fontSizes = oneOf([
  'xxsmall',
  'xsmall',
  'small',
  'medium',
  'large',
  'xlarge',
  'xxlarge',
  'xxxlarge',
  'huge',
]);

Text.propTypes = {
  inverted: bool,
  /** (deprecated: use color instead) style the text following the theme */
  variant: deprecated(
    oneOf([
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
      'deep',
      'medium',
      'light',
      'clear',
      'white',
    ]),
    'Use `color` system prop instead',
  ),
  /** (deprecated: use fontSize instead) style the text following the theme */
  size: deprecated(fontSizes, 'Use `fontSize` system prop instead'),
  /** set the font-weight to regular */
  light: bool,
  fontSize: fontSizes,
};

Text.defaultProps = {
  inverted: false,
  variant: undefined,
  size: undefined,
  fontSize: 'medium',
  light: false,
};

export {
  Text,
  H1,
  H2,
  H3,
  H4,
  H5,
  Small,
  Tiny,
  Light,
  Regular,
  Medium,
  Bold,
  Black,
  SectionTitle,
  SmallestException,
  Test1,
  Display1,
  Display2,
  Display3,
  Display4,
  DisplayNumber,
};
