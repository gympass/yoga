import { useStaticQuery, graphql } from 'gatsby';

const DescriptionQuery = () =>
  useStaticQuery(graphql`
    query {
      allComponentMetadata {
        edges {
          node {
            displayName
            description {
              text
            }
          }
        }
      }
    }
  `);

export default DescriptionQuery;
