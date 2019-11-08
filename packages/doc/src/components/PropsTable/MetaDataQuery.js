import { useStaticQuery, graphql } from 'gatsby';

const MetaDataQuery = () =>
  useStaticQuery(graphql`
    query {
      allComponentMetadata(sort: { fields: displayName }) {
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
            parent {
              ... on File {
                id
                name
                absolutePath
              }
            }
          }
        }
      }
    }
  `);

export default MetaDataQuery;
