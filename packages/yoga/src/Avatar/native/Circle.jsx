import React from 'react';
import { UserFilled } from '@gympass/yoga-icons';
import { func, string, number } from 'prop-types';
import BoxAvatar from './BoxAvatar';
import Placeholder from './Placeholder';
import Image from './Image';

const Circle = ({ src, fill, placeholder, width, height }) => {
  const icon = placeholder || UserFilled;
  return (
    <BoxAvatar width={width} height={height} borderRadius="circle">
      {src ? (
        <Image source={src} type="circle" />
      ) : (
        <Placeholder icon={icon} fill={fill} />
      )}
    </BoxAvatar>
  );
};

Circle.propTypes = {
  src: string,
  placeholder: func.isRequired,
  fill: string,
  width: number,
  height: number,
};

Circle.defaultProps = {
  src: undefined,
  fill: undefined,
  width: undefined,
  height: undefined,
};

Circle.displayName = 'Circle';

export default Circle;
