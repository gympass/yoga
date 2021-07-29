import React from 'react';
import styled, { withTheme } from 'styled-components';
import Inspector from 'react-inspector';

const Wrapper = styled.div`
  * {
    background-color: transparent !important;
  }
`;

const ReactInspector = ({ theme }) => (
  <Wrapper>
    {typeof window !== 'undefined' && Inspector && (
      <Inspector data={theme} name="theme" expandLevel={2} />
    )}
  </Wrapper>
);

export default withTheme(ReactInspector);
