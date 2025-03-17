import React from 'react';
import styled, { withTheme } from 'styled-components';
import { ImagePropTypes } from 'deprecated-react-native-prop-types';
import { string, number } from 'prop-types';
import { Building } from '@gympass/yoga-icons';

import Card from '../../Card';
import Rating from '../../../../Rating';
import Text from '../../../../Text';

import Header from './Header';
import { Avatar, Placeholder } from './Avatar';
import Content from './Content';

const Wrapper = styled(Card)`
  width: 160px;
  min-height: 204px;
`;

const Title = styled(Text)`
  min-height: 40px;

  ${({
    theme: {
      yoga: {
        components: {
          card: {
            gym: { checkIn },
          },
        },
      },
    },
  }) => `
    margin-bottom: ${checkIn.title.margin.bottom}px;
    font-weight: ${checkIn.title.font.weight};
  `}
`;

const CheckIn = ({
  name,
  address,
  avatar = undefined,
  distance,
  rating,
  theme: {
    yoga: {
      colors: { elements },
    },
  },
  ...rest
}) => (
  <Wrapper {...rest}>
    <Header>
      {avatar ? (
        <Avatar source={avatar} />
      ) : (
        <Placeholder>
          <Building width={24} height={26} fill={elements.selectionAndIcons} />
        </Placeholder>
      )}
      <Text.Tiny>{distance}</Text.Tiny>
    </Header>
    <Rating value={rating} icon={{ size: 18 }} />
    <Content>
      <Title numberOfLines={2}>{name}</Title>
      <Text.Tiny numberOfLines={2}>{address}</Text.Tiny>
    </Content>
  </Wrapper>
);

CheckIn.propTypes = {
  name: string.isRequired,
  address: string.isRequired,
  /** The same as in source prop of Image react-native component */
  avatar: ImagePropTypes.source,
  distance: string.isRequired,
  rating: number.isRequired,
};

CheckIn.displayName = 'GymCard.CheckIn';

export default withTheme(CheckIn);
