import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  bottom: 30px;
  left: 6px;
  position: absolute;
  transform: translateX(-50%);
  ${({
    dragging,
    theme: {
      components: {
        slider: {
          tooltip: {
            shadow,
            radius,
            ribbon: { backgroundColor },
          },
        },
      },
    },
  }) => `
    background-color: ${backgroundColor};
    border-radius: ${radius}px;
    box-shadow: ${shadow};
    display: ${dragging ? 'block' : 'none'};
  `}
`;

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
    height: ${height}px;
    width: ${width}px;
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
              width,
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
    width: ${width}px;
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

const Tooltip = ({ dragging, title, description, ribbon, ...props }) => (
  <Wrapper dragging={dragging} {...props}>
    <Ribbon>{ribbon}</Ribbon>
    <Tip>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Tip>
    <Arrow />
  </Wrapper>
);

export default Tooltip;
