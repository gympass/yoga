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
        padding: 40,
      }}
    >
      <StyledText>Card simple</StyledText>
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

      <StyledText>Card for Plans</StyledText>

      <Card.Plan
        selected
        plan={{
          name: 'Basic Premium of Master',
          price: 'R$ 29,90',
          period: 'month',
          gyms: '1.290',
        }}
        style={{ width: 180, marginBottom: 20 }}
      />
      <Card.Plan
        plan={{
          name: 'Basic Premium',
          price: 'R$ 29,90',
          period: 'month',
          gyms: '1.290',
        }}
        ribbon={{ label: 'Choose' }}
        style={{ width: 180, marginBottom: 20 }}
      />
      <Card.Plan
        plan={{
          name: 'Basic',
          price: 'R$ 29,90',
          period: 'month',
          gyms: '1.290',
        }}
        ribbon={{ label: 'Upgrade', secondary: true }}
        style={{ width: 180 }}
      />
    </ScrollView>
  );
};

export default CardPage;
