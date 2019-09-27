import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql, Link } from 'gatsby';

const Wrapper = styled.div`
  grid-area: Summary;
  position: relative;
`;

const Links = styled.div``;

const getSummary = edges => {
  const [{ node: currentPage }] = edges.filter(
    ({ node }) => node.fields && node.fields.slug === window.location.pathname,
  );

  const listOfTitles = currentPage.tableOfContents.items.map(element => {
    console.log(element);
  });
};

const Summary = () => (
  <StaticQuery
    query={graphql`
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
    `}
    render={({ allMdx: { edges } }) => {
      const headings = getSummary(edges);

      return (
        <Wrapper>
          {/* <ul>
            {tableOfContents.items[0].items.map(heading => (
              <li>
                <Link to={window.location.pathname + heading.url}>
                  {heading.title}
                </Link>
              </li>
            ))}
          </ul> */}
        </Wrapper>
      );
    }}
  />
);

export default Summary;
