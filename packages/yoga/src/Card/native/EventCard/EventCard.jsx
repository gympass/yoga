import React from 'react';
import styled, { withTheme } from 'styled-components';
import { shape, string, bool, oneOfType, func } from 'prop-types';
import { Time } from '@gympass/yoga-icons';
import { TouchableWithoutFeedback } from 'react-native';

import Card from '../Card';
import Text from '../../../Text';
import Box from '../../../Box';

const Event = styled(Card)`
  ${({ theme: { yoga }, small }) => `
  flex-direction: row;
  width: ${small ? yoga.spacing.xxxlarge : 280}px;
  height: 104px;
  border-radius: ${yoga.radii.regular};
  padding: ${yoga.spacing.zero};
  `}
`;

const DateInfo = styled(Box)`
  ${({ theme: { yoga } }) => `
  justify-content: center;
  align-items: center;
  width: ${yoga.spacing.xxxlarge}px;
  `}
`;

const EventInfo = styled(Box)`
  flex: 1;
`;

const Top = styled(Box)`
  ${({ theme: { yoga } }) => `
  justify-content: center;
  align-items: center;
  height: ${yoga.spacing.small}px;
  margin-bottom: ${yoga.spacing.xxxsmall / 2}px;
  `}
`;

const Name = styled(Text.Medium)`
  ${({ theme: { yoga } }) => `
    margin-bottom: ${yoga.spacing.xxxsmall}px;
    line-height: ${yoga.lineHeights.small}
  `}
`;

const Place = styled(Text.Tiny)`
  ${({ theme: { yoga } }) => `
    width: 180px;
    margin-bottom: ${yoga.spacing.xsmall}px;
  `}
`;

const getIndicatorColor = (active, hasEvent, colors) => {
  if (active) return colors.white;

  return hasEvent ? colors.primary : colors.light;
};

const Indicator = styled(Box)`
  ${({ theme: { yoga }, active, event: hasEvent }) => `
    width: ${yoga.spacing.xxsmall}px;
    height: ${yoga.spacing.xxsmall}px;
    background-color: ${getIndicatorColor(active, hasEvent, yoga.colors)};
  `}
`;

const Row = styled(Box)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const EventTime = styled(Box)`
  flex-direction: row;
  align-items: center;
`;

const LinkContainer = styled.TouchableWithoutFeedback`
  align-self: flex-end;
`;

const SmallCard = ({ date, active, event, onPress }) => {
  return (
    <DateInfo
      active={active}
      small
      pv="medium"
      bg={active ? 'primary' : 'white'}
    >
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

const FullCard = ({
  event,
  date,
  link,
  onLinkPress,
  theme: {
    yoga: {
      components: {
        card: {
          event: { icon },
        },
      },
    },
  },
}) => {
  return (
    <>
      <DateInfo bg="primary">
        <Text.Tiny inverted>{date.dayOfWeek}</Text.Tiny>
        <Text.H5 inverted>{date.day}</Text.H5>
        <Text.Tiny inverted>{String(date.month).toUpperCase()}</Text.Tiny>
      </DateInfo>
      <EventInfo p="small" pl="xsmall">
        <Name numberOfLines={1} size="small">
          {event.name}
        </Name>
        <Place variant="deep" numberOfLines={1}>
          {event.place}
        </Place>
        <Row>
          <EventTime>
            <Time fill={icon.fill} style={{ marginRight: 5 }} />
            <Text.Tiny>{event.time}</Text.Tiny>
          </EventTime>
          {!!link && (
            <LinkContainer onPress={onLinkPress}>
              <Text.Medium size="xsmall" variant="primary">
                {link}
              </Text.Medium>
            </LinkContainer>
          )}
        </Row>
      </EventInfo>
    </>
  );
};

const EventCard = ({ onPress, small, ...rest }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Event small={small} {...rest}>
        {small ? (
          <SmallCard onPress={onPress} {...rest} />
        ) : (
          <FullCard {...rest} />
        )}
      </Event>
    </TouchableWithoutFeedback>
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

SmallCard.propTypes = {
  date: shape({
    day: string,
    dayOfWeek: string,
    month: string,
  }).isRequired,
  active: bool,
  event: oneOfType([
    shape({
      name: string,
      place: string,
      time: string,
    }),
    bool,
  ]),
  onPress: func,
};

SmallCard.defaultProps = {
  active: false,
  event: undefined,
  onPress: undefined,
};

FullCard.propTypes = EventCard.propTypes;

EventCard.displayName = 'EventCard';

export default withTheme(EventCard);
