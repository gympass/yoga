import React from 'react';
import styled, { withTheme, css } from 'styled-components';
import { oneOf, shape, string } from 'prop-types';
import { Clock } from '@gympass/yoga-icons';

import Card from '../Card';
import Text from '../../../Text';

const Event = styled(Card)`
  display: flex;
  flex-direction: row;

  width: 100%;
  padding: 0;
`;

const EventInfo = styled.div`
  ${({
    theme: {
      yoga: {
        components: {
          card: { event },
        },
      },
    },
  }) => css`
    padding: ${event.info.padding}px;

    ${Text.H4} {
      padding-bottom: ${event.info.name.padding.bottom}px;

      font-weight: ${event.info.name.fontWeight};
    }

    ${Text.Small} {
      padding-bottom: ${event.info.place.padding.bottom}px;

      color: ${event.info.place.color};
    }
  `}
`;

const EventTime = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const DateInfo = styled.div`
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
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;

    width: 56px;

    border-top-left-radius: ${event.date.radius}px;
    border-bottom-left-radius: ${event.date.radius}px;
    background-color: ${color[2]};
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
    padding-bottom: ${event.date.weekday.padding.bottom}px;

    font-weight: ${event.date.weekday.fontWeight};
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
}) => (
  <Event {...rest}>
    <DateInfo variant={variant}>
      <Weekday inverted>{date.weekday}</Weekday>
      <Text.H3 inverted>{date.day}</Text.H3>
      <Month inverted>{date.month}</Month>
    </DateInfo>
    <EventInfo>
      <Text.H4>{event.name}</Text.H4>
      <Text.Small>{event.place}</Text.Small>
      <EventTime>
        <Clock fill={icon.fill} style={{ marginRight: 5 }} />
        <Text.Tiny>{event.time}</Text.Tiny>
      </EventTime>
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

export default withTheme(EventCard);
