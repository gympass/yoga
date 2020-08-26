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
  overflow: hidden;
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
    padding: ${event.info.padding.top}px ${event.info.padding.right}px
      ${event.info.padding.bottom}px ${event.info.padding.left}px;

    ${Text}, ${Text.Small} {
      display: -webkit-inline-box;
      overflow: hidden;

      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      text-overflow: ellipsis;
      text-overflow: -o-ellipsis-lastline;
    }

    ${Text} {
      height: ${event.info.name.height}px;
      margin-bottom: ${event.info.name.marginBottom}px;

      font-weight: ${event.info.name.fontWeight};
    }

    ${Text.Small} {
      height: ${event.info.place.height}px;
      margin-bottom: ${event.info.place.marginBottom}px;

      color: ${event.info.place.color};
      font-weight: ${event.info.name.fontWeight};
    }
  `}
`;

const EventTime = styled.div`
  display: flex;
  align-items: center;
`;

const DateInfo = styled.div`
  ${({
    variant,
    theme: {
      yoga: {
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
    background-color: ${color[2]};
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
      <DayOfWeek inverted>{date.dayOfWeek}</DayOfWeek>
      <Text.H5 inverted>{date.day}</Text.H5>
      <Month inverted>{date.month}</Month>
    </DateInfo>
    <EventInfo>
      <Text as="h3" title={event.name}>
        {event.name}
      </Text>
      <Text.Small title={event.place}>{event.place}</Text.Small>
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
