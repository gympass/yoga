import React from 'react';
import { arrayOf, number, shape, bool, string } from 'prop-types';
import { hexToRgb } from '@gympass/yoga-common';
import styled from 'styled-components';
import RCHandle from 'rc-slider/lib/Handle';
import Tooltip from './Tooltip';

const Circle = styled(RCHandle)(
  ({
    ['data-dragging']: dataDragging,
    theme: {
      components: { slider },
    },
  }) => `
    background-color: ${slider.marker.backgroundColor};
    border: 6px solid ${slider.marker.border.color};
    border-radius: ${slider.marker.border.radius}px;
    box-shadow: ${
      dataDragging
        ? `${slider.marker.shadow}, 0px 0px 0px 8px ${hexToRgb(
            slider.marker.backgroundColor,
            0.2,
          )}`
        : slider.marker.shadow
    };
    cursor: pointer;
    height: 24px;
    margin-top: -10px;
    outline: none;
    position: absolute;
    top: 0;
    width: 24px;
  `,
);

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
    <Circle data-dragging={Boolean(dragging)} {...props}>
      {dragging && <Tooltip data={renderTooltip()} />}
    </Circle>
  );
};

Marker.propTypes = {
  values: arrayOf(number),
  'data-dragging': bool,
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
