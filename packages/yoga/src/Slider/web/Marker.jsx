import React, { useMemo } from 'react';
import { arrayOf, number, shape, bool, string } from 'prop-types';
import { hexToRgb } from '@gympass/yoga-common';
import styled from 'styled-components';
import RCHandle from 'rc-slider/lib/Handle';
import Tooltip from './Tooltip';

const Circle = styled(RCHandle)`
  cursor: pointer;
  height: 24px;
  margin-top: -10px;
  outline: none;
  position: absolute;
  top: 0;
  width: 24px;
  ${({
    'data-dragging': dataDragging,
    theme: {
      yoga: {
        components: { slider },
      },
    },
  }) => `
    background-color: ${slider.marker.backgroundColor};
    border: 6px solid ${slider.marker.border.color};
    border-radius: ${slider.marker.border.radius}px;
    box-shadow: ${
      dataDragging
        ? `${slider.marker.shadow},
          0 0 0 8px ${hexToRgb(slider.marker.backgroundColor, 0.2)}`
        : slider.marker.shadow
    };
  `}
`;

const Marker = ({ values, dragging, index, tooltip, ...props }) => {
  const currentTooltip = useMemo(
    () =>
      tooltip.filter(({ step, visible }) => {
        if (!step && step !== 0) {
          return visible;
        }

        return visible && values[index] === step;
      })[0],
    [values, index, tooltip],
  );

  return (
    <Circle data-dragging={Boolean(dragging)} {...props}>
      {(currentTooltip?.alwaysShow || dragging) && (
        <Tooltip data={currentTooltip} />
      )}
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
