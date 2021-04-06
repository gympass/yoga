/* eslint-disable no-undef, no-alert */
import React from 'react';
import { Card, PlanCard, EventCard, GymCard, Button } from '@gympass/yoga';
import { MapPin, Smartphone, Star } from '@gympass/yoga-icons';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { DocTitle } from '../components';

const CardPage = () => {
  return (
    <ScrollView
      style={{
        width: '100%',
        height: '100%',
        padding: 10,
      }}
      contentContainerStyle={{
        paddingBottom: 100,
      }}
    >
      <DocTitle>Simple Card</DocTitle>

      <ScrollView horizontal style={{ height: 120 }}>
        <Card
          style={{
            width: 250,
            marginRight: 16,
            marginLeft: 8,
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
            marginLeft: 8,
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
            variant: 'secondary',
          }}
          style={{
            width: 250,
            marginRight: 16,
            marginLeft: 8,
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

      <DocTitle>Plan Card</DocTitle>
      <ScrollView horizontal style={{ height: 700 }}>
        <PlanCard style={{ marginLeft: 10 }}>
          <PlanCard.Tag variant="informative">Recommended for you</PlanCard.Tag>
          <PlanCard.Content
            title="Basic"
            currency="$"
            price="99.90"
            period="/month"
          >
            <PlanCard.Subtitle>Get access to</PlanCard.Subtitle>
            <PlanCard.List>
              <PlanCard.ListItem icon={MapPin} text="2.900 gyms and studios" />
              <PlanCard.ListItem icon={Smartphone} text="24 wellness app" />
              <PlanCard.ListItem icon={Star} text="1-on-1 training sessions" />
            </PlanCard.List>
          </PlanCard.Content>
          <PlanCard.Actions>
            <Button small full>
              Select this plan
            </Button>
          </PlanCard.Actions>
        </PlanCard>
      </ScrollView>

      <DocTitle>Event Card</DocTitle>
      <ScrollView horizontal style={{ height: 140 }}>
        <EventCard
          style={{ marginRight: 8, marginLeft: 8 }}
          event={{
            name: 'Yoga Class in Vila Olimpia',
            place: 'Gympass - Live the Mission',
            time: '19 am',
          }}
          date={{
            day: '19',
            dayOfWeek: 'thu',
            month: 'dez',
          }}
        />
        <EventCard
          style={{ marginRight: 8, marginLeft: 8 }}
          event={{
            name:
              'Yoga Class Long title dshauio dhasuio dhasiuo dhasuiod hasiuo dhasoiu dhasoiud ho',
            place: 'Gympass',
            time: '19 am',
          }}
          date={{
            day: '19',
            dayOfWeek: 'thu',
            month: 'dez',
          }}
        />
      </ScrollView>

      <DocTitle>Check-in Card</DocTitle>
      <ScrollView horizontal style={{ height: 240 }}>
        <GymCard.CheckIn
          style={{ marginRight: 16, marginLeft: 8 }}
          avatar={{
            uri:
              'data:image/png;base64,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',
          }}
          distance="1 m"
          rating={5}
          name="Gympass"
          address="R. Casa do Ator, 919 - Vila Olímpia, São Paulo - SP, 04546-003"
        />
        <GymCard.CheckIn
          style={{ marginLeft: 8 }}
          distance="234 m"
          rating={0.5}
          name="Bertonças Creative Studio Lab"
          address="Avenida Luis Carlos Berrini, nº 550 - Berrini - São Paulo - SP"
        />
      </ScrollView>
    </ScrollView>
  );
};

export default CardPage;
