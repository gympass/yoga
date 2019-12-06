import React, { useEffect, useState } from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';
import HeadingsQuery from './HeadingsQuery';

const getHeadings = (edges = []) => {
  const pathname = typeof window !== 'undefined' && window.location.pathname;
  const paths = edges.filter(
    ({ node }) => node.fields && node.fields.slug.includes(pathname),
  );
  console.log('TCL: getHeadings -> paths', paths);

  const [
    {
      node: { mdxAST },
    },
  ] = paths.length ? paths : [{ node: {} }];

  const headings = mdxAST.children
    .filter(c => c.type === 'heading')
    .map(c => ({ depth: c.depth, value: c.children[0].value }));

  return { anchors: headings };
};

const TableOfContent = styled.div`
  position: sticky;
  height: min-content;
  top: 10px;
  margin-left: 20px;
  margin-right: 38px;
`;

const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  ul {
    width: auto;
    padding-left: 10px;
    border-left: none;
  }
`;

const AnchorItem = styled.li(
  ({
    theme: {
      yoga: {
        colors: { primary },
      },
    },
    depth,
  }) => `
  font-size: 12px;

  a {
    color: inherit;
    display: block;
    overflow: hidden;
    padding-left: ${8 * depth}px;
    text-decoration: none;
    text-overflow: ellipsis;
    width: 100%;
    white-space: nowrap;
    transition: all 0.2s;

    &:hover {
      color: ${primary[3]};
    }
  }
`,
);

const Anchor = ({ depth, value, id }) => (
  <AnchorItem key={value} depth={depth}>
    <a href={`#${id}`} title={value}>
      {value}
    </a>
  </AnchorItem>
);

Anchor.propTypes = {
  url: string.isRequired,
  title: string.isRequired,
};

const AnchorList = ({ anchors }) => (
  <StyledList>
    {anchors.map(anchor => (
      <Anchor {...anchor} />
    ))}
  </StyledList>
);

const Summary = () => {
  const [anchors, setAnchors] = useState([]);
  useEffect(() => {
    const headings = Array.from(
      document.querySelectorAll('h2, h3, h4, h5, h6'),
    ).map(({ tagName: [, level], textContent: value, id }) => ({
      depth: Number(level),
      value,
      id,
    }));
    console.log('TCL: Summary -> headings', headings);

    setAnchors(headings);
  }, [window.location.href]);

  return anchors.length ? (
    <TableOfContent>
      <AnchorList anchors={anchors} />
    </TableOfContent>
  ) : null;
};

export default Summary;
