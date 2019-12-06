import { useStaticQuery, graphql } from 'gatsby';

const HeadingsQuery = () =>
  useStaticQuery(graphql`
    query {
      allMdx {
        edges {
          node {
            fields {
              slug
            }
            mdxAST
            tableOfContents
          }
        }
      }
    }
  `);

export default HeadingsQuery;
