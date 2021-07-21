import React from 'react';
import styled from 'styled-components';

const StyledSearchList = styled.div`
  ${({
    theme: {
      yoga: {
        components: { searchlist },
      },
    },
  }) => ``}
`;

const SearchList = props => <StyledSearchList {...props} />;

SearchList.propTypes = {};

SearchList.defaultProps = {};

export default SearchList;
