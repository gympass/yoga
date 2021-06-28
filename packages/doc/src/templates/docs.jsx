import React from 'react';
import { string, shape, node } from 'prop-types';
import { graphql } from 'gatsby';
import { handleItems, handleNavigation } from './nav';

import { Layout } from '../components';

const MDXRuntimeTest = props => {
  const { data, children } = props;

  if (!data) {
    return children;
  }

  const {
    allMdx: { edges },
    mdx,
    site,
  } = data;
  const { items } = handleItems(edges);
  const nav = handleNavigation(edges, items);

  return <Layout data={site} nav={nav} doc={mdx} />;
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
    allMdx(filter: { frontmatter: { title: { ne: "" } } }) {
      edges {
        node {
          fields {
            slug
            title
            linkable
            order
            collapsed
          }
        }
      }
    }
  }
`;

MDXRuntimeTest.propTypes = {
  children: node.isRequired,
  data: shape({}),
  edges: string,
};

MDXRuntimeTest.defaultProps = {
  data: undefined,
  edges: undefined,
};

export default MDXRuntimeTest;
