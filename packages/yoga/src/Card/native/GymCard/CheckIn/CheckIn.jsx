import React from 'react';
import styled, { withTheme } from 'styled-components';
import { Image } from 'react-native';
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

const Title = styled(Text.H4)`
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
  avatar,
  distance,
  rating,
  theme: {
    yoga: {
      colors: { gray },
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
          <Building width={24} height={26} fill={gray[3]} />
        </Placeholder>
      )}
      <Text.Tiny>{distance}</Text.Tiny>
    </Header>
    <Rating value={rating} />
    <Content>
      <Title numberOfLines={2}>{name}</Title>
      <Text.Tiny numberOfLines={2}>{address}</Text.Tiny>
    </Content>
  </Wrapper>
);

CheckIn.propTypes = {
  name: string.isRequired,
  address: string.isRequired,
  avatar: Image.propTypes.source,
  distance: string.isRequired,
  rating: number.isRequired,
};

CheckIn.defaultProps = {
  avatar: undefined,
};

export default withTheme(CheckIn);
