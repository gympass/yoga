import React from 'react';
import { string, node } from 'prop-types';
import styled from 'styled-components';
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer';
import { MDXProvider } from '@mdx-js/react';
import * as components from '@gympass/yoga';

import {
  CodeBlock,
  PropsTable,
  GithubTitle,
  InlineCode,
  TabbedView,
  Tab,
} from '..';

const customComponents = {
  h1: GithubTitle,
  h2: ({ children, ...props }) => (
    <h2
      id={(typeof children === 'string' ? children : '')
        .replace(/\s+/g, '-')
        .toLowerCase()}
      {...props}
    >
      {children}
    </h2>
  ),
  code: CodeBlock,
  inlineCode: InlineCode,
  TabbedView: ({ children, ...rest }) => (
    <TabbedView {...rest}>{children}</TabbedView>
  ),
  Tab: ({ children, ...rest }) => <Tab {...rest}>{children}</Tab>,
  PropsTable,
  ...components,
};

const Wrapper = styled.div`
  grid-area: Documentation;
  padding-bottom: 40px;
  padding-left: 50px;
  padding-right: 50px;
`;

customComponents.h2.propTypes = {
  children: node.isRequired,
};

const Documentation = ({ mdx }) => (
  <Wrapper>
    <MDXProvider components={customComponents}>
      <MDXRenderer>{mdx}</MDXRenderer>
    </MDXProvider>
  </Wrapper>
);

Documentation.propTypes = {
  mdx: string.isRequired,
};

export default Documentation;
