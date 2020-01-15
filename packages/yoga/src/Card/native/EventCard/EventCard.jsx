import React from 'react';
import styled from 'styled-components';
import { oneOf, shape, string } from 'prop-types';
import { View } from 'react-native';
import { Clock } from '@gympass/yoga-icons';

import Card from '../Card';
import Text from '../../../Text';

const Event = styled(Card)`
  flex-direction: row;

  width: 280px;
  height: 104px;
  padding: 0;
`;

const DateInfo = styled(View)`
  ${({
    variant,
    theme: {
      yoga: {
        components: {
          card: { event },
        },
        colors: { [variant]: color = {} },
      },
    },
  }) => `
    justify-content: center;
    align-items: center;

    width: 56px;

    border-top-left-radius: ${event.date.radius}px;
    border-bottom-left-radius: ${event.date.radius}px;
    background-color: ${color[2]};
  `}
`;

const EventInfo = styled(View)`
  ${({
    theme: {
      yoga: {
        components: {
          card: { event },
        },
      },
    },
  }) => `
    padding: ${event.info.padding}px;
  `}
`;

const Weekday = styled(Text.Small)`
  ${({
    theme: {
      yoga: {
        components: {
          card: { event },
        },
      },
    },
  }) => `
    padding-bottom: ${event.date.dayOfWeek.padding.bottom}px;

    font-weight: ${event.date.dayOfWeek.fontWeight};
  `}
`;

const Month = styled(Text.Small)`
  ${({
    theme: {
      yoga: {
        components: {
          card: { event },
        },
      },
    },
  }) => `
    font-weight: ${event.date.month.fontWeight};
  `}
`;

const Name = styled(Text.H4)`
  ${({
    theme: {
      yoga: {
        components: {
          card: { event },
        },
      },
    },
  }) => `
    padding-bottom: ${event.info.name.padding.bottom}px;

    font-weight: ${event.info.name.fontWeight};
  `}
`;

const Place = styled(Text.Small)`
  ${({
    theme: {
      yoga: {
        components: {
          card: { event },
        },
      },
    },
  }) => `
    padding-bottom: ${event.info.place.padding.bottom}px;

    color: ${event.info.place.color};
  `}
`;

const EventCard = ({ event, date, variant, ...rest }) => (
  <Event {...rest}>
    <DateInfo variant={variant}>
      <Weekday inverted>{date.weekday}</Weekday>
      <Text.H3 inverted>{date.day}</Text.H3>
      <Month inverted>{date.month}</Month>
    </DateInfo>
    <EventInfo>
      <Name>{event.name}</Name>
      <Place>{event.place}</Place>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Clock style={{ marginRight: 5 }} />
        <Text.Tiny>{event.time}</Text.Tiny>
      </View>
    </EventInfo>
  </Event>
);

EventCard.propTypes = {
  /** event information: { name (string), place (string), time (string) } */
  event: shape({
    name: string,
    place: string,
    time: string,
  }).isRequired,
  /** date information: { day (string), weekday (string), month (string) } */
  date: shape({
    day: string,
    weekday: string,
    month: string,
  }).isRequired,
  /** style the card following the theme (primary, secondary, tertiary) */
  variant: oneOf(['primary', 'secondary', 'tertiary']),
};

EventCard.defaultProps = {
  variant: 'secondary',
};

EventCard.displayName = 'EventCard';

export default EventCard;
