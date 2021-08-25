import React from 'react';
import styled from 'styled-components';
import { BuildingFilled } from '@gympass/yoga-icons';
import { string, func } from 'prop-types';
import { Image as RNImage } from 'react-native';

import Box from '../../Box';
import Icon from '../../Icon';

const Image = styled.Image`
  width: 100%;
  height: 100%;
`;

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
      <Image source={src} />
    ) : (
      <Icon as={icon} width="50%" height="50%" fill={fill} stroke={stroke} />
    )}
  </Box>
);

Avatar.propTypes = {
  src: RNImage.propTypes.source,
  icon: func,
  fill: string,
  ...Box.propTypes,
};

Avatar.defaultProps = {
  src: undefined,
  fill: 'white',
  elevation: 'small',
  ...Box.defaultProps,
};

Avatar.displayName = 'Avatar';

export default Avatar;
