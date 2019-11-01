import React from 'react';
import styled from 'styled-components';

const Circle = styled.View`
  ${({
    active,
    theme: {
      components: {
        slider: {
          snapDot: {
            backgroundColor: {
              active: activeBackgroundColor,
              inactive: inactiveBackgroundColor,
            },
            border: { radius },
            height,
            width,
          },
        },
      },
    },
  }) => `
    background-color: ${
      active ? activeBackgroundColor : inactiveBackgroundColor
    };
    border-radius: ${radius}px;
    height: ${height}px;
    width: ${width}px;
  `}
`;

const Dot = ({ active, ...props }) => <Circle {...props} active={active} />;

export default Dot;
