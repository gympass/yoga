import React from 'react';
import { bool } from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div(
  ({
    hasRibbon,
    theme: {
      components: { slider },
    },
  }) => `
  bottom: 30px;
  left: 6px;
  width: 95px;
  position: absolute;
  transform: translateX(-50%);
    background-color: ${
      hasRibbon
        ? slider.tooltip.ribbon.backgroundColor
        : slider.tooltip.backgroundColor
    };
    border-radius: ${slider.tooltip.radius}px;
    box-shadow: ${slider.tooltip.shadow};
`,
);

Wrapper.propTypes = {
  hasRibbon: bool,
};

Wrapper.defaultProps = {
  hasRibbon: false,
};

const Tip = styled.div`
  position: relative;
  z-index: 3;

  ${({
    theme: {
      components: {
        slider: {
          tooltip: {
            backgroundColor,
            radius,
            padding: { top, right, bottom, left },
          },
        },
      },
    },
  }) => `
    background-color: ${backgroundColor};
    border-radius: ${radius}px;
    padding: ${top}px ${right}px ${bottom}px ${left}px;
  `}
`;

const Arrow = styled.div`
  border-radius: 3px;
  bottom: -5px;
  left: 50%;
  position: absolute;
  transform: rotate(45deg) translateX(-50%);
  transform-origin: left;
  z-index: 2;
  ${({
    theme: {
      components: {
        slider: {
          tooltip: { backgroundColor, shadow },
        },
      },
    },
  }) => `
    background-color: ${backgroundColor};
    box-shadow: ${shadow};
    height: 16px;
    width: 16px;
  `}
`;

const Ribbon = styled.div`
  position: relative;
  text-align: center;
  ${({
    theme: {
      components: {
        slider: {
          tooltip: {
            ribbon: {
              font: { color, size, weight },
              radius,
              padding: { top, right, bottom, left },
            },
          },
        },
      },
    },
  }) => `
    border-top-left-radius: ${radius}px;
    border-top-right-radius: ${radius}px;
    color: ${color};
    font-size: ${size}px;
    font-weight: ${weight};
    padding: ${top}px ${right}px ${bottom}px ${left}px;
  `}
`;

const Title = styled.div`
  text-align: center;
  ${({
    theme: {
      components: {
        slider: {
          tooltip: {
            font: {
              color,
              title: { size, weight },
            },
          },
        },
      },
    },
  }) => `
    color: ${color};
    font-size: ${size}px;
    font-weight: ${weight};
  `}
`;

const Description = styled.div`
  text-align: center;
  ${({
    theme: {
      components: {
        slider: {
          tooltip: {
            font: {
              color,
              description: { size, weight },
            },
          },
        },
      },
    },
  }) => `
    color: ${color};
    font-size: ${size}px;
    font-weight: ${weight};
  `}
`;

const Tooltip = ({ data, ...props }) =>
  data ? (
    <Wrapper hasRibbon={Boolean(data.ribbon)} {...props}>
      {data.ribbon && <Ribbon>{data.ribbon}</Ribbon>}
      {(data.title || data.description) && (
        <Tip>
          {data.title && <Title>{data.title}</Title>}
          {data.description && <Description>{data.description}</Description>}
        </Tip>
      )}
      <Arrow />
    </Wrapper>
  ) : null;

export default Tooltip;
