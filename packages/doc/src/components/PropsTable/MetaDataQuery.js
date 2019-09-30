import { useStaticQuery, graphql } from 'gatsby';

const MetaDataQuery = () =>
  useStaticQuery(graphql`
    query {
      allComponentMetadata {
        edges {
          node {
            displayName
            props {
              name
              type {
                name
              }
              required
              defaultValue {
                value
              }
              description {
                text
              }
            }
            description {
              text
            }
          }
        }
      }
    }
  `);

export default MetaDataQuery;
