import React from 'react';
import styled from 'styled-components';
import { Rating } from '@gympass/yoga';
import Svg, { Circle } from 'react-native-svg/lib/commonjs';

import { DocTitle } from '../components';

const ScrollView = styled.ScrollView`
  width: 100%;
  margin-bottom: 50px;
  padding: 10px;
`;

const CircleIcon = props => (
  <Svg {...props}>
    <Circle cx={6} cy={7} r={5} />
  </Svg>
);

const ButtonPage = () => (
  <ScrollView
    style={{ width: '100%' }}
    contentContainerStyle={{
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <DocTitle>Rating</DocTitle>

    <Rating value={1} />
    <Rating value={1.5} />
    <Rating value={2} />
    <Rating value={2.5} />
    <Rating value={3} />
    <Rating value={3.5} />
    <Rating value={4} />
    <Rating value={4.5} />

    <DocTitle>Custom Icon</DocTitle>

    <Rating icon={CircleIcon} value={1} />
    <Rating icon={CircleIcon} value={1.5} />
    <Rating icon={CircleIcon} value={2} />
    <Rating icon={CircleIcon} value={2.5} />
    <Rating icon={CircleIcon} value={3} />
    <Rating icon={CircleIcon} value={3.5} />
    <Rating icon={CircleIcon} value={4} />
    <Rating icon={CircleIcon} value={4.5} />
  </ScrollView>
);

export default ButtonPage;
