import React from 'react';
import styled, { withTheme } from 'styled-components';
import { number, element } from 'prop-types';

import Star from '../star.svg';

const SVG_DEFAULT_SIZE = 12;

const RatingWrapper = styled.div`
  position: relative;
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

    svg:not(:first-child) {
      margin-left: ${rating.gutter}px;
    }
  `}
`;

const DisabledIcons = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;

  ${({
    theme: {
      yoga: {
        colors: { gray },
      },
    },
  }) => `
    svg {
      fill: ${gray[3]};
    }
  `}
`;

const ActiveIcons = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;

  ${({
    theme: {
      yoga: {
        colors: { rating },
      },
    },
  }) => `
    svg {
      fill: ${rating};
    }
  `}
`;

const Rating = ({
  value,
  icon: Icon,
  iconQuantity,
  theme: {
    yoga: {
      components: { rating },
    },
  },
  ...rest
}) => (
  <RatingWrapper
    width={rating.gutter * (iconQuantity - 1) + rating.icon.size * iconQuantity}
    {...rest}
  >
    <DisabledIcons>
      {Array.from({ length: iconQuantity }, (_, i) => (
        <Icon
          key={`disabled-${i}`}
          width={rating.icon.size}
          height={rating.icon.size}
        />
      ))}
    </DisabledIcons>
    <ActiveIcons>
      {Array.from({ length: iconQuantity }, (_, i) => {
        const diff = i + 1 - value;
        let width;
        let wViewBox = SVG_DEFAULT_SIZE;

        if (diff <= 0) {
          width = rating.icon.size;
        } else if (diff > 0 && diff < 1) {
          width = (1 - diff) * rating.icon.size;
          wViewBox *= 1 - diff;
        } else {
          width = 0;
          wViewBox = 0;
        }

        return (
          <Icon
            width={width}
            height={rating.icon.size}
            viewBox={`0 0 ${wViewBox} ${SVG_DEFAULT_SIZE}`}
            key={`active-${i}`}
          />
        );
      })}
    </ActiveIcons>
  </RatingWrapper>
);

Rating.propTypes = {
  value: number,
  icon: element,
  iconQuantity: number,
};

Rating.defaultProps = {
  value: undefined,
  icon: Star,
  iconQuantity: 5,
};

export default withTheme(Rating);
