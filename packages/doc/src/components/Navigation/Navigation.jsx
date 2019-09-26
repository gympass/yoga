import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import createTree from './tree';
import Logo from '../../images/gympass.svg';

const Wrapper = styled.div`
  height: 100%;
  border-right: 1px solid #f6f6f6;
  padding: 50px;
`;

const List = styled.ul`
  padding: 0px;
  list-style-type: none;

  li {
    font-size: 22px;
  }

  a {
    border-bottom: 1px solid #f46152;
    color: inherit;
    padding-bottom: 2px;
    text-decoration: none;
    transition: all 0.3s;
  }

  ${({ level }) =>
    level === 0 &&
    `
    padding-top: 20px;
  `}

  ${({ level }) =>
    level > 0 &&
    `
      li {
        font-size: 14px;
        padding-left: 10px;
        padding-top: 15px;
      }

      a {
        border-bottom: none;
        display: block;
        padding: 5px 10px;
        &: hover {
          background-color: #fff6f5;
        }
      }
    `}

  ${({ level }) =>
    level === 1 &&
    `
    padding-bottom: 20px;
  `}
`;

const getHtml = (tree, level = 1) =>
  Object.values(tree).map(({ title, url, ...childs }) =>
    Object.keys(childs).length ? (
      <li>
        <Link to={url}>{title}</Link>
        <List level={level}>{getHtml(childs, level + 1)}</List>
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
      <Link to="/">
        <Logo />
      </Link>
      <List level={0}>{getHtml(tree)}</List>
    </Wrapper>
  );
};

export default Navigation;
