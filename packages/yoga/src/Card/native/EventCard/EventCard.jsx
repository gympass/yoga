import React from 'react';
import styled, { withTheme } from 'styled-components';
import { oneOf, shape, string } from 'prop-types';
import { Time } from '@gympass/yoga-icons';

import Card from '../Card';
import Text from '../../../Text';

const Event = styled(Card)`
  flex-direction: row;

  width: 280px;
  padding: 0;
`;

const DateInfo = styled.View`
  ${({
    variant,
    theme: {
      yoga: {
        components: {
          card: { event },
        },
        colors: { [variant]: color },
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
    margin-bottom: ${event.info.name.marginBottom}px;

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
  variant,
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
      <DateInfo variant={variant}>
        <DayOfWeek inverted>{date.dayOfWeek}</DayOfWeek>
        <Text.H3 inverted>{date.day}</Text.H3>
        <Month inverted>{date.month}</Month>
      </DateInfo>
      <EventInfo>
        <Name numberOfLines={1}>{event.name}</Name>
        <Place numberOfLines={1}>{event.place}</Place>
        <EventTime>
          <Time fill={icon.fill} style={{ marginRight: 5 }} />
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
  /** style the card following the theme (primary, secondary, tertiary) */
  variant: oneOf(['primary', 'secondary', 'tertiary']),
};

EventCard.defaultProps = {
  variant: 'secondary',
};

EventCard.displayName = 'EventCard';

export default withTheme(EventCard);
