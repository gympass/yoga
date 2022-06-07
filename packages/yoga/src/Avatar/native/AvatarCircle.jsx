import React, { forwardRef } from 'react';
import { UserFilled } from '@gympass/yoga-icons';
import Avatar from './Avatar';

const AvatarCircle = forwardRef(({ src, ...props }, ref) => (
  <Avatar
    {...props}
    src={src}
    borderRadius="circle"
    icon={!src ? UserFilled : undefined}
    ref={ref}
  />
));

AvatarCircle.propTypes = Avatar.propTypes;

AvatarCircle.defaultProps = Avatar.defaultProps;

AvatarCircle.displayName = 'Avatar.Circle';

export default AvatarCircle;
