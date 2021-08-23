import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { bool, number, shape, string } from 'prop-types';
import styled from 'styled-components';
import { hexToRgb } from '@gympass/yoga-common';
import Tooltip from './Tooltip';

import Box from '../../Box';

const Circle = styled(Box).attrs(
  ({
    theme: {
      yoga: {
        components: { slider },
      },
    },
  }) => ({
    bgColor: slider.marker.backgroundColor,
    border: 6,
    borderColor: slider.marker.border.color,
    borderRadius: slider.marker.border.radius,
    elevation: slider.marker.shadow,
    height: 24,
    width: 24,
    position: 'relative',
    top: 2,
    as: TouchableOpacity,
  }),
)``;

const CirclePressed = styled(Circle)(
  ({
    pressed,
    theme: {
      yoga: {
        components: { slider },
      },
    },
  }) => `
    ${
      pressed
        ? `
          background-color: ${hexToRgb(slider.marker.backgroundColor, 0.2)};
          border: none;
          width: 40px;
          height: 40px;
          position: absolute;
          elevation: 0;
          top: -6px;
    `
        : 'display: none; border: none;'
    }
  `,
);

CirclePressed.propTypes = {
  pressed: bool,
};

CirclePressed.defaultProps = {
  pressed: false,
};

const Marker = ({ pressed, tooltip }) => (
  <>
    {pressed && tooltip && (
      <Tooltip
        description={tooltip.description}
        title={tooltip.title}
        ribbon={tooltip.ribbon}
      />
    )}
    <CirclePressed as={View} pressed={pressed} />
    <Circle accessibilityRole="adjustable" />
  </>
);

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
