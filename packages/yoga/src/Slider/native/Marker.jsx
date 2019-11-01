import React from 'react';
import styled from 'styled-components';
import { Tooltip, Ribbon } from './Tooltip';

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
    pressed,
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
      <Circle pressed={pressed} />
    </>
  );
};

export default Marker;
