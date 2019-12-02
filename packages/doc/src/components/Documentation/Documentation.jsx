import React from 'react';
import { string, node } from 'prop-types';
import styled from 'styled-components';
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer';
import { MDXProvider } from '@mdx-js/react';
import * as components from '@gympass/yoga';
import ExpoSnack from 'react-expo-snack';
import {
  CodeBlock,
  PropsTable,
  ComponentTitle,
  InlineCode,
  TabbedView,
  Tab,
} from '..';

const customComponents = {
  h1: ComponentTitle,
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
  pre: 'div',
  code: CodeBlock,
  inlineCode: InlineCode,
  TabbedView: ({ ...props }) => <TabbedView {...props} />,
  Tab: ({ ...props }) => <Tab {...props} />,
  PropsTable,
  ExpoSnack,
  ...components,
};

const Wrapper = styled.div`
  height: 100%;
  grid-area: Documentation;
  padding: 30px 100px;

  @media (max-width: 900px) {
    padding: 80px 20px 20px;
  }
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
