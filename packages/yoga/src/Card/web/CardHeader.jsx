import React from 'react';
import { node, shape, string, bool } from 'prop-types';
import styled from 'styled-components';

const CardHeaderWrapper = styled.div`
  ${({ ribbon }) => `
    position: relative;
    display: flex;
    width: 100%;
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
      colors,
      components: {
        card: {
          header: {
            ribbon: { padding, radii, font },
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
    font-size: ${font.size}px;
    font-weight: ${font.weight};
    background: ${colors.primary[1]};
    color: ${colors.primary[3]};

    ${secondary &&
      `background: ${colors.secondary[1]}; color: ${colors.secondary[3]};`}
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
