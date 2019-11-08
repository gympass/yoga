import React from 'react';
import { node, shape, string, bool } from 'prop-types';
import styled from 'styled-components';

const CardHeaderWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;
  justify-content: space-between;
`;

const CardHeaderContent = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  ${({ ribbon }) => `
    ${ribbon ? `flex-basis: 40%;` : `flex-basis: 100%;`}
  `}
`;

const Ribbon = styled.View`
  ${({
    secondary,
    theme: {
      components: {
        card: {
          header: {
            ribbon: { right, background, padding, radii },
          },
        },
      },
    },
  }) => `
    position: relative;
    flex-basis: 60%;
    right: ${right}px;
    padding: ${padding.x}px ${padding.y}px;
    border-top-left-radius: ${radii.topLeft}px;
    border-bottom-left-radius: ${radii.bottomLeft}px;
    ${
      secondary
        ? `background: ${background.secondary};`
        : `background: ${background.primary};`
    }
  `}
`;

const RibbonText = styled.Text`
  ${({
    secondary,
    theme: {
      components: {
        card: {
          header: {
            ribbon: {
              font: { weight, size, color },
            },
          },
        },
      },
    },
  }) => `
    font-size: ${size}px;
    font-weight: ${weight};
    ${secondary ? `color: ${color.secondary};` : `color: ${color.primary};`}
  `}
`;

const CardHeader = ({ children, ribbon, ...rest }) => (
  <CardHeaderWrapper {...rest}>
    <CardHeaderContent ribbon={ribbon}>{children}</CardHeaderContent>
    {ribbon && (
      <Ribbon secondary={ribbon.secondary}>
        <RibbonText secondary={ribbon.secondary}>{ribbon.label}</RibbonText>
      </Ribbon>
    )}
  </CardHeaderWrapper>
);

CardHeader.propTypes = {
  children: node,
  ribbon: shape({
    label: string,
    secondary: bool,
  }),
};

CardHeader.defaultProps = {
  children: 'Text',
  ribbon: null,
};

export default CardHeader;
