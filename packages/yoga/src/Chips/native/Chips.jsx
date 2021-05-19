import React from 'react';
import styled from 'styled-components';

const StyledChips = styled.Text`
  ${({
    theme: {
      yoga: {
        components: { chips },
      },
    },
  }) => ``}
`;

const Chips = props => <StyledChips {...props} />;

Chips.propTypes = {};

Chips.defaultProps = {};

export default Chips;
