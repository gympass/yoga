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

const { spacing, radii, colors, borders } = theme;

const Event = styled(Card).attrs({ hasShadow: false })`
  flex-direction: row;
  height: 104px;
  border-radius: ${radii.regular}px;
  padding: ${spacing.zero};
  width: 280px;
  margin-right: ${spacing.xxsmall};

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

  ${({ small, active }) =>
    small
      ? css`
          border: ${borders.small}px solid
            ${active ? colors.primary : colors.elements.lineAndBorders};
          border-radius: ${radii.regular}px;
        `
      : css`
          border: ${borders.small}px solid ${colors.primary};
          border-top-left-radius: ${radii.regular}px;
          border-bottom-left-radius: ${radii.regular}px;
        `}
`;

const EventInfo = styled(Box)`
  flex: 1;
  border-top-right-radius: ${radii.regular}px;
  border-bottom-right-radius: ${radii.regular}px;
  border: ${borders.small}px solid ${colors.elements.lineAndBorders};
`;

const Top = styled(Box)`
  justify-content: center;
  align-items: center;
  height: ${spacing.small}px;
`;

const Name = styled(Text.Body2)`
  margin-bottom: ${spacing.xxxsmall}px;
`;

const Place = styled(Text.Caption)`
  width: 180px;
  margin-bottom: ${spacing.xsmall}px;
`;

const Day = styled(Text.H5).attrs({ bold: true })`
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

const SmallCard = ({
  date: { month, day, dayOfWeek },
  active = false,
  event = undefined,
  onPress = undefined,
}) => (
  <DateInfo small active={active} pv="medium" bg={active ? 'primary' : 'white'}>
    <Top>
      {onPress ? (
        <Indicator
          borderRadius="small"
          bgColor={getIndicatorColor(active, Boolean(event))}
        />
      ) : (
        <Text.Caption variant={active ? 'white' : 'deep'}>{month}</Text.Caption>
      )}
    </Top>
    <Day variant={active ? 'white' : 'secondary'}>{day}</Day>
    <Text.Caption variant={active ? 'white' : 'deep'}>
      {String(dayOfWeek).toUpperCase()}
    </Text.Caption>
  </DateInfo>
);

const FullCard = withTheme(
  ({
    event,
    date: { month, day, dayOfWeek },
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
  }) => (
    <>
      <DateInfo bg="primary">
        <Top>
          <Text.Caption inverted>{month}</Text.Caption>
        </Top>
        <Day inverted>{day}</Day>
        <Text.Caption inverted>{String(dayOfWeek).toUpperCase()}</Text.Caption>
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
            <Text.Caption>{event.time}</Text.Caption>
          </EventTime>
          {!!link && (
            <ButtonLink onPress={onLinkPress} small secondary>
              {link}
            </ButtonLink>
          )}
        </Row>
      </EventInfo>
    </>
  ),
);

const EventCard = props => {
  const defaultValues = {
    small: false,
    active: false,
    event: undefined,
    link: '',
    onLinkPress: undefined,
    onPress: undefined,
  };

  const { onPress, small, ...rest } = { ...defaultValues, ...props };

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
  link: string,
  onLinkPress: func,
  onPress: func,
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

FullCard.propTypes = EventCard.propTypes;

EventCard.displayName = 'EventCard';

export default EventCard;
