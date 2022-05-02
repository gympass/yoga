import React from 'react';
import styled from 'styled-components';

const StyledSnackbar = styled.Text`
  ${() => ``}
`;

const Snackbar = props => <StyledSnackbar {...props} />;

Snackbar.propTypes = {};

Snackbar.defaultProps = {};

export default Snackbar;
