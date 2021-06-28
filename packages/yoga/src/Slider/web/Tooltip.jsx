import React from 'react';
import { bool, string, shape } from 'prop-types';
import styled from 'styled-components';
import Text from '../../Text';

const Wrapper = styled.div`
  width: 95px;
  position: absolute;
  bottom: 30px;
  left: 6px;

  transform: translateX(-50%);

  ${({
    hasRibbon,
    theme: {
      yoga: {
        components: { slider },
      },
    },
  }) => `
    background-color: ${
      hasRibbon
        ? slider.tooltip.ribbon.backgroundColor
        : slider.tooltip.backgroundColor
    };
    border-radius: ${slider.tooltip.radius}px;
    box-shadow: ${slider.tooltip.shadow};
  `}
`;

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
      yoga: {
        components: { slider },
      },
    },
  }) => `
    background-color: ${slider.tooltip.backgroundColor};
    border-radius: ${slider.tooltip.radius}px;
    padding: ${slider.tooltip.padding.top}px ${slider.tooltip.padding.right}px ${slider.tooltip.padding.bottom}px ${slider.tooltip.padding.left}px;
  `}
`;

const Arrow = styled.div`
  position: absolute;
  bottom: -5px;
  left: 50%;
  z-index: 2;

  width: 16px;
  height: 16px;

  border-radius: 3px;

  transform: rotate(45deg) translateX(-50%);
  transform-origin: left;

  ${({
    theme: {
      yoga: {
        components: {
          slider: {
            tooltip: { backgroundColor, shadow },
          },
        },
      },
    },
  }) => `
    background-color: ${backgroundColor};
    box-shadow: ${shadow};
  `}
`;

const Ribbon = styled(Text.Bold)`
  position: relative;
  text-align: center;
  display: block;

  ${({
    theme: {
      yoga: {
        components: { slider },
      },
    },
  }) => `
    padding: ${slider.tooltip.ribbon.padding.top}px ${slider.tooltip.ribbon.padding.right}px ${slider.tooltip.ribbon.padding.bottom}px ${slider.tooltip.ribbon.padding.left}px;

    border-top-left-radius: ${slider.tooltip.ribbon.radius}px;
    border-top-right-radius: ${slider.tooltip.ribbon.radius}px;
    color: ${slider.tooltip.ribbon.font.color};

    font-size: ${slider.tooltip.ribbon.font.size}px;
  `}
`;

const Title = styled(Text.Small)`
  display: block;
  text-align: center;
  ${({
    theme: {
      yoga: {
        components: { slider },
      },
    },
  }) => `
    color: ${slider.tooltip.font.color};
    font-weight: ${slider.tooltip.font.title.weight};
  `}
`;

const Description = styled(Text.Small)`
  display: block;
  text-align: center;
  ${({
    theme: {
      yoga: {
        components: { slider },
      },
    },
  }) => `
    color: ${slider.tooltip.font.color};
    font-weight: ${slider.tooltip.font.description.weight};
  `}
`;

const Tooltip = ({ data, ...props }) =>
  Object.keys(data).length ? (
    <Wrapper hasRibbon={Boolean(data.ribbon)} {...props}>
      {data.ribbon && <Ribbon as="span">{data.ribbon}</Ribbon>}
      {(data.title || data.description) && (
        <Tip>
          {data.title && <Title as="span">{data.title}</Title>}
          {data.description && (
            <Description as="span">{data.description}</Description>
          )}
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
  }),
};

Tooltip.defaultProps = {
  data: {},
};

export default Tooltip;
