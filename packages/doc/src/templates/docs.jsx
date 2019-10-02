import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import { Layout } from '../components';
import config from '../../config';

const {
  sidebar: { forcedNavOrder },
} = config;

const MDXRuntimeTest = props => {
  const { data } = props;
  const { allMdx, mdx } = data;
  const navItems = allMdx.edges
    .map(({ node }) => node.fields.slug)
    .filter(slug => slug !== '/')
    .sort()
    .reduce(
      (acc, cur) => {
        if (forcedNavOrder.find(url => url === cur)) {
          return { ...acc, [cur]: [cur] };
        }

        const prefix = cur.split('/')[1];

        if (prefix && forcedNavOrder.find(url => url === `/${prefix}`)) {
          return { ...acc, [`/${prefix}`]: [...acc[`/${prefix}`], cur] };
        }
        return { ...acc, items: [...acc.items, cur] };
      },
      { items: [] },
    );

  const nav = forcedNavOrder
    .reduce((acc, cur) => {
      return acc.concat(navItems[cur]);
    }, [])
    .concat(navItems.items)
    .map(slug => {
      if (slug) {
        const { node } = allMdx.edges.find(
          ({ node }) => node.fields.slug === slug,
        );

        return { title: node.fields.title, url: node.fields.slug };
      }
      return null;
    });

  return <Layout nav={nav} doc={mdx.body} />;
};

export default MDXRuntimeTest;

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

// MDXRuntimeTest.propTypes = {

// };
