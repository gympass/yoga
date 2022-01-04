import React from 'react';

import { Heading } from '@gympass/yoga';
import { Favorite, AddBooking } from '@gympass/yoga-icons';
import avatar from '../assets/images/avatarIcons/avatar.png';

const HeadingPage = () => (
  <Heading
    backButton={{
      onPress: () => {},
    }}
    rightIcons={[
      {
        icon: AddBooking,
        onPress: () => {},
      },
      {
        icon: Favorite,
        onPress: () => {},
      },
    ]}
    pageTitle="Page Title"
    title="Title"
    subtitle="Subtitle"
    avatar={avatar}
  />
);

export default HeadingPage;
