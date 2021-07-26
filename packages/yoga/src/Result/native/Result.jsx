import React from 'react';
import styled from 'styled-components';

const StyledResult = styled.Text`
  ${({
    theme: {
      yoga: {
        components: { result },
      },
    },
  }) => ``}
`;

const Result = props => <StyledResult {...props} />;

Result.propTypes = {};

Result.defaultProps = {};

export default Result;
