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
  width,
  height,
  borderRadius,
  type,
  ...otherProps
}) => (
  <Box
    bgColor="elements.selectionAndIcons"
    display="flex"
    width={width}
    height={height}
    alignItems="center"
    justifyContent="center"
    elevation="small"
    borderRadius={borderRadius}
    {...otherProps}
  >
    {src ? (
      <Image type={type} source={src} />
    ) : (
      <Placeholder fill={fill} icon={placeholder} />
    )}
  </Box>
);

Avatar.propTypes = {
  src: string,
  placeholder: func,
  fill: string,
  width: number,
  height: number,
  borderRadius: string,
  type: string,
};

Avatar.defaultProps = {
  src: undefined,
  placeholder: BuildingFilled,
  fill: undefined,
  width: 48,
  height: 48,
  borderRadius: 'small',
  type: 'default',
};

Avatar.displayName = 'Avatar';

export default Avatar;
