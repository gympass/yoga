import React from 'react';
import styled from 'styled-components';

const StyledSnackbar = styled.div`
  ${({
    theme: {
      yoga: {
        components: { snackbar },
      },
    },
  }) => `
    height: ${snackbar.height.small}px;
  `}
`;

const Snackbar = props => <StyledSnackbar {...props} />;

Snackbar.propTypes = {};

Snackbar.defaultProps = {};

export default Snackbar;
