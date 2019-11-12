import React from 'react';
import { node, shape, string, bool } from 'prop-types';
import styled from 'styled-components';

const CardHeaderWrapper = styled.View`
  position: relative;
  width: 100%;
  flex-direction: row;
  align-content: center;
  align-items: center;
  justify-content: space-between;
`;

const HeaderContent = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`;

const Ribbon = styled.View(
  ({
    secondary,
    theme: {
      components: { card },
    },
  }) => `
    position: absolute;
    flex-wrap: wrap;
    right: 16px;
    padding:
      ${card.header.ribbon.padding.top}px
      ${card.header.ribbon.padding.right}px
      ${card.header.ribbon.padding.bottom}px
      ${card.header.ribbon.padding.left}px;
    border-top-left-radius: ${card.header.ribbon.radii.topLeft}px;
    border-bottom-left-radius: ${card.header.ribbon.radii.bottomLeft}px;
    
    background: ${
      secondary
        ? `${card.header.ribbon.background.secondary}`
        : `${card.header.ribbon.background.primary}`
    };
`,
);

const RibbonText = styled.Text(
  ({
    secondary,
    theme: {
      components: { card },
    },
  }) => `
    font-size: ${card.header.ribbon.font.size}px;
    font-weight: ${card.header.ribbon.font.weight};
    color: ${
      secondary
        ? `${card.header.ribbon.color.secondary}`
        : `${card.header.ribbon.color.primary}`
    };
`,
);

const CardHeader = ({ children, ribbon, ...rest }) => (
  <CardHeaderWrapper {...rest}>
    <HeaderContent>{children}</HeaderContent>
    {ribbon && (
      <Ribbon secondary={ribbon.secondary}>
        <RibbonText secondary={ribbon.secondary}>{ribbon.label}</RibbonText>
      </Ribbon>
    )}
  </CardHeaderWrapper>
);

CardHeader.displayName = 'Card.Header';

CardHeader.propTypes = {
  children: node,
  ribbon: shape({
    label: string,
    secondary: bool,
  }),
};

CardHeader.defaultProps = {
  children: undefined,
  ribbon: undefined,
};

export default CardHeader;
