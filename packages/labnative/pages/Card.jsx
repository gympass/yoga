import React from 'react';
import styled from 'styled-components';
import { Card, PlanCard, EventCard, Button } from '@gympass/yoga';
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
      <StyledText>Simple Card</StyledText>

      <ScrollView
        horizontal
        contentContainerStyle={{
          padding: 10,
        }}
      >
        <Card
          style={{
            width: 250,
            marginRight: 16,
          }}
        >
          <View>
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
          </View>
          <Text>This is just a simple card</Text>
        </Card>
        <Card
          ribbon={{
            text: 'Label',
          }}
          style={{
            width: 250,
            marginRight: 16,
          }}
        >
          <View>
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
          </View>
          <Text>This is just a simple card</Text>
        </Card>

        <Card
          ribbon={{
            text: 'Label',
            variant: 'tertiary',
          }}
          style={{
            width: 250,
            marginRight: 16,
          }}
        >
          <View>
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
          </View>
          <Text>This is just a simple card</Text>
        </Card>
      </ScrollView>

      <StyledText>Plan Card</StyledText>
      <ScrollView
        horizontal
        contentContainerStyle={{
          padding: 10,
          paddingBottom: 20,
        }}
      >
        <PlanCard
          style={{
            width: 250,
            marginRight: 16,
          }}
          ribbon={{
            text: 'Tag Label',
          }}
        >
          <PlanCard.Content
            title="Gympass Black for employees with Buddha Spa + Reebook included"
            price="U$ 99.90"
            period="/month"
          />
          <PlanCard.Actions>
            <Button.Link variant="secondary">See gyms included</Button.Link>
          </PlanCard.Actions>
        </PlanCard>
        <PlanCard
          style={{
            width: 250,
            marginRight: 16,
          }}
          ribbon={{
            text: 'Medium Label',
            variant: 'secondary',
          }}
        >
          <PlanCard.Content
            title="Gympass Black for employees with Buddha Spa + Reebook included"
            price="U$ 129.90"
            period="/month"
          />
          <PlanCard.Actions>
            <Button.Link variant="secondary">See gyms included</Button.Link>
          </PlanCard.Actions>
        </PlanCard>

        <PlanCard
          style={{
            width: 250,
            marginRight: 16,
          }}
          ribbon={{
            text: 'Super large label in french',
          }}
          variant="secondary"
        >
          <PlanCard.Content
            title="Gympass Black for employees with Buddha Spa + Reebook included"
            price="U$ 299.90"
            period="/month"
          />
          <PlanCard.Actions>
            <Button.Link inverted>See gyms included</Button.Link>
          </PlanCard.Actions>
        </PlanCard>
      </ScrollView>

      <StyledText>Event Card</StyledText>
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingBottom: 100,
        }}
      >
        <EventCard
          event={{
            name: 'Yoga Class',
            place: 'Gympass',
            time: '19 am',
          }}
          date={{
            day: '19',
            weekday: 'thu',
            month: 'dez',
          }}
        />
      </ScrollView>
    </ScrollView>
  );
};

export default CardPage;
