/* eslint-disable jsx-a11y/mouse-events-have-key-events */

import React, { useState, useRef } from 'react';
import styled, { withTheme } from 'styled-components';
import { number, func, shape, bool } from 'prop-types';
import { Star } from '@gympass/yoga-icons';

import { max as maxPropType } from '../../shared';

const RatingWrapper = styled.div`
  display: inline-flex;

  :hover {
    cursor: pointer;
  }

  svg {
    pointer-events: none;
  }

  ${({ width, height, readOnly }) => `
    width: ${width}px;
    height: ${height}px;

    ${readOnly ? 'pointer-events: none;' : ''}
  `}
`;

/** Use the Rating component to view other people's opinions and experiences. */
const Rating = ({
  value,
  max,
  readOnly,
  onRate,
  onMouseOver,
  onMouseMove,
  onMouseLeave,
  theme: {
    yoga: {
      colors: { gray },
      components: { rating },
    },
  },
  icon: { type: Icon, size: iconSize = rating.icon.size },
  ...rest
}) => {
  const wrapperRef = useRef(null);
  const [hover, setHover] = useState(false);
  const [currentRating, setCurrentRating] = useState(0);

  return (
    <RatingWrapper
      width={rating.gutter * (max - 1) + iconSize * max}
      height={iconSize}
      mouseOver={hover}
      readOnly={readOnly}
      {...rest}
      onMouseOver={e => {
        setHover(true);
        onMouseOver(e);
      }}
      onMouseMove={e => {
        setCurrentRating(
          Math.ceil(
            (e.clientX - e.target.offsetLeft) /
              (wrapperRef.current.offsetWidth / max),
          ) || 1,
        );

        onMouseMove(e);
      }}
      onMouseLeave={e => {
        setHover(false);
        setCurrentRating(0);
        onMouseLeave(e);
      }}
      onClick={() => onRate(currentRating)}
      ref={wrapperRef}
    >
      {Array.from({ length: max }, (_, i) => {
        const diff = i + 1 - value;
        let width;

        if (currentRating >= i + 1 || (!hover && diff <= 0)) {
          return (
            <Icon
              fill={rating.backgroundColor}
              key={`filled-${i}`}
              width={iconSize}
              height={iconSize}
              viewBox={`0 0 ${iconSize} ${iconSize}`}
              style={{
                marginLeft: i !== 0 ? rating.gutter : undefined,
              }}
            />
          );
        }

        if (!hover && diff > 0 && diff < 1) {
          width = (1 - diff) * iconSize;
          const dWidth = diff * iconSize;
          const wViewBox = iconSize * (1 - diff);
          const dViewBox = iconSize * diff;

          return (
            <React.Fragment key={`half-${i}`}>
              <Icon
                fill={rating.backgroundColor}
                width={width}
                height={iconSize}
                viewBox={`0 0 ${wViewBox} ${iconSize}`}
                style={{
                  marginLeft: i !== 0 ? rating.gutter : undefined,
                }}
              />
              <Icon
                fill={gray[5]}
                width={dWidth}
                height={iconSize}
                viewBox={`${wViewBox} 0 ${dViewBox} ${iconSize}`}
                style={{
                  marginLeft: 'unset',
                }}
              />
            </React.Fragment>
          );
        }

        return (
          <Icon
            fill={gray[5]}
            key={`unfilled-${i}`}
            width={iconSize}
            height={iconSize}
            viewBox={`0 0 ${iconSize} ${iconSize}`}
            style={{
              marginLeft: i !== 0 ? rating.gutter : undefined,
            }}
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
  onMouseOver: func,
  onMouseMove: func,
  onMouseLeave: func,
};

Rating.defaultProps = {
  value: undefined,
  icon: {
    type: Star,
    size: 12,
  },
  max: 5,
  readOnly: true,
  onRate: rating => {}, // eslint-disable-line no-unused-vars
  onMouseOver: () => {},
  onMouseMove: () => {},
  onMouseLeave: () => {},
};

export default withTheme(Rating);
