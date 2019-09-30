import React, { useState } from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql, Link } from 'gatsby';

const Wrapper = styled.div`
  grid-area: Summary;
  position: relative;
  margin-left: 20px;
  margin-right: 20px;
`;

const AnchorList = styled.ul`
  border-left: 1px solid #f6f6f6;
`;

const AnchorItem = styled.li`
  font-size: 12px;
  margin-bottom: 4px;

  a {
    color: inherit;
    display: block;
    overflow: hidden;
    padding-left: 16px;
    text-decoration: none;
    text-overflow: ellipsis;
    width: 100%;
    white-space: nowrap;
    transition: all 0.2s;

    &:hover {
      color: #f46152;
    }
  }
`;

const getLinks = ({ url, title }) => (
  <AnchorItem>
    <Link to={window.location.pathname + url}>{title}</Link>
  </AnchorItem>
);

const getHeadings = edges => {
  const [
    {
      node: { tableOfContents },
    },
  ] = edges.filter(
    ({ node }) => node.fields && node.fields.slug === window.location.pathname,
  );

  if (!Object.keys(tableOfContents).length) {
    return [];
  }

  return tableOfContents.items;
};

const getSummary = edges => {
  const headings = getHeadings(edges);

  return (
    <AnchorList>
      {headings.map(heading => (
        <>
          {getLinks(heading)}
          {headings.length === 1 &&
            heading.items.map(subHeading => getLinks(subHeading))}
        </>
      ))}
    </AnchorList>
  );
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
      const summary = getSummary(edges);

      return <Wrapper>{summary}</Wrapper>;
    }}
  />
);

export default Summary;
