import React from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.View(
  ({
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
    bottom: 30px;
    border-radius: ${radius}px;
    box-shadow: ${shadow};
    position: absolute;
    width: 95px;
    z-index: 1;
  `,
);

const Tip = styled.View(
  ({
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
    justify-content: center;
    width: 95px;
    z-index: 3;
  `,
);

const Title = styled.Text(
  ({
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
    margin-bottom: 5px;
    text-align: center;
  `,
);

const Description = styled.Text(
  ({
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
    text-align: center;
  `,
);

const Arrow = styled.View(
  ({
    theme: {
      components: {
        slider: {
          tooltip: { backgroundColor, shadow },
        },
      },
    },
  }) => `
    align-self: center;
    background-color: ${backgroundColor};
    border-radius: 3px;
    bottom: -5px;
    box-shadow: ${shadow};
    height: 16px;
    position: absolute;
    transform: rotate(45deg);
    width: 16px;
    z-index: 2;
  `,
);

const RibbonWrapper = styled.View(
  ({
    theme: {
      components: {
        slider: {
          tooltip: {
            ribbon: {
              backgroundColor,
              radius,
              padding: { top, right, bottom, left },
            },
          },
        },
      },
    },
  }) => `
    align-items: center;
    background-color: ${backgroundColor};
    border-top-left-radius: ${radius}px;
    border-top-right-radius: ${radius}px;
    justify-content: center;
    padding: ${top}px ${right}px ${bottom}px ${left}px;
    position: relative;
  `,
);

const RibbonText = styled.Text(
  ({
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
    text-align: center;
  `,
);

const Ribbon = ({ children, ...props }) => (
  <RibbonWrapper {...props}>
    <RibbonText>{children}</RibbonText>
  </RibbonWrapper>
);

const Tooltip = ({ title, description, ribbon, ...props }) => (
  <Wrapper>
    {ribbon && <Ribbon>{ribbon}</Ribbon>}
    {(title || description) && (
      <Tip {...props}>
        {title && <Title>{title}</Title>}
        {description && <Description>{description}</Description>}
      </Tip>
    )}
    <Arrow />
  </Wrapper>
);

Tooltip.propTypes = {
  title: string,
  description: string,
  ribbon: string,
};

Tooltip.defaultProps = {
  title: undefined,
  description: undefined,
  ribbon: undefined,
};

export { Tooltip, Ribbon, Arrow };
