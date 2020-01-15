import React from 'react';
import styled, { withTheme } from 'styled-components';
import { number, func } from 'prop-types';

import { Star } from '@gympass/yoga-icons';

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

/** Use the Rating component to view other people's opinions and experiences. */
const Rating = ({
  value,
  icon: Icon,
  max,
  theme: {
    yoga: {
      colors: { gray },
      components: { rating },
    },
  },
  ...rest
}) => (
  <RatingWrapper
    width={rating.gutter * (max - 1) + rating.icon.size * max}
    {...rest}
  >
    {Array.from({ length: max }, (_, i) => {
      const diff = i + 1 - value;

      if (diff <= 0) {
        return (
          <Icon
            fill={rating.backgroundColor}
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
              fill={rating.backgroundColor}
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
  /** The icon to display */
  icon: func,
  /** Maximum rating */
  max: number,
};

Rating.defaultProps = {
  value: undefined,
  icon: Star,
  max: 5,
};

export default withTheme(Rating);
