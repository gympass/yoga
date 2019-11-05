import React from 'react';
import { bool, arrayOf, number, shape, string } from 'prop-types';
import styled from 'styled-components';
import { Tooltip } from './Tooltip';
import { hexToRgb } from '@gympass/yoga-common';

const TooltipWrapper = styled.View`
  position: absolute;
  z-index: 1;

  ${({
    theme: {
      components: {
        slider: {
          tooltip: { shadow, radius, distance },
        },
      },
    },
  }) => `
    bottom: ${distance}px;
    border-radius: ${radius}px;
    box-shadow: ${shadow};
  `}
`;

const Circle = styled.TouchableOpacity`
  ${({
    theme: {
      components: {
        slider: {
          marker: {
            backgroundColor,
            border: { width: borderWidth, color: borderColor, radius },
            height,
            shadow,
            width,
          },
        },
      },
    },
  }) => `
    background-color: ${backgroundColor};
    border: ${borderWidth}px solid ${borderColor};
    border-radius: ${radius}px;
    box-shadow: ${shadow};
    height: ${height}px;
    width: ${width}px;
    position: absolute;
    top: -10px;
  `}
`;

const CirclePressed = styled(Circle)`
  ${({
    pressed,
    theme: {
      components: {
        slider: {
          marker: { backgroundColor },
        },
      },
    },
  }) => `
  ${
    pressed
      ? `
        background-color: ${hexToRgb(backgroundColor, 0.2)};
        border: none;
        top: -18px;
        width: 40px;
        height: 40px;
      `
      : 'display: none;'
  }
  `}
`;

CirclePressed.propTypes = {
  pressed: bool,
};

CirclePressed.defaultProps = {
  pressed: false,
};

const Marker = ({ pressed, tooltip }) => {
  return (
    <>
      {pressed && tooltip && (
        <TooltipWrapper>
          <Tooltip
            description={tooltip.description}
            title={tooltip.title}
            ribbon={tooltip.ribbon}
          />
        </TooltipWrapper>
      )}
      <CirclePressed pressed={pressed} />
      <Circle />
    </>
  );
};

Marker.propTypes = {
  pressed: bool,
  tooltip: shape({
    description: string,
    title: string,
    ribbon: string,
    visible: bool,
    step: number,
  }),
};

Marker.defaultProps = {
  pressed: false,
  tooltip: undefined,
};

export default Marker;
