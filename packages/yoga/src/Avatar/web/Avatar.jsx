import React from 'react';
import { BuildingFilled } from '@gympass/yoga-icons';
import { string, func, checkPropTypes } from 'prop-types';

import Box from '../../Box';
import Icon from '../../Icon';

const Avatar = ({ src, alt, fill, stroke, placeholder, ...otherProps }) => (
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
    {...otherProps}
  >
    {src ? (
      <img src={src} alt={alt} />
    ) : (
      <Icon
        as={placeholder}
        width="50%"
        height="50%"
        fill={fill}
        stroke={stroke}
      />
    )}
  </Box>
);

Avatar.propTypes = {
  src: string,
  /**  Required if src is true */
  alt: (props, propName, componentName) => {
    const { src } = props;

    if (src) {
      checkPropTypes(
        { [propName]: string.isRequired },
        props,
        'prop',
        componentName,
      );
    }

    return null;
  },
  placeholder: func,
  fill: string,
  stroke: string,
  ...Box.propTypes,
};

Avatar.defaultProps = {
  src: undefined,
  alt: undefined,
  placeholder: BuildingFilled,
  fill: 'white',
  stroke: undefined,
  ...Box.defaultProps,
};
Avatar.displayName = 'Avatar';

export default Avatar;
