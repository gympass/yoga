import React from 'react';
import styled from 'styled-components';
import { Tooltip } from './Tooltip';
import { hexToRgb } from '@gympass/yoga-common';

const TooltipWrapper = styled.View`
  bottom: 20px;
  position: absolute;
  z-index: 1;

  ${({
    theme: {
      components: {
        slider: {
          tooltip: { shadow, radius },
        },
      },
    },
  }) => `
    box-shadow: ${shadow};
    border-radius: ${radius}px;
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
          marker: {
            backgroundColor,
            pressed: { width, height, position },
          },
        },
      },
    },
  }) => `
  ${
    pressed
      ? `
        background-color: ${hexToRgb(backgroundColor, 0.2)};
        border: none;
        top: ${position}px;
        width: ${width};
        height: ${height};
      `
      : 'display: none;'
  }
  `}
`;

const Marker = ({ pressed, tooltip }) => {
  return (
    <>
      {pressed && tooltip && (
        <TooltipWrapper>
          {tooltip && (
            <Tooltip
              description={tooltip.description}
              title={tooltip.title}
              ribbon={tooltip.ribbon}
            />
          )}
        </TooltipWrapper>
      )}
      <CirclePressed pressed={pressed} />
      <Circle />
    </>
  );
};

export default Marker;
