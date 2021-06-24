import React from 'react';
import styled, { withTheme, css } from 'styled-components';
import { shape, string, bool, oneOfType, func } from 'prop-types';
import { Time } from '@gympass/yoga-icons';
import { TouchableWithoutFeedback } from 'react-native';
import theme from '../../../Theme/helpers/themeReader';
import Card from '../Card';
import Text from '../../../Text';
import Box from '../../../Box';
import Button from '../../../Button';

const { spacing, radii, lineHeights } = theme;

const Event = styled(Card)`
  flex-direction: row;
  height: 104px;
  border-radius: ${radii.regular}px;
  padding: ${spacing.zero};
  width: 280px;
  ${({ small }) =>
    small
      ? css`
          width: ${spacing.xxxlarge}px;
        `
      : ''}
`;

const DateInfo = styled(Box)`
  justify-content: center;
  align-items: center;
  width: 56px;
`;

const EventInfo = styled(Box)`
  flex: 1;
`;

const Top = styled(Box)`
  justify-content: center;
  align-items: center;
  height: ${spacing.small}px;
`;

const Name = styled(Text.Medium)`
  margin-bottom: ${spacing.xxxsmall}px;
  line-height: ${lineHeights.small}px;
`;

const Place = styled(Text.Tiny)`
  width: 180px;
  margin-bottom: ${spacing.xsmall}px;
`;

const Day = styled(Text.H5)`
  margin-top: ${spacing.xxxsmall}px;
  margin-bottom: ${spacing.xxxsmall}px;
`;

const getIndicatorColor = (active, event) => {
  if (active) return 'white';
  return event ? 'primary' : 'light';
};

const Indicator = styled(Box)`
  width: ${spacing.xxsmall}px;
  height: ${spacing.xxsmall}px;
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

const ButtonLink = styled(Button.Link)`
  align-self: flex-end;
`;

const SmallCard = ({ date, active, event, onPress }) => (
  <DateInfo active={active} small pv="medium" bg={active ? 'primary' : 'white'}>
    <Top>
      {onPress ? (
        <Indicator
          borderRadius="small"
          bgColor={getIndicatorColor(active, Boolean(event))}
        />
      ) : (
        <Text.Tiny variant={active ? 'white' : 'deep'}>
          {date.dayOfWeek}
        </Text.Tiny>
      )}
    </Top>
    <Day variant={active ? 'white' : 'secondary'}>{date.day}</Day>
    <Text.Tiny variant={active ? 'white' : 'deep'}>
      {String(date.month).toUpperCase()}
    </Text.Tiny>
  </DateInfo>
);

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
        <Top>
          <Text.Tiny inverted>{date.dayOfWeek}</Text.Tiny>
        </Top>
        <Day inverted>{date.day}</Day>
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
            <ButtonLink onPress={onLinkPress} small>
              {link}
            </ButtonLink>
          )}
        </Row>
      </EventInfo>
    </>
  );
};

const EventCard = ({ onPress, small, ...rest }) => (
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
  link: string,
  onLinkPress: func,
  onPress: func,
};

EventCard.defaultProps = {
  small: false,
  active: false,
  event: undefined,
  link: '',
  onLinkPress: undefined,
  onPress: undefined,
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
