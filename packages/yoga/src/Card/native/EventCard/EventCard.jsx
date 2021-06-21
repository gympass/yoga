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
      yoga: { radii },
    },
    small,
  }) => `
  flex-direction: row;
  width: ${small ? 56 : 280};
  height: 104px;
  border-radius: ${radii.regular};
  padding: 0;
  `}
`;

const DateInfo = styled.View`
  ${({
    theme: {
      yoga: { colors },
    },
    active,
  }) => `
    justify-content: center;
    align-items: center;

    width: 56px;
    padding: 20px 0;
    background-color: ${active ? colors.primary : colors.white};
  `}
`;

const EventInfo = styled(Box)`
  flex: 1;
`;

const Top = styled.View`
  height: 16px;
  justify-content: center;
  align-items: center;
  margin-bottom: 2px;
`;

const Name = styled(Text.Medium)`
  ${({
    theme: {
      yoga: { spacing, lineHeights },
    },
  }) => `
    margin-bottom: ${spacing.xxxsmall}px;
    line-height: ${lineHeights.small}
  `}
`;

const Place = styled(Text.Tiny)`
  ${({
    theme: {
      yoga: { spacing },
    },
  }) => `
    width: 180px;
    margin-bottom: ${spacing.xsmall}px;
  `}
`;

const getIndicatorColor = (active, hasEvent, colors) => {
  if (active) return colors.white;

  return hasEvent ? colors.primary : colors.light;
};

const Indicator = styled(Box)`
  ${({
    theme: {
      yoga: {
        colors,
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
    background-color: ${getIndicatorColor(active, hasEvent, colors)};
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
      <Text.Tiny variant={active ? 'white' : 'deep'}>
        {String(date.month).toUpperCase()}
      </Text.Tiny>
    </DateInfo>
  );
};

const DateInfoDefault = ({ date }) => {
  return (
    <DateInfo active>
      <Text.Tiny inverted>{date.dayOfWeek}</Text.Tiny>
      <Text.H5 inverted>{date.day}</Text.H5>
      <Text.Tiny inverted>{String(date.month).toUpperCase()}</Text.Tiny>
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
        <EventInfo p="small" pl="xsmall">
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
