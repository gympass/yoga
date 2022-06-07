import React, { forwardRef } from 'react';
import { BuildingFilled } from '@gympass/yoga-icons';
import { string, func } from 'prop-types';
import { Image } from 'react-native';

import Box from '../../Box';
import Icon from '../../Icon';

const Content = ({ icon, src, fill, content, stroke }) => {
  if (src) {
    return <Box as={Image} width="100%" height="100%" source={src} />;
  }

  if (content) {
    return content;
  }

  return (
    <Icon as={icon} width="50%" height="50%" fill={fill} stroke={stroke} />
  );
};

/**
 * The Avatar component is used to display the image.
 * It has two shapes: default and circle
 */
const Avatar = forwardRef(
  ({ icon = BuildingFilled, src, children, fill, stroke, ...props }, ref) => {
    return (
      <Box
        ref={ref}
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
        <Content
          icon={icon}
          src={src}
          fill={fill}
          stroke={stroke}
          content={children}
        />
      </Box>
    );
  },
);

Content.propTypes = {
  src: Image.propTypes.source,
  icon: func,
  fill: string,
  ...Box.propTypes,
};

Content.defaultProps = {
  src: undefined,
  fill: 'white',
  icon: BuildingFilled,
};

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
