import React from 'react';
import { bool, string, number, arrayOf, shape } from 'prop-types';
import styled, { withTheme } from 'styled-components';
import RCSlider from 'rc-slider/lib/Slider';
import RCRange from 'rc-slider/lib/Range';
import Marker from './Marker';

const StyledSlider = styled(RCSlider)`
  position: relative;
`;

const StyledRange = styled(RCRange)`
  position: relative;
`;

const Slider = ({
  snapped,
  tooltip,
  values,
  theme: {
    components: {
      slider: {
        track: {
          backgroundColor: {
            active: activeBackgroundColor,
            inactive: inactiveBackgroundColor,
          },
          border: { radius: trackRadius },
        },
        step: {
          backgroundColor: {
            active: stepActiveBackgroundColor,
            inactive: stepInactiveBackgroundColor,
          },
          border: { radius: stepRadius },
        },
      },
    },
  },
  ...props
}) => {
  const commonTrackStyle = {
    borderRadius: trackRadius,
    height: 4,
    position: 'absolute',
    width: '100%',
  };

  const trackStyle = {
    backgroundColor: activeBackgroundColor,
  };

  const railStyle = {
    backgroundColor: inactiveBackgroundColor,
  };

  const commonStepStyle = {
    borderRadius: stepRadius,
    marginLeft: -4,
    position: 'absolute',
    height: 10,
    top: -3,
    width: 10,
  };

  const activeStepStyle = {
    backgroundColor: stepActiveBackgroundColor,
  };

  const inactiveStepStyle = {
    backgroundColor: stepInactiveBackgroundColor,
  };

  return values.length > 1 ? (
    <StyledRange
      {...props}
      dots={snapped}
      value={values}
      trackStyle={[
        {
          ...commonTrackStyle,
          ...trackStyle,
        },
      ]}
      railStyle={{
        ...commonTrackStyle,
        ...railStyle,
      }}
      dotStyle={{
        ...commonStepStyle,
        ...inactiveStepStyle,
      }}
      activeDotStyle={{
        ...commonStepStyle,
        ...activeStepStyle,
      }}
      handle={rest => <Marker values={values} tooltip={tooltip} {...rest} />}
    />
  ) : (
    <StyledSlider
      {...props}
      prefixCls="yoga"
      dots={snapped}
      value={values[0]}
      trackStyle={{
        ...commonTrackStyle,
        ...trackStyle,
      }}
      railStyle={{
        ...commonTrackStyle,
        ...railStyle,
      }}
      dotStyle={{
        ...commonStepStyle,
        ...inactiveStepStyle,
      }}
      activeDotStyle={{
        ...commonStepStyle,
        ...activeStepStyle,
      }}
      handle={rest => <Marker values={values} tooltip={tooltip} {...rest} />}
    />
  );
};

Slider.propTypes = {
  snapped: bool,
  tooltip: arrayOf(
    shape({
      ribbon: string,
      title: string,
      description: string,
      visible: bool,
      step: number,
    }),
  ),
  values: arrayOf(number),
};

Slider.defaultProps = {
  snapped: false,
  tooltip: undefined,
  values: [0],
};

export default withTheme(Slider);
