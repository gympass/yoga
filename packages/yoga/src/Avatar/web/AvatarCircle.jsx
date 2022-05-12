import React, { forwardRef } from 'react';
import { UserFilled } from '@gympass/yoga-icons';

import Avatar from './Avatar';

const AvatarCircle = forwardRef(({ src, alt = '', ...props }, ref) => (
  <Avatar
    {...props}
    ref={ref}
    src={src}
    alt={alt}
    borderRadius="circle"
    icon={!src ? UserFilled : undefined}
  />
));

AvatarCircle.propTypes = Avatar.propTypes;

AvatarCircle.defaultProps = Avatar.defaultProps;

AvatarCircle.displayName = 'Avatar.Circle';

export default AvatarCircle;
