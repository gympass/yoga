import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

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

const createObjectNesting = routes => {
  const newObj = {};
  let temp = newObj;

  routes.forEach((item, index) => {
    const current = routes[index];
    temp = temp[current] = {};
  });

  return newObj;
};

const createTree = items => {
  const filteredItems = items.filter(item => item);
  const allRoutes = {};

  filteredItems.forEach(({ title, url }) => {
    const explodedUrl = url.split('/').filter(item => item);
    const routeObj = createObjectNesting(explodedUrl);
  });

  return allRoutes;
};

const Navigation = ({ items }) => {
  const tree = createTree(items);

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
