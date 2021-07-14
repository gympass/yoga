import React from 'react';
import { node, string, number } from 'prop-types';
import Box from '../../Box/native';

const BoxAvatar = ({ children, borderRadius, width, height }) => (
  <Box
    bgColor="elements.selectionAndIcons"
    display="flex"
    width={width ? `${width}px` : '48px'}
    height={height ? `${height}px` : '48px'}
    alignItems="center"
    justifyContent="center"
    elevation="small"
    borderRadius={borderRadius}
  >
    {children}
  </Box>
);

BoxAvatar.propTypes = {
  children: node.isRequired,
  borderRadius: string.isRequired,
  width: number,
  height: number,
};

BoxAvatar.defaultProps = {
  width: undefined,
  height: undefined,
};

export default BoxAvatar;
