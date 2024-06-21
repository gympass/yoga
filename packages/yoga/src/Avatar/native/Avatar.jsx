import React, { forwardRef } from 'react';
import { BuildingFilled } from '@gympass/yoga-icons';
import { string, func, number } from 'prop-types';
import { ImagePropTypes } from 'deprecated-react-native-prop-types';
import { Image } from 'react-native';

import styled from 'styled-components';
import { hexToRgb } from '@gympass/yoga-common';
import Box from '../../Box';
import Icon from '../../Icon';

const BORDER_WIDTH = 1;
const BORDER_OPACITY = 0.1;

const BorderImage = styled(Box).attrs(({ theme: { yoga } }) => {
  return {
    borderColor: hexToRgb(yoga.colors.secondary, BORDER_OPACITY),
    borderWidth: BORDER_WIDTH,
  };
})`
  position: absolute;
`;

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
  (
    {
      icon = BuildingFilled,
      src,
      children,
      fill,
      stroke,
      borderRadius,
      width,
      height,
      ...props
    },
    ref,
  ) => {
    return (
      <Box
        ref={ref}
        bgColor="elements.selectionAndIcons"
        display="flex"
        alignItems="center"
        justifyContent="center"
        width={width}
        height={height}
        overflow="hidden"
        borderRadius={borderRadius}
        {...props}
      >
        <Content
          icon={icon}
          src={src}
          fill={fill}
          stroke={stroke}
          content={children}
        />
        <BorderImage width="100%" height="100%" borderRadius={borderRadius} />
      </Box>
    );
  },
);

Content.propTypes = {
  src: ImagePropTypes.source,
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
  src: ImagePropTypes.source,
  icon: func,
  fill: string,
  width: number,
  height: number,
  borderRadius: string,
  ...Box.propTypes,
};

Avatar.defaultProps = {
  src: undefined,
  fill: 'white',
  width: 48,
  height: 48,
  borderRadius: 'small',
  ...Box.defaultProps,
};

Avatar.displayName = 'Avatar';

export default Avatar;
