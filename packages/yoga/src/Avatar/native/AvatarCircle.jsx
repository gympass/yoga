import React from 'react';
import { UserFilled } from '@gympass/yoga-icons';
import { func, string } from 'prop-types';
import Avatar from './Avatar';

const AvatarCircle = ({
  src,
  fill,
  placeholder,
  defaultSource,
  ...otherProps
}) => (
  <Avatar
    src={src}
    fill={fill}
    borderRadius="circle"
    placeholder={placeholder}
    defaultSource={defaultSource}
    type="circle"
    {...otherProps}
  />
);

AvatarCircle.propTypes = {
  src: string,
  placeholder: func,
  fill: string,
  defaultSource: string,
};

AvatarCircle.defaultProps = {
  src: undefined,
  placeholder: UserFilled,
  fill: undefined,
  defaultSource: undefined,
};

AvatarCircle.displayName = 'AvatarCircle';

export default AvatarCircle;
