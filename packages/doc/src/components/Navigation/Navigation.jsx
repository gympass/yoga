import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { arrayOf, object } from 'prop-types';
import tokens from '@gympass/yoga-tokens';

import Arrow from '../../images/arrow-dropdown.svg';

import createTree from './tree';

const { colors } = tokens;

const Wrapper = styled.div`
  align-items: center;
  background-color: ${colors.gray[0]};
  box-shadow: inset -1px 0px 0px #f6f6f6;
  display: flex;
  flex-direction: column;
  grid-area: Navigation;
  height: 100%;
  width: 320px;

  span {
    color: #999;
  }
`;

const Nav = styled.div`
  width: 100%;
  padding: 30px;
  height: 100vh;
`;

const List = styled.ul`
  padding: 0px;
  list-style-type: none;
  font-size: 16px;
  width: 100%;
`;

const AnchorLink = styled(Link)`
  border-right: 1px solid transparent;
  color: inherit;
  display: block;
  display: flex;
  justify-content: space-between;
  padding: 10px 0px 10px 0px;
  text-decoration: none;
  text-indent: ${({ level }) => `calc(15px * ${level})`};
  transition: all 0.3s;
  width: 100%;

  ${({ as }) =>
    !as &&
    `
    &:hover {
      color: #f46152;
    }
  `}
`;

const ListItem = styled.li`
  & > ${AnchorLink} {
    ${({ active }) =>
      active &&
      `
      color: #F46152;
  `}
  }
`;

const Colapsible = styled.div`
  cursor: pointer;
  color: ${colors.gray[3]};

  + ul {
    display: ${({ visible }) => (visible ? 'block' : 'none')};
  }

  svg {
    width: 10px;
    margin-left: 5px;
  }
`;

const getHtml = (tree, level = 0) =>
  Object.values(tree).map(({ title, url, ...childs }) => {
    const hasChild = Boolean(Object.keys(childs).length);
    const [opened, setOpened] = useState([]);

    const toSlug = string =>
      string
        .replace(/([a-z])([A-Z])/g, '$1-$2')
        .replace(/[\s_]+/g, '-')
        .toLowerCase();

    const toggleLevel = name => {
      const kebabStr = toSlug(name);
      const exists = opened.includes(kebabStr);
      let newState = [];

      if (exists) {
        newState = opened.filter(e => e !== kebabStr);
      } else {
        newState = [...opened, kebabStr];
      }
      setOpened(newState);
    };

    return (
      <ListItem
        key={url}
        active={
          typeof window !== 'undefined' && window.location.pathname === url
        }
      >
        <AnchorLink
          to={url}
          level={level}
          as={hasChild && Colapsible}
          visible={opened.includes(toSlug(title)) ? true : undefined}
          onClick={hasChild ? () => toggleLevel(title) : null}
        >
          {title} {hasChild ? <Arrow /> : ''}
        </AnchorLink>
        {hasChild && <List level={level}>{getHtml(childs, level + 1)}</List>}
      </ListItem>
    );
  });

const Navigation = ({ items }) => {
  const tree = createTree(items);

  return (
    <Wrapper>
      <Nav>
        <List level={0}>{getHtml(tree)}</List>
      </Nav>
    </Wrapper>
  );
};

Navigation.propTypes = {
  items: arrayOf(object).isRequired,
};

export default Navigation;
