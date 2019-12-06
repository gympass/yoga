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
  Redirect,
  Summary,
} from 'components';

const customComponents = {
  h1: ComponentTitle,
  pre: 'div',
  code: CodeBlock,
  inlineCode: InlineCode,
  TabbedView: props => <TabbedView {...props} />,
  Tab: props => <Tab {...props} />,
  PropsTable,
  ExpoSnack,
  Redirect: props => <Redirect {...props} />,
  ...components,
};

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  grid-area: Documentation;
  padding: 30px 0 30px 100px;

  @media (max-width: 900px) {
    padding: 80px 20px 20px;
  }
`;

const Documentation = ({ mdx }) => (
  <Wrapper>
    <div style={{ width: '100%' }}>
      <MDXProvider components={customComponents}>
        <MDXRenderer>{mdx}</MDXRenderer>
      </MDXProvider>
    </div>
    <Summary />
  </Wrapper>
);

Documentation.propTypes = {
  mdx: string.isRequired,
};

export default Documentation;
