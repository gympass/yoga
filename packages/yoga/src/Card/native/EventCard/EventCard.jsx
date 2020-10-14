import React from 'react';
import styled, { withTheme } from 'styled-components';
import { shape, string } from 'prop-types';
import { Clock } from '@gympass/yoga-icons';

import Card from '../Card';
import Text from '../../../Text';

const Event = styled(Card)`
  flex-direction: row;

  width: 280px;
  padding: 0;
`;

const DateInfo = styled.View`
  ${({
    theme: {
      yoga: {
        components: {
          card: { event },
        },
      },
    },
  }) => `
    justify-content: center;
    align-items: center;

    width: 56px;

    border-top-left-radius: ${event.date.radius}px;
    border-bottom-left-radius: ${event.date.radius}px;
    background-color: ${event.date.backgroundColor};
  `}
`;

const EventInfo = styled.View`
  ${({
    theme: {
      yoga: {
        components: {
          card: { event },
        },
      },
    },
  }) => `
    flex: 1;
    padding: ${event.info.padding.top}px ${event.info.padding.right}px
      ${event.info.padding.bottom}px ${event.info.padding.left}px;
  `}
`;

const DayOfWeek = styled(Text.Small)`
  ${({
    theme: {
      yoga: {
        components: {
          card: { event },
        },
      },
    },
  }) => `
    margin-bottom: ${event.date.dayOfWeek.marginBottom}px;

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

const Name = styled(Text.Medium)`
  ${({
    theme: {
      yoga: {
        components: {
          card: { event },
        },
      },
    },
  }) => `
    margin-bottom: ${event.info.name.marginBottom}px;

    font-size: ${event.info.name.fontSize}px;
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
    width: 180px;
    margin-bottom: ${event.info.place.marginBottom}px;

    color: ${event.info.place.color};
  `}
`;

const EventTime = styled.View`
  flex-direction: row;
  align-items: center;
`;

const EventCard = ({
  event,
  date,
  theme: {
    yoga: {
      components: {
        card: {
          event: { icon },
        },
      },
    },
  },
  ...rest
}) => {
  return (
    <Event {...rest}>
      <DateInfo>
        <DayOfWeek inverted>{date.dayOfWeek}</DayOfWeek>
        <Text.H5 inverted>{date.day}</Text.H5>
        <Month inverted>{date.month}</Month>
      </DateInfo>
      <EventInfo>
        <Name numberOfLines={1}>{event.name}</Name>
        <Place numberOfLines={1}>{event.place}</Place>
        <EventTime>
          <Clock fill={icon.fill} style={{ marginRight: 5 }} />
          <Text.Tiny>{event.time}</Text.Tiny>
        </EventTime>
      </EventInfo>
    </Event>
  );
};

EventCard.propTypes = {
  /** event information: { name (string), place (string), time (string) } */
  event: shape({
    name: string,
    place: string,
    time: string,
  }).isRequired,
  /** date information: { day (string), dayOfWeek (string), month (string) } */
  date: shape({
    day: string,
    dayOfWeek: string,
    month: string,
  }).isRequired,
};

EventCard.displayName = 'EventCard';

export default withTheme(EventCard);
