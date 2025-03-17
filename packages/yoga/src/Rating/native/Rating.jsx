import React, { useState, useEffect } from 'react';
import { PanResponder } from 'react-native';
import styled, { withTheme } from 'styled-components';
import { number, func, bool, shape } from 'prop-types';
import { StarFilled } from '@gympass/yoga-icons';

import { max as maxPropType } from '../../shared';

const SVG_DEFAULT_SIZE = 12;

const RatingWrapper = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;

  ${({ width, height }) => `
    width: ${width}px;
    height: ${height}px;
  `}
`;

/** Use the Rating component to view other people's opinions and experiences. */
const Rating = ({
  value = undefined,
  max = 5,
  readOnly = true,
  onRate = {},
  theme: {
    yoga: {
      colors,
      components: { rating },
    },
  },
  icon: { type: Icon = StarFilled, size: iconSize = 24 } = {
    type: StarFilled,
    size: 24,
  },
  ...rest
}) => {
  const [panResponder, setPanResponder] = useState({});
  const [wrapperLayout, setWrapperLayout] = useState({});
  const [swipeRating, setSwipeRating] = useState(0);
  const [swipping, toggleSwipping] = useState(false);

  function getCurrentRating(swipeValue) {
    let currentRating = 1;

    if (swipeValue > wrapperLayout.width) {
      currentRating = max;
    } else if (swipeValue <= 0) {
      currentRating = 0;
    } else {
      currentRating = Math.round(swipeValue / (wrapperLayout.width / max));
    }

    return currentRating || 1;
  }

  useEffect(() => {
    const responder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onStartShouldSetPanResponderCapture: () => true,
      onMoveShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponderCapture: () => true,
      onPanResponderTerminationRequest: () => true,

      onPanResponderGrant: ({ nativeEvent: { pageX } }) => {
        toggleSwipping(true);
        setSwipeRating(getCurrentRating(pageX - wrapperLayout.x));
      },

      onPanResponderMove: ({ nativeEvent: { pageX } }) => {
        setSwipeRating(getCurrentRating(pageX - wrapperLayout.x));
      },

      onPanResponderRelease: ({ nativeEvent: { pageX } }) => {
        setSwipeRating(0);
        toggleSwipping(false);
        onRate(getCurrentRating(pageX - wrapperLayout.x));
      },
    });

    setPanResponder(responder);
  }, [wrapperLayout]);

  return (
    <RatingWrapper
      height={iconSize}
      width={iconSize * max}
      pointerEvents={readOnly ? 'none' : 'auto'}
      {...rest}
      {...panResponder.panHandlers}
      onLayout={({ nativeEvent: { layout } }) => setWrapperLayout(layout)}
    >
      {Array.from({ length: max }, (_, i) => {
        const diff = i + 1 - value;

        if (swipeRating >= i + 1 || (!swipping && diff <= 0)) {
          return (
            <Icon
              key={`filled-${i}`}
              fill={rating.backgroundColor}
              width={iconSize}
              height={iconSize}
            />
          );
        }

        if (diff > 0 && diff < 1) {
          const width = (1 - diff) * iconSize;
          const dWidth = diff * iconSize;
          const wViewBox = SVG_DEFAULT_SIZE * (1 - diff);
          const dViewBox = SVG_DEFAULT_SIZE * diff;

          return (
            <React.Fragment key={`half-${i}`}>
              <Icon
                fill={rating.backgroundColor}
                width={width}
                height={iconSize}
                viewBox={`0 0 ${wViewBox} ${SVG_DEFAULT_SIZE}`}
              />
              <Icon
                fill={colors.elements.lineAndBorders}
                width={dWidth}
                height={iconSize}
                viewBox={`${wViewBox} 0 ${dViewBox} ${SVG_DEFAULT_SIZE}`}
              />
            </React.Fragment>
          );
        }

        return (
          <Icon
            key={`unfilled-${i}`}
            fill={colors.elements.lineAndBorders}
            width={iconSize}
            height={iconSize}
          />
        );
      })}
    </RatingWrapper>
  );
};

Rating.propTypes = {
  value: number,
  /** The icon to display */
  icon: shape({
    type: func,
    size: maxPropType(24),
  }),
  /** Maximum rating */
  max: number,
  /** false to make it interactable */
  readOnly: bool,
  /** Event to be fired on click */
  onRate: func,
};

export default withTheme(Rating);
