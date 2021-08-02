import React from 'react';
import { BuildingFilled } from '@gympass/yoga-icons';
import { string, func, number } from 'prop-types';
import styled from 'styled-components';
import Box from '../../Box';
import Image from './Image';
import Placeholder from './Placeholder';

const BoxWrapper = styled.View`
  ${({
    type,
    width,
    height,
    theme: {
      yoga: {
        elevations: { large },
        radii: { small, circle },
      },
    },
  }) => `
    box-shadow: ${large};
    elevation: 4;
    display: flex;
    align-items: center;
    background-color: white;
    height: ${height}px;
    width: ${width}px;
    border-radius: ${type === 'circle' ? circle : small}px;
  `}
`;

const Avatar = ({
  src,
  fill,
  placeholder,
  width,
  height,
  borderRadius,
  type,
  defaultSource,
  elevation,
  ...otherProps
}) => (
  <BoxWrapper
    // bgColor="elements.selectionAndIcons"
    // display="flex"
    width={width}
    height={height}
    // alignItems="center"
    // justifyContent="center"
    borderRadius={borderRadius}
    type={type}
    {...otherProps}
  >
    {src ? (
      <Image defaultSource={defaultSource} type={type} source={src} />
    ) : (
      <Placeholder fill={fill} icon={placeholder} />
    )}
  </BoxWrapper>
);

Avatar.propTypes = {
  src: string,
  placeholder: func,
  fill: string,
  width: number,
  height: number,
  borderRadius: string,
  type: string,
  defaultSource: string,
  elevation: string,
};

Avatar.defaultProps = {
  src: undefined,
  placeholder: BuildingFilled,
  fill: undefined,
  width: 48,
  height: 48,
  borderRadius: 'small',
  type: 'default',
  defaultSource: undefined,
  elevation: 'small',
};

Avatar.displayName = 'Avatar';

export default Avatar;
