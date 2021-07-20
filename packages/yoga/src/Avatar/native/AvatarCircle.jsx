import React from 'react';
import { UserFilled } from '@gympass/yoga-icons';
import { func, string, number } from 'prop-types';
import Avatar from './Avatar';

const AvatarCircle = ({
  src,
  fill,
  placeholder,
  width,
  height,
  defaultSource,
  ...otherProps
}) => (
  <Avatar
    src={src}
    fill={fill}
    width={width}
    height={height}
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
  width: number,
  height: number,
  defaultSource: string,
};

AvatarCircle.defaultProps = {
  src: undefined,
  placeholder: UserFilled,
  fill: undefined,
  width: undefined,
  height: undefined,
  defaultSource: undefined,
};

AvatarCircle.displayName = 'AvatarCircle';

export default AvatarCircle;
