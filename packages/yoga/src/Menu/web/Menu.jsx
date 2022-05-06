import React from 'react';
import styled from 'styled-components';

const StyledMenu = styled.div`
  ${({
    theme: {
      yoga: {
        components: { menu },
      },
    },
  }) => `
    min-width: ${menu.width.min}px;
  `}
`;

const Menu = props => <StyledMenu {...props} />;

Menu.propTypes = {};

Menu.defaultProps = {};

export default Menu;
