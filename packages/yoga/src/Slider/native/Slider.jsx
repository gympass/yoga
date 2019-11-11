import React from 'react';
import { View } from 'react-native';
import { bool, number, arrayOf, shape, string, oneOfType } from 'prop-types';
import { withTheme } from 'styled-components';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import { LabelView, LabelText } from './Label';
import Marker from './Marker';
import Step from './Step';

/** Sliders allow users to make selections from a range of values. Sliders reflect a range of values along a bar, from which users may select a single value. They are ideal for adjusting settings such as volume, brightness, or applying image filters. */
const Slider = ({
  max,
  maxLabel,
  min,
  minLabel,
  snapped,
  values,
  tooltip,
  theme: {
    components: { slider },
  },
  ...props
}) => {
  const renderSnapDots = () => {
    const items = [];
    for (let i = min; i <= max; i + 1) {
      if (values.length > 1) {
        items.push(<Step key={i} active={values[0] < i && values[1] > i} />);
      } else {
        items.push(<Step key={i} active={values[0] > i} />);
      }
    }

    return items;
  };

  const renderTooltip = side => {
    const tooltipSide = side === 'left' ? 0 : 1;

    return tooltip.filter(({ step, visible }) => {
      if (!step && step !== 0) {
        return visible;
      }

      return visible && values[tooltipSide] === step;
    })[0];
  };

  return (
    <>
      {snapped && (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            bottom: -30,
          }}
        >
          {renderSnapDots()}
        </View>
      )}
      <View>
        <MultiSlider
          values={values}
          trackStyle={{
            backgroundColor: slider.track.backgroundColor.inactive,
            height: 4,
            borderRadius: slider.track.border.radius,
          }}
          selectedStyle={{
            backgroundColor: slider.track.backgroundColor.active,
          }}
          isMarkersSeparated
          min={min}
          max={max}
          snapped={snapped}
          customMarkerLeft={({ pressed }) => (
            <Marker tooltip={renderTooltip('left')} pressed={pressed} />
          )}
          customMarkerRight={({ pressed }) => (
            <Marker tooltip={renderTooltip('right')} pressed={pressed} />
          )}
          touchDimensions={{
            slipDisplacement: 400,
          }}
          {...props}
        />
        {(minLabel || maxLabel) && (
          <LabelView>
            {minLabel && <LabelText placement="left">{minLabel}</LabelText>}
            {maxLabel && <LabelText placement="right">{maxLabel}</LabelText>}
          </LabelView>
        )}
      </View>
    </>
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
      description: string,
      title: string,
      ribbon: string,
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

export default withTheme(Slider);
