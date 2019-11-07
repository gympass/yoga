import React from 'react';
import { arrayOf, number, shape, bool } from 'prop-types';
import styled from 'styled-components';
import RCHandle from 'rc-slider/lib/Handle';
import Tooltip from './Tooltip';
import { stripIgnoredCharacters } from 'graphql';

const Circle = styled(RCHandle)`
  height: 24px;
  position: absolute;
  top: 0;
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

const Marker = ({ values, dragging, index, tooltip, ...props }) => {
  const renderTooltip = () => {
    if (!dragging) {
      return false;
    }

    return tooltip.filter(item => {
      if (!item.step && item.step !== 0) {
        return item.visible;
      }

      return item.visible && values[index] === item.step;
    })[0];
  };

  return (
    <Circle {...props}>
      {dragging && <Tooltip tooltip={renderTooltip()} />}
    </Circle>
  );
};

Marker.propTypes = {
  values: arrayOf(number),
  dragging: bool,
  index: number,
  tooltip: arrayOf(
    shape({
      ribbon: string,
      title: string,
      description: string,
      visible: bool,
      step: number,
    }),
  ),
};

Marker.defaultProps = {
  values: [0],
  dragging: false,
  index: 0,
  tooltip: undefined,
};

export default Marker;
