import React from 'react';
import styled from 'styled-components';
import { Rating } from '@gympass/yoga';
import Svg, { Circle } from 'react-native-svg/lib/commonjs';

const ScrollView = styled.ScrollView`
  margin-bottom: 50px;
  padding: 10px;
  width: 100%;
`;

const StyledText = styled.Text`
  font-size: 20px;
  margin-top: 20px;
  margin-bottom: 10px;
  text-align: center;
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
    <StyledText>Rating</StyledText>

    <Rating value={1} />
    <Rating value={1.5} />
    <Rating value={2} />
    <Rating value={2.5} />
    <Rating value={3} />
    <Rating value={3.5} />
    <Rating value={4} />
    <Rating value={4.5} />

    <StyledText>Custom Icon</StyledText>

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
