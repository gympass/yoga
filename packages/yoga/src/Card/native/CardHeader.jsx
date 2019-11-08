import React from 'react';
import { node, shape, string, bool } from 'prop-types';
import styled from 'styled-components';

const CardHeaderWrapper = styled.View`
  position: relative;
  display: flex;
  width: 100%;
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
      colors,
      components: {
        card: {
          header: {
            ribbon: { padding, radii },
          },
        },
      },
    },
  }) => `
    position: absolute;
    flex-basis: 60%;
    right: -16px;
    padding: ${padding.x}px ${padding.y}px;
    border-top-left-radius: ${radii.topLeft}px;
    border-bottom-left-radius: ${radii.bottomLeft}px;
    background: ${colors.primary[1]};

    ${secondary && `background: ${colors.secondary[1]};`}
  `}
`;

const RibbonText = styled.Text`
  ${({
    secondary,
    theme: {
      colors,
      components: {
        card: {
          header: {
            ribbon: {
              font: { weight, size },
            },
          },
        },
      },
    },
  }) => `
    font-size: ${size}px;
    font-weight: ${weight};
    color: ${colors.primary[3]};
    ${secondary && `color: ${colors.secondary[3]}`}
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
