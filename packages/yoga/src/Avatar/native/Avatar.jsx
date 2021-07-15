import React from 'react';
import { BuildingFilled } from '@gympass/yoga-icons';
import { string, func, number } from 'prop-types';
import Box from '../../Box';
import Image from './Image';
import Placeholder from './Placeholder';

const Avatar = ({
  src,
  fill,
  placeholder,
  width = 48,
  height = 48,
  borderRadius = 'regular',
}) => {
  const icon = placeholder || BuildingFilled;
  return (
    <Box
      bgColor="elements.selectionAndIcons"
      display="flex"
      width={width}
      height={height}
      alignItems="center"
      justifyContent="center"
      elevation="small"
      borderRadius={borderRadius}
    >
      {src ? <Image source={src} /> : <Placeholder fill={fill} icon={icon} />}
    </Box>
  );
};

Avatar.propTypes = {
  src: string,
  placeholder: func,
  fill: string,
  width: number,
  height: number,
  borderRadius: string,
};

Avatar.defaultProps = {
  src: undefined,
  placeholder: undefined,
  fill: undefined,
  width: undefined,
  height: undefined,
  borderRadius: undefined,
};

Avatar.displayName = 'Avatar';

export default Avatar;
