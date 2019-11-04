import React from 'react';
import styled from 'styled-components';

const Tip = styled.View`
  z-index: 3;
  justify-content: center;

  ${({
    theme: {
      components: {
        slider: {
          tooltip: {
            backgroundColor,
            radius,
            height,
            padding: { top, right, bottom, left },
            width,
          },
        },
      },
    },
  }) => `
    background-color: ${backgroundColor};
    border-radius: ${radius}px;
    padding: ${top}px ${right}px ${bottom}px ${left}px;
    height: ${height}px;
    width: ${width}px;
  `}
`;

const Title = styled.Text`
  margin-bottom: 5px;
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
    font-size: ${size};
    font-weight: ${weight};
  `}
`;

const Description = styled.Text`
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
    font-size: ${size};
    font-weight: ${weight};
  `}
`;

const Arrow = styled.View`
  border-radius: 3px;
  transform: rotate(45deg);
  position: absolute;
  z-index: 2;
  bottom: -5px;
  align-self: center;
  ${({
    theme: {
      components: {
        slider: {
          tooltip: {
            backgroundColor,
            shadow,
            arrow: { height, width },
          },
        },
      },
    },
  }) => `
    background-color: ${backgroundColor};
    box-shadow: ${shadow};
    height: ${height};
    width: ${width};
  `}
`;

const RibbonWrapper = styled.View`
  ${({
    theme: {
      components: {
        slider: {
          tooltip: {
            ribbon: { backgroundColor, radius, width },
          },
        },
      },
    },
  }) => `
    background-color: ${backgroundColor};
    border-top-left-radius: ${radius}px;
    border-top-right-radius: ${radius}px;
    bottom: 50px;
    height: 32px;
    width: ${width}px;
  `}
  align-items: center;
  justify-content: center;
  padding-bottom: 5px;
  position: absolute;
`;

const RibbonText = styled.Text`
  ${({
    theme: {
      components: {
        slider: {
          tooltip: {
            ribbon: {
              font: { color, size, weight },
            },
          },
        },
      },
    },
  }) => `
  color: ${color};
  font-size: ${size};
  font-weight: ${weight};
`}
  text-align: center;
`;

const Ribbon = ({ children, tooltipHeight, ...props }) => (
  <RibbonWrapper tooltipHeight={tooltipHeight} {...props}>
    <RibbonText>{children}</RibbonText>
  </RibbonWrapper>
);

const Tooltip = ({ title, description, ribbon, ...props }) => (
  <>
    {ribbon && <Ribbon>{ribbon}</Ribbon>}
    {(title || description) && (
      <Tip {...props}>
        {title && <Title>{title}</Title>}
        {description && <Description>{description}</Description>}
      </Tip>
    )}
    <Arrow />
  </>
);

export { Tooltip, Ribbon, Arrow };
