import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import createTree from './tree';
import Logo from '../../images/gympass.svg';

const Wrapper = styled.div`
  height: 100%;
  padding: 50px;
  width: 200px;

  ul {
    padding: 5px 0px;
    list-style-type: none;
    li {
      padding-left: 10px;
    }
  }
`;

const getHtml = tree =>
  Object.values(tree).map(({ title, url, ...childs }) =>
    Object.keys(childs).length ? (
      <li>
        <Link to={url}>{title}</Link>
        <ul>{getHtml(childs)}</ul>
      </li>
    ) : (
      <li>
        <Link to={url}>{title}</Link>
      </li>
    ),
  );

const Navigation = ({ items }) => {
  const tree = createTree(items);
  return (
    <Wrapper>
      <Logo />
      <ul>{getHtml(tree)}</ul>
    </Wrapper>
  );
};

export default Navigation;
