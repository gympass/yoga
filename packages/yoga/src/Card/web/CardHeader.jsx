import React from 'react';
import { node, shape, string, bool } from 'prop-types';
import styled from 'styled-components';

const CardHeaderWrapper = styled.div`
  ${({ ribbon }) => `
    display: flex;
    flex-direction: row;
    align-content: center;
    align-items: center;
    justify-content: space-between;

    .content {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      ${ribbon ? `flex-basis: 40%;` : `flex-basis: 100%;`}
    }
  `}
`;

const Ribbon = styled.div`
  ${({
    secondary,
    theme: {
      components: {
        card: {
          header: {
            ribbon: {
              right,
              background,
              padding,
              radii,
              font: { weight, size, color },
            },
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
    font-size: ${size}px;
    font-weight: ${weight};

    ${
      secondary
        ? `background: ${background.secondary}; color: ${color.secondary};`
        : `background: ${background.primary}; color: ${color.primary};`
    }
  `}
`;

const CardHeader = ({ children, ribbon, ...rest }) => (
  <CardHeaderWrapper {...rest}>
    <div className="content" ribbon={ribbon}>
      {children}
    </div>
    {ribbon && <Ribbon secondary={ribbon.secondary}>{ribbon.label}</Ribbon>}
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
  children: 'span',
  ribbon: null,
};

export default CardHeader;
