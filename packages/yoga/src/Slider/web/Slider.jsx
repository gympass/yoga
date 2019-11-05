import React from 'react';
import styled, { withTheme } from 'styled-components';
import RCSlider from 'rc-slider/lib/Slider';
import RCRange from 'rc-slider/lib/Range';
import Marker from './Marker';

const sliderStyle = ({
  activeBackgroundColor,
  inactiveBackgroundColor,
  radius,
}) => `
  position: relative;

  .yoga-rail {
    background-color: ${inactiveBackgroundColor};
    border-radius: ${radius}px;
    height: 4px;
    position: absolute;
    width: 100%;
  }

  .yoga-track {
    background-color: ${activeBackgroundColor};
    border-radius: ${radius}px;
    position: absolute;
    height: 4px;
  }
`;

const StyledSlider = styled(RCSlider)`
  position: relative;
`;

const StyledRange = styled(RCRange)`
  position: relative;
`;

const Slider = ({
  values,
  tooltip,
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
    position: 'absolute',
    height: 10,
    width: 10,
    top: -3,
  };

  const activeStepStyle = {
    backgroundColor: stepActiveBackgroundColor,
  };

  const inactiveStepStyle = {
    backgroundColor: stepInactiveBackgroundColor,
  };

  return values.length > 1 ? (
    <StyledRange
      prefixCls="yoga"
      min={0}
      max={10}
      dots
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
      handle={props => <Marker tooltip={tooltip} {...props} />}
    />
  ) : (
    <StyledSlider
      prefixCls="yoga"
      handle={props => <Marker tooltip={tooltip} {...props} />}
    />
  );
};

export default withTheme(Slider);
