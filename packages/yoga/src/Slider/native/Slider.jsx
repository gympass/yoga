import React from 'react';
import { View } from 'react-native';
import { bool, number, arrayOf, shape, string } from 'prop-types';
import { withTheme } from 'styled-components';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import { LabelView, LabelText } from './Label';
import Marker from './Marker';
import Step from './Step';

const SliderComponent = ({
  max,
  min,
  maxLabel,
  minLabel,
  snapped,
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
          border: { radius },
        },
      },
    },
  },
  ...props
}) => {
  const renderSnapDots = () => {
    const items = [];
    for (let i = min; i <= max; i++) {
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

    return tooltip.filter(item => {
      if (!item.step && item.step !== 0) {
        return item.visible;
      }

      return item.visible && values[tooltipSide] === item.step;
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
            backgroundColor: inactiveBackgroundColor,
            height: 4,
            borderRadius: radius,
          }}
          selectedStyle={{ backgroundColor: activeBackgroundColor }}
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

SliderComponent.propTypes = {
  max: number,
  maxLabel: string,
  min: number,
  minLabel: string,
  snapped: bool,
  tooltip: arrayOf(
    shape({
      description: string,
      title: string,
      ribbon: string,
      visible: bool,
      step: number,
    }),
  ),
  values: arrayOf(number),
};

SliderComponent.defaultProps = {
  max: 10,
  maxLabel: undefined,
  min: 0,
  minLabel: undefined,
  snapped: false,
  tooltip: [],
  values: [0],
};

export default withTheme(SliderComponent);
