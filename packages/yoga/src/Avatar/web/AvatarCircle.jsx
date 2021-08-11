import React from 'react';
import { UserFilled } from '@gympass/yoga-icons';
import Avatar from './Avatar';

const AvatarCircle = props => (
  <Avatar {...props} borderRadius="circle" placeholder={UserFilled} />
);

AvatarCircle.propTypes = Avatar.propTypes;

AvatarCircle.defaultProps = Avatar.defaultProps;

AvatarCircle.displayName = 'Avatar.Circle';

export default AvatarCircle;
