import React from 'react';
import { node } from 'prop-types';
import styled from 'styled-components';

const CardContainer = styled.div`
  ${({
    theme: {
      colors,
      components: {
        card: { padding, radii, elevation },
      },
    },
  }) => `
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    width: 100%;
    padding: ${padding}px;
    border-radius: ${radii}px;
    background-color: ${colors.white};
    box-shadow: ${elevation};
  `}
`;

const Card = ({ children, ...rest }) => (
  <CardContainer {...rest}>{children}</CardContainer>
);

Card.propTypes = {
  children: node,
};

Card.defaultProps = {
  children: 'Card',
};

export default Card;
