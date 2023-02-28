import { node, string } from 'prop-types';
import React from 'react';

import styled from 'styled-components';

const Content = ({ children, className }) => {
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

  return <ContentWrapper className={className}>{children}</ContentWrapper>;
};

Content.propTypes = {
  children: node.isRequired,
  className: string,
};

Content.defaultProps = {
  className: '',
};

export default Content;
