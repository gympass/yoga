import { useStaticQuery, graphql } from 'gatsby';

const DescriptionQuery = () =>
  useStaticQuery(graphql`
    query {
      allComponentMetadata {
        edges {
          node {
            id
            displayName
            description {
              text
            }
          }
        }
      }
      site {
        siteMetadata {
          title
          description
          siteUrl
          github {
            componentsPath
          }
        }
      }
    }
  `);

export default DescriptionQuery;
