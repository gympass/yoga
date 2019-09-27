import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import createTree from './tree';

const Wrapper = styled.div`
  border-right: 1px solid #f6f6f6;
  height: 100%;
  grid-area: Navigation;
`;

const List = styled.ul`
  margin: 0;
  padding: 0px;
  list-style-type: none;
  font-size: 14px;
  width: 100%;


  a {
    color: inherit;
    padding-bottom: 2px;
    text-decoration: none;
    transition: all 0.3s;
  }

  ${({ level }) =>
    level === 0 &&
    `
    padding-top: 20px;
    ${ListItem} {
      font-weight: 700;
    }
  `}

  ${({ level }) =>
    level > 0 &&
    `
      ${ListItem} {
        font-weight: normal;
        padding-left: 15px;
        padding-top: 15px;
      }

      a {
        border-bottom: none;
        display: block;
        padding: 5px 10px;

        &:hover {
          color: #14ccc5;
        }
      }
    `}

  ${({ level }) =>
    level === 1 &&
    `
    padding-bottom: 20px;
  `}
`;

const ListItem = styled.li`
  padding-left: 20px;
`;

const getHtml = (tree, level = 1) =>
  Object.values(tree).map(({ title, url, ...childs }) =>
    Object.keys(childs).length ? (
      <ListItem key={url} active={window.location.pathname === url}>
        <Link to={url}>{title}</Link>
        <List level={level}>{getHtml(childs, level + 1)}</List>
      </ListItem>
    ) : (
      <ListItem active={window.location.pathname === url} key={url}>
        <Link to={url}>{title}</Link>
      </ListItem>
    ),
  );

const Navigation = ({ items }) => {
  const tree = createTree(items);
  return (
    <Wrapper>
      <List level={0}>{getHtml(tree)}</List>
    </Wrapper>
  );
};

export default Navigation;
