import React, { useState } from 'react';
import styled from 'styled-components';
import { Rating } from '@gympass/yoga';
import {
  CompassFilled,
  DislikeFilled,
  FavoriteFilled,
  LikeFilled,
  PlayFilled,
  SmartphoneFilled,
  UserFilled,
} from '@gympass/yoga-icons';

import { DocTitle } from '../components';

const ScrollView = styled.ScrollView`
  width: 100%;
  margin-bottom: 50px;
  padding: 10px;
`;

const RatingPage = () => {
  const [rating, setRating] = useState(2);

  return (
    <ScrollView
      style={{
        width: '100%',
      }}
      contentContainerStyle={{
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 60,
      }}
    >
      <DocTitle>Rating</DocTitle>

      <Rating value={1} />
      <Rating icon={{ type: FavoriteFilled }} value={1.5} />
      <Rating icon={{ type: LikeFilled }} value={2} />
      <Rating icon={{ type: CompassFilled }} value={2.5} />
      <Rating icon={{ type: DislikeFilled }} value={3} />
      <Rating icon={{ type: UserFilled }} value={3.5} />
      <Rating icon={{ type: SmartphoneFilled }} value={4} />
      <Rating icon={{ type: PlayFilled }} value={4.5} />

      <DocTitle>Custom Icon</DocTitle>

      <DocTitle>Working</DocTitle>
      <Rating readOnly={false} value={rating} onRate={setRating} />
    </ScrollView>
  );
};

export default RatingPage;
