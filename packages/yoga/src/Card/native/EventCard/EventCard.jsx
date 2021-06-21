import React from 'react';
import styled, { withTheme } from 'styled-components';
import { shape, string, bool, oneOfType } from 'prop-types';
import { Time } from '@gympass/yoga-icons';

import Card from '../Card';
import Text from '../../../Text';
import Box from '../../../Box';

const Event = styled(Card)`
  ${({
    theme: {
      yoga: {
        components: {
          card: { event },
        },
      },
    },
    small,
  }) => `
  flex-direction: row;
  width: ${small ? 56 : 280};
  height: 104px;
  border-radius: ${event.radii};
  padding: 0;
  `}
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
    active,
  }) => `
    justify-content: center;
    align-items: center;

    width: 56px;
    padding-top: 20px;
    padding-bottom: 20px;
    border-top-left-radius: ${event.date.radius}px;
    border-bottom-left-radius: ${event.date.radius}px;
    background-color: ${
      active
        ? event.date.backgroundColor.active
        : event.date.backgroundColor.default
    };

  `}
`;

const Top = styled.View`
  height: 16px;
  justify-content: center;
  align-items: center;
  margin-bottom: 2px;
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

const Month = styled(Text.Tiny)`
  text-transform: uppercase;
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
  `}
`;

const Place = styled(Text.Tiny)`
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
  `}
`;

const getIndicatorColor = (active, hasEvent, backgroundColor) => {
  if (active) return backgroundColor.active;

  return hasEvent ? backgroundColor.default : backgroundColor.disabled;
};

const Indicator = styled(Box)`
  ${({
    theme: {
      yoga: {
        components: {
          card: { event },
        },
      },
    },
    active,
    event: hasEvent,
  }) => `
    width: ${event.indicator.size}px;
    height: ${event.indicator.size}px;
    background-color: ${getIndicatorColor(
      active,
      hasEvent,
      event.indicator.backgroundColor,
    )};
  `}
`;

const EventTime = styled.View`
  flex-direction: row;
  align-items: center;
`;

const DateInfoSmall = ({ date, active, event, onPress }) => {
  return (
    <DateInfo active={active} small>
      <Top>
        {onPress ? (
          <Indicator borderRadius="small" active={active} event={event} />
        ) : (
          <Text.Tiny variant={active ? 'white' : 'deep'}>
            {date.dayOfWeek}
          </Text.Tiny>
        )}
      </Top>
      <Text.H5 variant={active ? 'white' : 'secondary'}>{date.day}</Text.H5>
      <Month variant={active ? 'white' : 'deep'}>{date.month}</Month>
    </DateInfo>
  );
};

const DateInfoDefault = ({ date }) => {
  return (
    <DateInfo active>
      <Text.Tiny inverted>{date.dayOfWeek}</Text.Tiny>
      <Text.H5 inverted>{date.day}</Text.H5>
      <Month inverted>{date.month}</Month>
    </DateInfo>
  );
};

const EventCard = ({
  event,
  date,
  small,
  active,
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
    <Event {...rest} small={small}>
      {small ? (
        <DateInfoSmall date={date} event={event} active={active} {...rest} />
      ) : (
        <DateInfoDefault date={date} />
      )}
      {!small && (
        <EventInfo>
          <Name numberOfLines={1} size="small">
            {event.name}
          </Name>
          <Place variant="deep" numberOfLines={1}>
            {event.place}
          </Place>
          <EventTime>
            <Time fill={icon.fill} style={{ marginRight: 5 }} />
            <Text.Tiny>{event.time}</Text.Tiny>
          </EventTime>
        </EventInfo>
      )}
    </Event>
  );
};

EventCard.propTypes = {
  /** event information: { name (string), place (string), time (string) } */
  event: oneOfType([
    shape({
      name: string,
      place: string,
      time: string,
    }),
    bool,
  ]),
  /** date information: { day (string), dayOfWeek (string), month (string) } */
  date: shape({
    day: string,
    dayOfWeek: string,
    month: string,
  }).isRequired,
  small: bool,
  active: bool,
};

EventCard.defaultProps = {
  small: false,
  active: false,
  event: undefined,
};

DateInfoDefault.propTypes = {
  date: shape({
    day: string,
    dayOfWeek: string,
    month: string,
  }).isRequired,
};

DateInfoSmall.propTypes = EventCard.propTypes;

EventCard.displayName = 'EventCard';

export default withTheme(EventCard);
