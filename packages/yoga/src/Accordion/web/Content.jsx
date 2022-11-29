import { node } from 'prop-types';
import React from 'react';

import styled from 'styled-components';

const Content = ({ children }) => {
  const ContentWrapper = styled.div`
    ${({
      theme: {
        yoga: {
          components: { accordion },
        },
      },
    }) => {
      return `
      padding: 0 ${accordion.padding.standard}px ${accordion.padding.standard}px;
    `;
    }}
  `;

  return <ContentWrapper>{children}</ContentWrapper>;
};

Content.propTypes = {
  children: node.isRequired,
};

export default Content;
