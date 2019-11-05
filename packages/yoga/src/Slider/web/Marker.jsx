import React from 'react';
import styled from 'styled-components';
import RCHandle from 'rc-slider/lib/Handle';
import Tooltip from './Tooltip';

const Circle = styled(RCHandle)`
  height: 24px;
  position: absolute;
  width: 24px;
  ${({
    theme: {
      components: {
        slider: {
          marker: {
            backgroundColor,
            border: { color, radius },
            shadow,
          },
        },
      },
    },
  }) => `
    background-color: ${backgroundColor};
    border: 6px solid ${color};
    border-radius: ${radius}px;
    box-shadow: ${shadow};
    cursor: pointer;
    margin-top: -10px;
    outline: none;
  `}
`;

const Marker = ({ value, dragging, index, tooltip, ...props }) => (
  <Circle value={value} {...props}>
    <Tooltip dragging={dragging} {...tooltip} />
  </Circle>
);

export default Marker;
