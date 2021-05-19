import React from 'react';
import { string, bool } from 'prop-types';
import styled from 'styled-components';
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer';
import { MDXProvider } from '@mdx-js/react';

import * as components from '@gympass/yoga';
import * as icons from '@gympass/yoga-icons';
import * as helpers from '@gympass/yoga-helpers';
import * as system from '@gympass/yoga-system';

import {
  CodeBlock,
  PropsTable,
  InlineCode,
  TabbedView,
  Tab,
  Redirect,
  Summary,
  Tokens,
} from 'components';

import {
  ComponentTitle,
  SubHeading2,
  SubHeading3,
  SubHeading4,
  Paragraph,
  Img,
  Ul,
} from '../MDXElements/MDXElements';

const customComponents = prefix => ({
  h1: props => <ComponentTitle {...props} prefix={prefix} />,
  h2: props => <SubHeading2 {...props} />,
  h3: props => <SubHeading3 {...props} />,
  h4: props => <SubHeading4 {...props} />,
  p: props => <Paragraph {...props} />,
  ul: props => <Ul {...props} />,
  pre: 'div',
  code: props => <CodeBlock {...props} />,
  inlineCode: InlineCode,
  TabbedView: props => <TabbedView {...props} />,
  Tab: props => <Tab {...props} />,
  PropsTable,
  img: props => <Img {...props} prefix={prefix} />,
  Redirect: props => <Redirect {...props} />,
  Tokens: props => <Tokens {...props} />,
  TokensColors: props => <Tokens.Colors {...props} />,
  TokensCards: props => <Tokens.Cards {...props} />,
  ...components,
  ...icons,
  ...helpers,
  ...system,
});

const Wrapper = styled.div`
  display: flex;
  min-height: calc(100vh - 140px);
  grid-area: Documentation;
  padding: 30px 0 30px 100px;

  @media (max-width: 900px) {
    min-height: calc(100vh - 130px);
    padding: 80px 20px 20px;
  }
`;

const Documentation = ({ mdx, prefix }) => (
  <Wrapper>
    <div style={{ width: '100%' }}>
      <MDXProvider components={customComponents(prefix)}>
        <MDXRenderer>{mdx}</MDXRenderer>
      </MDXProvider>
    </div>
    <Summary />
  </Wrapper>
);

Documentation.propTypes = {
  mdx: string.isRequired,
  prefix: bool.isRequired,
};

export default Documentation;
