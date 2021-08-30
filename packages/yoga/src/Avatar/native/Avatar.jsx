import React from 'react';
import { BuildingFilled } from '@gympass/yoga-icons';
import { string, func } from 'prop-types';
import { Image } from 'react-native';

import Box from '../../Box';
import Icon from '../../Icon';

/**
 * The Avatar component is used to display the image.
 * It has two shapes: default and circle
 */
const Avatar = ({ src, icon = BuildingFilled, fill, stroke, ...props }) => (
  <Box
    bgColor="elements.selectionAndIcons"
    display="flex"
    alignItems="center"
    justifyContent="center"
    width={48}
    height={48}
    borderRadius="small"
    elevation="small"
    overflow="hidden"
    {...props}
  >
    {src ? (
      <Box as={Image} width="100%" height="100%" source={src} />
    ) : (
      <Icon as={icon} width="50%" height="50%" fill={fill} stroke={stroke} />
    )}
  </Box>
);

Avatar.propTypes = {
  src: Image.propTypes.source,
  icon: func,
  fill: string,
  ...Box.propTypes,
};

Avatar.defaultProps = {
  src: undefined,
  fill: 'white',
  ...Box.defaultProps,
};

Avatar.displayName = 'Avatar';

export default Avatar;
