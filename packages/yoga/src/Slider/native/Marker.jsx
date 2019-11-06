import React from 'react';
import { bool, number, shape, string } from 'prop-types';
import styled from 'styled-components';
import { Tooltip } from './Tooltip';
import { hexToRgb } from '@gympass/yoga-common';

const Circle = styled.TouchableOpacity(
  ({
    theme: {
      components: {
        slider: {
          marker: {
            backgroundColor,
            border: { color: borderColor, radius },
            shadow,
          },
        },
      },
    },
  }) => `
    background-color: ${backgroundColor};
    border: 6px solid ${borderColor};
    border-radius: ${radius}px;
    box-shadow: ${shadow};
    height: 24px;
    width: 24px;
    position: absolute;
    top: -10px;
  `,
);

const CirclePressed = styled(Circle)(
  ({
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
  `,
);

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
        <Tooltip
          description={tooltip.description}
          title={tooltip.title}
          ribbon={tooltip.ribbon}
        />
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
