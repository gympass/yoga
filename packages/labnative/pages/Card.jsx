import React from 'react';
import styled from 'styled-components';
import { Card } from '@gympass/yoga';
import { Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const StyledText = styled.Text`
  font-size: 20px;
  margin-top: 40px;
  margin-bottom: 10px;
  text-align: center;
`;

const CardPage = () => {
  return (
    <ScrollView
      style={{
        width: '100%',
        height: '100%',
        padding: 10,
      }}
    >
      <StyledText>Simple Card</StyledText>
      <Card>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 16,
            lineHeight: 20,
            color: '#41414a',
          }}
        >
          Hello ;)
        </Text>
        <Text>This is just a simple card</Text>
      </Card>
    </ScrollView>
  );
};

export default CardPage;
