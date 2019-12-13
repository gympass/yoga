import React from 'react';
import { bool, string, number, arrayOf, shape, oneOfType } from 'prop-types';
import styled, { withTheme } from 'styled-components';
import RCSlider from 'rc-slider/lib/Slider';
import RCRange from 'rc-slider/lib/Range';
import Marker from './Marker';

const StyledSlider = styled(RCSlider)`
  position: relative;
  width: 100%;

  ${({ marks }) => `
    padding-bottom: ${marks ? 40 : 15}px;
  `}

  * {
    box-sizing: border-box;
  }
`;

const StyledRange = styled(RCRange)`
  position: relative;
  width: 100%;

  ${({ marks }) => `
    padding-bottom: ${marks ? 40 : 15}px;
  `}

  * {
    box-sizing: border-box;
  }
`;

/** Sliders allow users to make selections from a range of values. Sliders reflect a range of values along a bar, from which users may select a single value. They are ideal for adjusting settings such as volume, brightness, or applying image filters. */
const Slider = ({
  snapped,
  tooltip,
  values,
  max,
  maxLabel,
  min,
  minLabel,
  theme: {
    yoga: {
      components: { slider },
    },
  },
  ...props
}) => {
  const styles = {
    commonTrackStyle: {
      borderRadius: slider.track.border.radius,
      height: 4,
      position: 'absolute',
      width: '100%',
    },

    trackStyle: {
      backgroundColor: slider.track.backgroundColor.active,
    },

    railStyle: {
      backgroundColor: slider.track.backgroundColor.inactive,
    },

    commonStepStyle: {
      borderRadius: slider.step.border.radius,
      marginLeft: -4,
      position: 'absolute',
      height: 10,
      top: -3,
      width: 10,
    },

    activeStepStyle: {
      backgroundColor: slider.track.backgroundColor.active,
    },

    inactiveStepStyle: {
      backgroundColor: slider.track.backgroundColor.inactive,
    },

    labelStyle: {
      fontSize: slider.label.font.size,
      fontWeight: slider.label.font.weight,
      position: 'absolute',
      top: 15,
    },
  };

  return values.length > 1 ? (
    <StyledRange
      {...props}
      dots={snapped}
      value={values}
      allowCross={false}
      marks={{
        [min]: {
          label: minLabel,
          style: { ...styles.labelStyle, transform: 'translateX(0%)' },
        },
        [max]: {
          label: maxLabel,
          style: { ...styles.labelStyle, transform: 'translateX(-100%)' },
        },
      }}
      trackStyle={[
        {
          ...styles.commonTrackStyle,
          ...styles.trackStyle,
        },
      ]}
      railStyle={{
        ...styles.commonTrackStyle,
        ...styles.railStyle,
      }}
      dotStyle={
        snapped
          ? {
              ...styles.commonStepStyle,
              ...styles.inactiveStepStyle,
            }
          : undefined
      }
      activeDotStyle={
        snapped
          ? {
              ...styles.commonStepStyle,
              ...styles.activeStepStyle,
            }
          : undefined
      }
      max={max}
      min={min}
      handle={({ ref, index, ...rest }) => (
        <Marker
          values={values}
          tooltip={tooltip}
          key={index}
          index={index}
          {...rest}
        />
      )}
    />
  ) : (
    <StyledSlider
      {...props}
      prefixCls="yoga"
      dots={snapped}
      value={values[0]}
      marks={{
        [min]: {
          label: minLabel,
          style: { ...styles.labelStyle, transform: 'translateX(0%)' },
        },
        [max]: {
          label: maxLabel,
          style: { ...styles.labelStyle, transform: 'translateX(-100%)' },
        },
      }}
      trackStyle={{
        ...styles.commonTrackStyle,
        ...styles.trackStyle,
      }}
      railStyle={{
        ...styles.commonTrackStyle,
        ...styles.railStyle,
      }}
      dotStyle={
        snapped
          ? {
              ...styles.commonStepStyle,
              ...styles.inactiveStepStyle,
            }
          : undefined
      }
      activeDotStyle={
        snapped
          ? {
              ...styles.commonStepStyle,
              ...styles.activeStepStyle,
            }
          : undefined
      }
      max={max}
      min={min}
      handle={({ ref, index, ...rest }) => (
        <Marker
          values={values}
          tooltip={tooltip}
          key={index}
          index={index}
          {...rest}
        />
      )}
    />
  );
};

Slider.propTypes = {
  /** set the max value */
  max: number,
  /** label to be displayed at max value */
  maxLabel: oneOfType([string, number]),
  /** set the min value */
  min: number,
  /** label to be displayed at min value */
  minLabel: oneOfType([string, number]),
  /** make slider be snap through dots */
  snapped: bool,
  /** accepts a shape with 'ribbon', 'title', 'description', 'visible' and 'step' properties */
  tooltip: arrayOf(
    shape({
      ribbon: string,
      title: string,
      description: string,
      visible: bool,
      step: number,
    }),
  ),
  /** an array that accepts one or two numbers, this determines how many markers will be displayed */
  values: arrayOf(number),
};

Slider.defaultProps = {
  max: 10,
  maxLabel: undefined,
  min: 0,
  minLabel: undefined,
  snapped: false,
  tooltip: [],
  values: [0],
};

Slider.displayName = 'Slider';

export default withTheme(Slider);
