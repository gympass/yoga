import React from 'react';
import { View, Text } from 'react-native';
import { bool, number, arrayOf, object } from 'prop-types';
import { withTheme } from 'styled-components';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import { LabelView, LabelText } from './Label';
import Marker from './Marker';
import Dot from './Dot';

const SliderComponent = ({
  max,
  min,
  maxLabel,
  minLabel,
  snapped,
  values,
  tooltip,
  onValuesChangeStart,
  onValuesChangeFinish,
  sliderLength,
  theme: {
    components: {
      slider: {
        track: {
          backgroundColor: {
            active: activeBackgroundColor,
            inactive: inactiveBackgroundColor,
          },
          border: { radius },
          height,
        },
        snapDot: { position },
      },
    },
  },
  ...props
}) => {
  const renderSnapDots = () => {
    const items = [];
    for (let i = min; i <= max; i++) {
      if (snapped && values.length > 1) {
        items.push(<Dot key={i} active={values[0] < i && values[1] > i} />);
      } else {
        items.push(<Dot key={i} active={values[0] > i} />);
      }
    }

    return items;
  };

  const renderTooltip = side => {
    const tooltipSide = side === 'left' ? 0 : 1;
    return tooltip.filter(
      item => item.visible && values[tooltipSide] === item.step,
    )[0];
  };

  return (
    <View
      style={{
        width: sliderLength,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <View>
        {snapped && (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              bottom: position,
            }}
          >
            {renderSnapDots()}
          </View>
        )}
        <View>
          <MultiSlider
            values={values}
            sliderLength={sliderLength}
            trackStyle={{
              backgroundColor: inactiveBackgroundColor,
              height,
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
      </View>
    </View>
  );
};

SliderComponent.propTypes = {
  max: number,
  min: number,
  snapped: bool,
  tooltip: arrayOf(object),
  values: arrayOf(number),
};

SliderComponent.defaultProps = {
  snapped: false,
  tooltip: [],
  values: [0],
};

export default withTheme(SliderComponent);
