import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import createTree from './tree';

const Wrapper = styled.div`
  background-color: #f4f4f4;
  height: 100%;
  width: 500px;

  ul {
    padding: 10px;
    li {
      padding: 10px;
    }
  }
`;

const Navigation = ({ items }) => {
  const tree = createTree(items);
  console.log(tree);
  return (
    <Wrapper>
      <ul>
        {items.map(
          item =>
            item && (
              <li key={item.url}>
                <Link to={item.url}>{item.title}</Link>
              </li>
            ),
        )}
      </ul>
    </Wrapper>
  );
};

export default Navigation;
