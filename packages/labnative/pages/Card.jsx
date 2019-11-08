import React from 'react';
import styled from 'styled-components';
import { Card } from '@gympass/yoga';
import { Text, View } from 'react-native';
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

      <View
        style={{
          display: 'flex',
          width: '100%',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
        }}
      >
        <Card.Plan
          plan={{
            name: 'Basic',
            price: 'U$ 19.90',
            period: 'month',
            gyms: '13,290',
          }}
          ribbon={{ label: 'Choose' }}
          style={{ width: 170 }}
        ></Card.Plan>
        <Card.Plan
          selected
          plan={{
            name: 'Platinum',
            price: 'U$ 29.90',
            period: 'month',
            gyms: '1,239',
          }}
          style={{ width: 170 }}
        ></Card.Plan>
      </View>
    </ScrollView>
  );
};

export default CardPage;
