import React from 'react';
import { string, shape } from 'prop-types';
import { graphql } from 'gatsby';
import { handleItems, handleNavigation } from './nav';

import { Layout } from '../components';
import config from '../../config';

const {
  sidebar: { forcedNavOrder },
} = config;

const MDXRuntimeTest = props => {
  const { data } = props;
  const {
    allMdx: { edges },
    mdx: { body },
  } = data;

  const navItems = handleItems(edges, forcedNavOrder);
  const nav = handleNavigation(edges, forcedNavOrder, navItems);

  return <Layout nav={nav} doc={body} />;
};

export const pageQuery = graphql`
  query($id: String!) {
    site {
      siteMetadata {
        title
        docsLocation
      }
    }
    mdx(fields: { id: { eq: $id } }) {
      fields {
        id
        title
        slug
      }
      body
      tableOfContents
      parent {
        ... on File {
          relativePath
        }
      }
      frontmatter {
        metaTitle
        metaDescription
      }
    }
    allMdx(filter: { frontmatter: { metaDescription: { ne: null } } }) {
      edges {
        node {
          fields {
            slug
            title
          }
        }
      }
    }
  }
`;

MDXRuntimeTest.propTypes = {
  data: shape({}).isRequired,
  edges: string.isRequired,
};

export default MDXRuntimeTest;
