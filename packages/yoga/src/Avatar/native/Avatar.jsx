import React from 'react';
import { BuildingFilled } from '@gympass/yoga-icons';
import { string, func, number } from 'prop-types';
import BoxAvatar from './BoxAvatar';
import Image from './Image';
import Placeholder from './Placeholder';

const Avatar = ({ src, fill, placeholder, width, height }) => {
  const icon = placeholder || BuildingFilled;
  return (
    <BoxAvatar width={width} height={height} borderRadius="regular">
      {src ? <Image source={src} /> : <Placeholder fill={fill} icon={icon} />}
    </BoxAvatar>
  );
};

Avatar.propTypes = {
  src: string,
  placeholder: func,
  fill: string,
  width: number,
  height: number,
};

Avatar.defaultProps = {
  src: undefined,
  placeholder: undefined,
  fill: undefined,
  width: undefined,
  height: undefined,
};

Avatar.displayName = 'Avatar';

export default Avatar;
