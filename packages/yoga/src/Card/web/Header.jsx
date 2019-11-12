import React from 'react';
import { node, shape, string, bool } from 'prop-types';
import styled from 'styled-components';

const CardHeaderWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-content: center;
  align-items: center;
`;

const HeaderContent = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Ribbon = styled.div(
  ({
    secondary,
    theme: {
      components: { card },
    },
  }) => `
    position: absolute;
    flex-wrap: wrap;
    right: 0;
    padding:
      ${card.header.ribbon.padding.top}px
      ${card.header.ribbon.padding.right}px
      ${card.header.ribbon.padding.bottom}px
      ${card.header.ribbon.padding.left}px;
      
    border-top-left-radius: ${card.header.ribbon.radii.topLeft}px;
    border-bottom-left-radius: ${card.header.ribbon.radii.bottomLeft}px;
    font-size: ${card.header.ribbon.font.size}px;
    font-weight: ${card.header.ribbon.font.weight};

    background: ${
      secondary
        ? `${card.header.ribbon.background.secondary}`
        : `${card.header.ribbon.background.primary}`
    };

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
    {ribbon && <Ribbon secondary={ribbon.secondary}>{ribbon.label}</Ribbon>}
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
