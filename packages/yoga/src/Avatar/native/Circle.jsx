import React from 'react';
import { UserFilled } from '@gympass/yoga-icons';
import { func, string, number } from 'prop-types';
import Avatar from './Avatar';

const Circle = ({ src, fill, placeholder, width, height }) => {
  const icon = placeholder || UserFilled;
  return (
    <Avatar
      src={src}
      fill={fill}
      width={width}
      height={height}
      borderRadius="circle"
      placeholder={icon}
      type="circle"
    />
  );
};

Circle.propTypes = {
  src: string,
  placeholder: func,
  fill: string,
  width: number,
  height: number,
};

Circle.defaultProps = {
  src: undefined,
  placeholder: undefined,
  fill: undefined,
  width: undefined,
  height: undefined,
};

Circle.displayName = 'Avatar.Circle';

export default Circle;
