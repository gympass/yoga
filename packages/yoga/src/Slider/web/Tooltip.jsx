import React from 'react';
import { bool, string, shape } from 'prop-types';
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

const Tip = styled.div(
  ({
    theme: {
      components: { slider },
    },
  }) => `
    background-color: ${slider.tooltip.backgroundColor};
    border-radius: ${slider.tooltip.radius}px;
    padding: ${slider.tooltip.padding.top}px ${slider.tooltip.padding.right}px ${slider.tooltip.padding.bottom}px ${slider.tooltip.padding.left}px;
    position: relative;
    z-index: 3;
  `,
);

const Arrow = styled.div(
  ({
    theme: {
      components: {
        slider: {
          tooltip: { backgroundColor, shadow },
        },
      },
    },
  }) => `
    background-color: ${backgroundColor};
    border-radius: 3px;
    bottom: -5px;
    box-shadow: ${shadow};
    height: 16px;
    left: 50%;
    position: absolute;
    transform: rotate(45deg) translateX(-50%);
    transform-origin: left;
    width: 16px;
    z-index: 2;
  `,
);

const Ribbon = styled.div(
  ({
    theme: {
      components: { slider },
    },
  }) => `
    border-top-left-radius: ${slider.tooltip.ribbon.radius}px;
    border-top-right-radius: ${slider.tooltip.ribbon.radius}px;
    color: ${slider.tooltip.ribbon.font.color};
    font-size: ${slider.tooltip.ribbon.font.size}px;
    font-weight: ${slider.tooltip.ribbon.font.weight};
    padding: ${slider.tooltip.ribbon.padding.top}px ${slider.tooltip.ribbon.padding.right}px ${slider.tooltip.ribbon.padding.bottom}px ${slider.tooltip.ribbon.padding.left}px;
    position: relative;
    text-align: center;
  `,
);

const Title = styled.div(
  ({
    theme: {
      components: { slider },
    },
  }) => `
    color: ${slider.tooltip.font.color};
    font-size: ${slider.tooltip.font.title.size}px;
    font-weight: ${slider.tooltip.font.title.weight};
    text-align: center;
  `,
);

const Description = styled.div(
  ({
    theme: {
      components: { slider },
    },
  }) => `
    color: ${slider.tooltip.font.color};
    font-size: ${slider.tooltip.font.description.size}px;
    font-weight: ${slider.tooltip.font.description.weight};
    text-align: center;
  `,
);

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

Tooltip.propTypes = {
  data: shape({
    ribbon: string,
    title: string,
    description: string,
  }).isRequired,
};

export default Tooltip;
