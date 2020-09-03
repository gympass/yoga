import React, { useEffect, useState } from 'react';
import { string, number, arrayOf, shape } from 'prop-types';
import styled from 'styled-components';

import Ul from '../Ul';

const hasWindow = typeof window !== 'undefined';

const TableOfContent = styled.div`
  position: sticky;
  height: min-content;
  top: 10px;

  max-width: 150px;

  margin-left: 20px;
  margin-right: 38px;

  @media (max-width: 900px) {
    display: none;
  }
`;

const StyledList = styled(Ul)`
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
  depth: number.isRequired,
  id: string.isRequired,
  value: string.isRequired,
};

const AnchorList = ({ anchors }) => (
  <StyledList>
    {anchors.map(anchor => (
      <Anchor key={anchor.id} {...anchor} />
    ))}
  </StyledList>
);

AnchorList.propTypes = {
  anchors: arrayOf(
    shape({
      depth: number,
      id: string,
      value: string,
    }),
  ).isRequired,
};

const Summary = () => {
  const [anchors, setAnchors] = useState([]);
  useEffect(
    () => {
      if (hasWindow) {
        const headings = Array.from(
          document.querySelectorAll('h2, h3, h4, h5, h6'),
        )
          .filter(item => item.id)
          .map(({ tagName: [, level], textContent: value, id }) => ({
            depth: Number(level),
            value,
            id,
          }));

        setAnchors(headings);
      }
    },
    hasWindow ? [window.location.href] : null,
  );

  return anchors.length ? (
    <TableOfContent>
      <AnchorList anchors={anchors} />
    </TableOfContent>
  ) : null;
};

export default Summary;
