import React from 'react';
import styled from 'styled-components';
import { Avatar } from '@gympass/yoga';
import { Youtube, UserFilled } from '@gympass/yoga-icons';
import { DocTitle } from '../components';
import avatar from '../assets/images/avatarIcons/avatar.png';
import classIcon from '../assets/images/avatarIcons/class.png';

const ScrollView = styled.ScrollView`
  margin-bottom: 50px;
  padding: 10px;
  width: 100%;
`;

const AvatarWrapper = styled.View`
  width: 100%;
  padding: 20px;
  margin-bottom: 10px;
  align-items: center;
  justify-content: space-between;
  height: 250px;
  flex-direction: column;
`;

const AvatarPage = () => (
  <ScrollView>
    <AvatarWrapper>
      <DocTitle>Default Avatar without image prop</DocTitle>
      <Avatar />
    </AvatarWrapper>
    <AvatarWrapper>
      <DocTitle>Default Avatar</DocTitle>
      <Avatar src={avatar} />
    </AvatarWrapper>
    <AvatarWrapper>
      <DocTitle>Default Avatar with placeholder prop</DocTitle>
      <Avatar placeholder={Youtube} />
    </AvatarWrapper>
    <AvatarWrapper>
      <DocTitle>Default Avatar with width and height props</DocTitle>
      <Avatar src={avatar} width={78} height={78} />
    </AvatarWrapper>
    <AvatarWrapper>
      <DocTitle>Circle Avatar without image prop</DocTitle>
      <Avatar.Circle />
    </AvatarWrapper>
    <AvatarWrapper>
      <DocTitle>Circle Avatar </DocTitle>
      <Avatar.Circle src={classIcon} />
    </AvatarWrapper>
    <AvatarWrapper>
      <DocTitle>Circle Avatar with placeholder prop</DocTitle>
      <Avatar.Circle placeholder={UserFilled} />
    </AvatarWrapper>
    <AvatarWrapper>
      <DocTitle>Circle Avatar with width and height props</DocTitle>
      <Avatar.Circle src={classIcon} width={78} height={78} />
    </AvatarWrapper>
  </ScrollView>
);

export default AvatarPage;
