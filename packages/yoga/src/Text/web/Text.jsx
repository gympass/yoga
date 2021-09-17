import React from 'react';
import styled from 'styled-components';
import { oneOf, bool, number } from 'prop-types';
import { system } from '@gympass/yoga-system';
import textStyle from '../textStyle.web';

const styledText = (type, element = false) => (element
  ? styled[type]
  : styled.p)`
  margin: 0;
  padding: 0;

  ${textStyle(type)}
  ${system}
`;

const H1 = styledText('h1', true);
H1.displayName = 'Text.H1';

const H2 = styledText('h2', true);
H2.displayName = 'Text.H2';

const H3 = styledText('h3', true);
H3.displayName = 'Text.H3';

const H4 = styledText('h4', true);
H4.displayName = 'Text.H4';

const H5 = styledText('h5', true);
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

const TextRenderer = styledText('p');

const Text = props => <TextRenderer {...props} />;
Text.displayName = 'Text';

Text.propTypes = {
  inverted: bool,
  numberOfLines: number,
  /** style the text following the theme */
  variant: oneOf([
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
  /** set the font-size following the theme */
  size: oneOf([
    'xxsmall',
    'xsmall',
    'small',
    'medium',
    'large',
    'xlarge',
    'xxlarge',
    'xxxlarge',
    'huge',
  ]),
  /** set the font-weight to regular */
  light: bool,
};

Text.defaultProps = {
  inverted: false,
  variant: undefined,
  size: 'medium',
  numberOfLines: undefined,
  light: false,
};

export {
  TextRenderer,
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
};
