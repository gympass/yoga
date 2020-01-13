import React from 'react';
import styled, { withTheme } from 'styled-components/native';
import { number, func } from 'prop-types';

import Star from '../star.svg';

const SVG_DEFAULT_SIZE = 12;

const RatingWrapper = styled.View`
  flex-direction: row;
  ${({
    width,
    theme: {
      yoga: {
        components: { rating },
      },
    },
  }) => `
    width: ${width}px;
    height: ${rating.icon.size}px;
  `}
`;

const Rating = ({
  value,
  icon: Icon,
  iconQuantity,
  theme: {
    yoga: {
      colors: { rating: color, gray },
      components: { rating },
    },
  },
  ...rest
}) => (
  <RatingWrapper
    width={rating.gutter * (iconQuantity - 1) + rating.icon.size * iconQuantity}
    {...rest}
  >
    {Array.from({ length: iconQuantity }, (_, i) => {
      const diff = i + 1 - value;

      if (diff <= 0) {
        return (
          <Icon
            fill={color}
            key={`filled-${i}`}
            width={rating.icon.size}
            height={rating.icon.size}
            viewBox={`0 0 ${SVG_DEFAULT_SIZE} ${SVG_DEFAULT_SIZE}`}
            style={{
              marginLeft: i !== 0 ? rating.gutter : undefined,
            }}
          />
        );
      }

      if (diff > 0 && diff < 1) {
        const width = (1 - diff) * rating.icon.size;
        const dWidth = diff * rating.icon.size;
        const wViewBox = SVG_DEFAULT_SIZE * (1 - diff);
        const dViewBox = SVG_DEFAULT_SIZE * diff;

        return (
          <React.Fragment key={`half-${i}`}>
            <Icon
              fill={color}
              width={width}
              height={rating.icon.size}
              viewBox={`0 0 ${wViewBox} ${SVG_DEFAULT_SIZE}`}
              style={{
                marginLeft: i !== 0 ? rating.gutter : undefined,
              }}
            />
            <Icon
              fill={gray[5]}
              width={dWidth}
              height={rating.icon.size}
              viewBox={`${wViewBox} 0 ${dViewBox} ${SVG_DEFAULT_SIZE}`}
            />
          </React.Fragment>
        );
      }

      return (
        <Icon
          fill={gray[5]}
          key={`unfilled-${i}`}
          width={rating.icon.size}
          height={rating.icon.size}
          viewBox={`0 0 ${SVG_DEFAULT_SIZE} ${SVG_DEFAULT_SIZE}`}
          style={{
            marginLeft: i !== 0 ? rating.gutter : undefined,
          }}
        />
      );
    })}
  </RatingWrapper>
);

Rating.propTypes = {
  value: number,
  icon: func,
  iconQuantity: number,
};

Rating.defaultProps = {
  value: undefined,
  icon: Star,
  iconQuantity: 5,
};

export default withTheme(Rating);
