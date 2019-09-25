import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import createTree from './tree';
import { element } from 'prop-types';

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

const getHtml = tree => {
  console.log(tree);
};

const Navigation = ({ items }) => {
  const tree = createTree(items);

  return <Wrapper>{getHtml(tree)}</Wrapper>;
};

export default Navigation;
