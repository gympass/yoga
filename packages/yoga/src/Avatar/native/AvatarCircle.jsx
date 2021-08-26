import React from 'react';
import { UserFilled } from '@gympass/yoga-icons';
import Avatar from './Avatar';

const AvatarCircle = ({ src, ...props }) => (
  <Avatar
    {...props}
    src={src}
    borderRadius="circle"
    icon={!src ? UserFilled : undefined}
  />
);

AvatarCircle.propTypes = Avatar.propTypes;

AvatarCircle.defaultProps = Avatar.defaultProps;

AvatarCircle.displayName = 'Avatar.Circle';

export default AvatarCircle;
