import React from 'react';
import { string, node } from 'prop-types';
import styled from 'styled-components';

import Text from '../../Text';
import Box from '../../Box';

const Wrapper = styled(Box).attrs(
  ({
    theme: {
      yoga: {
        components: { slider },
      },
    },
  }) => ({
    bgColor: slider.tooltip.ribbon.backgroundColor,
    bottom: 38,
    bRadius: slider.tooltip.radius,
    elevation: slider.tooltip.shadow,
    position: 'absolute',
    width: 95,
  }),
)``;

const Tip = styled.View(
  ({
    theme: {
      yoga: {
        components: { slider },
      },
    },
  }) => `
    background-color: ${slider.tooltip.backgroundColor};
    border-radius: ${slider.tooltip.radius}px;
    padding: ${slider.tooltip.padding.top}px ${slider.tooltip.padding.right}px ${slider.tooltip.padding.bottom}px ${slider.tooltip.padding.left}px;
    justify-content: center;
    width: 95px;
  `,
);

const Title = styled(Text.Body2)(
  ({
    theme: {
      yoga: {
        components: { slider },
      },
    },
  }) => `
    color: ${slider.tooltip.font.color};
    margin-bottom: 5px;
    text-align: center;
  `,
);

const Description = styled(Text.Body2)(
  ({
    theme: {
      yoga: {
        components: { slider },
      },
    },
  }) => `
    color: ${slider.tooltip.font.color};
    text-align: center;
  `,
);

const Arrow = styled(Box).attrs(
  ({
    theme: {
      yoga: {
        components: { slider },
      },
    },
  }) => ({
    alignSelf: 'center',
    bottom: '10px',
    bRadius: '3px',
    bgColor: slider.tooltip.backgroundColor,
    height: 16,
    width: 16,
    mb: -17,
    position: 'absolute',
  }),
)`
  transform: rotate(45deg);
`;

const RibbonWrapper = styled.View(
  ({
    theme: {
      yoga: {
        components: { slider },
      },
    },
  }) => `
    align-items: center;
    background-color: ${slider.tooltip.ribbon.backgroundColor};
    border-top-left-radius: ${slider.tooltip.ribbon.radius}px;
    border-top-right-radius: ${slider.tooltip.ribbon.radius}px;
    justify-content: center;
    padding: ${slider.tooltip.ribbon.padding.top}px ${slider.tooltip.ribbon.padding.right}px ${slider.tooltip.ribbon.padding.bottom}px ${slider.tooltip.ribbon.padding.left}px;
    position: relative;
  `,
);

const RibbonText = styled(Text.Body2).attrs(() => ({
  bold: true,
}))(
  ({
    theme: {
      yoga: {
        components: { slider },
      },
    },
  }) => `
    color: ${slider.tooltip.ribbon.font.color};

    font-size: ${slider.tooltip.ribbon.font.size}px;
    line-height: undefined;

    text-align: center;
  `,
);

const Ribbon = ({ children, ...props }) => (
  <RibbonWrapper {...props}>
    <RibbonText>{children}</RibbonText>
  </RibbonWrapper>
);

Ribbon.propTypes = {
  children: node.isRequired,
};

const Tooltip = ({
  title = undefined,
  description = undefined,
  ribbon = undefined,
  ...props
}) => (
  <Wrapper>
    <Arrow />
    {ribbon && <Ribbon>{ribbon}</Ribbon>}
    {(title || description) && (
      <Tip {...props}>
        {title && <Title>{title}</Title>}
        {description && <Description>{description}</Description>}
      </Tip>
    )}
  </Wrapper>
);

Tooltip.propTypes = {
  title: string,
  description: string,
  ribbon: string,
};

export default Tooltip;
