import React from 'react';
import styled from 'styled-components';
import { Rating } from '@gympass/yoga';

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

const ButtonPage = () => (
  <ScrollView>
    <StyledText>Rating</StyledText>

    <Rating value={2.5} />
  </ScrollView>
);

export default ButtonPage;
