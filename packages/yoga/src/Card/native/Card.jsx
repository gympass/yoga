import React from 'react';
import { node } from 'prop-types';
import styled from 'styled-components';

const CardContainer = styled.View`
  ${({
    theme: {
      components: {
        card: { padding, background, radii, elevation },
      },
    },
  }) => `
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    width: 100%;
    padding: ${padding}px;
    border-radius: ${radii}px;
    background-color: ${background.default};
    box-shadow: ${elevation};
    elevation: 4;
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
