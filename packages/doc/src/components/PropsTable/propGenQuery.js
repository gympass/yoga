export default `
{
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
`;
