import React from 'react';
import { string, shape } from 'prop-types';
import { graphql } from 'gatsby';
import { handleItems, handleNavigation } from './nav';

import { Layout } from '../components';

const MDXRuntimeTest = props => {
  const { data } = props;
  const {
    allMdx: { edges },
    mdx,
  } = data;

  const { items } = handleItems(edges);
  const nav = handleNavigation(edges, items);

  return <Layout nav={nav} doc={mdx} />;
};

export const pageQuery = graphql`
  query($id: String!) {
    site {
      siteMetadata {
        title
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
  edges: string,
};

MDXRuntimeTest.defaultProps = {
  edges: undefined,
};

export default MDXRuntimeTest;
