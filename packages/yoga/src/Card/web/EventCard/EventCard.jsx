import React from 'react';
import styled, { withTheme, css } from 'styled-components';
import { shape, string } from 'prop-types';
import { Time } from '@gympass/yoga-icons';

import Card from '../Card';
import { TextRenderer, Text } from '../../../Text/web/Text';

const Event = styled(Card).attrs({ hasShadow: false })`
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
        borders,
        colors,
        components: {
          card: { event, radii },
        },
      },
    },
  }) => css`
    padding: ${event.info.padding.top}px ${event.info.padding.right}px
      ${event.info.padding.bottom}px ${event.info.padding.left}px;

    border: ${borders.small}px solid ${colors.elements.lineAndBorders};
    border-top-right-radius: ${radii}px;
    border-bottom-right-radius: ${radii}px;

    ${TextRenderer}, ${Text.Body2} {
      display: -webkit-inline-box;
      overflow: hidden;

      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      text-overflow: ellipsis;
      text-overflow: -o-ellipsis-lastline;
    }

    ${TextRenderer} {
      height: ${event.info.name.height}px;
      margin-bottom: ${event.info.name.marginBottom}px;

      font-weight: ${event.info.name.fontWeight};
      font-size: ${event.info.name.fontSize}px;
    }

    ${Text.Body2} {
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
    theme: {
      yoga: {
        borders,
        components: {
          card: { event, radii },
        },
      },
    },
  }) => `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;

    width: 56px;
    background-color: ${event.date.backgroundColor};
    border: ${borders.small}px solid ${event.date.backgroundColor};
    border-top-left-radius: ${radii}px;
    border-bottom-left-radius: ${radii}px;
  `}
`;

const DayOfWeek = styled(Text.Body2)`
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

const Month = styled(Text.Body2)`
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
    <DateInfo>
      <DayOfWeek inverted>{date.dayOfWeek}</DayOfWeek>
      <Text.H5 bold inverted>
        {date.day}
      </Text.H5>
      <Month inverted>{date.month}</Month>
    </DateInfo>
    <EventInfo>
      <Text.Body1 as="h3" title={event.name}>
        {event.name}
      </Text.Body1>
      <Text.Body2 title={event.place}>{event.place}</Text.Body2>
      <EventTime>
        <Time fill={icon.fill} style={{ marginRight: 5 }} />
        <Text.Caption>{event.time}</Text.Caption>
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
};

EventCard.displayName = 'EventCard';

export default withTheme(EventCard);
