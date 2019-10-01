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
            tableOfContents
          }
        }
      }
    }
  `);

export default HeadingsQuery;
