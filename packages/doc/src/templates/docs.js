import React, { Component } from 'react';
import { graphql } from 'gatsby';

import { Layout } from '../components';
import config from '../../config';

const forcedNavOrder = config.sidebar.forcedNavOrder;

export default class MDXRuntimeTest extends Component {
  render() {
    const { data } = this.props;
    const {
      allMdx,
      mdx,
      site: {
        siteMetadata: { title },
      },
    } = data;

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
          } else {
            return { ...acc, items: [...acc.items, cur] };
          }
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
      });

    // meta tags
    const metaTitle = mdx.frontmatter.metaTitle;
    const metaDescription = mdx.frontmatter.metaDescription;
    let canonicalUrl = config.gatsby.siteUrl;
    canonicalUrl =
      config.gatsby.pathPrefix !== '/'
        ? canonicalUrl + config.gatsby.pathPrefix
        : canonicalUrl;
    canonicalUrl = canonicalUrl + mdx.fields.slug;

    return <Layout nav={nav} doc={mdx.body} />;
  }
}

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
    allMdx {
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
