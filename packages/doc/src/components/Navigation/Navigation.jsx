import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Wrapper = styled.div`
  background-color: #f4f4f4;
  height: 100%;
`;

const Navigation = ({ items }) => (
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

export default Navigation;
