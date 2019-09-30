import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer';
import { MDXProvider } from '@mdx-js/react';
import * as components from '@gympass/design-system';
import CodeBlock from '../CodeBlock/CodeBlock';
import PropsTable from '../PropsTable';

const customComponents = {
  h2: ({ children, ...props }) => (
    <h2 id={children.replace(/\s+/g, '-').toLowerCase()} {...props}>
      {children}
    </h2>
  ),
  code: CodeBlock,
  PropsTable,
  ...components,
};

const Wrapper = styled.div`
  grid-area: Documentation;
  padding-left: 50px;
`;

const Doc = ({ mdx }) => (
  <Wrapper>
    <MDXProvider components={customComponents}>
      <MDXRenderer>{mdx}</MDXRenderer>
    </MDXProvider>
  </Wrapper>
);

Doc.propTypes = {
  children: PropTypes.node,
};

export default Doc;
