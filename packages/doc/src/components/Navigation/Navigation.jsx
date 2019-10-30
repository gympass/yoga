import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { arrayOf, object } from 'prop-types';
import tokens from '@gympass/yoga-tokens';

import createTree from './tree';
import GympassLogo from '../../images/gympass-logo.svg';

const { colors } = tokens;

const Logo = styled(GympassLogo)`
  width: 120px;
  align-self: center;
  margin: 20px 0 40px 0;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  grid-area: Navigation;
  box-shadow: inset -1px 0px 0px #f6f6f6;
  background-color: ${colors.gray[0]};
  padding-top: 30px;

  span {
    color: #999;
  }
`;

const Nav = styled.div`
  margin: 0 70px;
`;

const List = styled.ul`
  padding: 0px;
  list-style-type: none;
  font-size: 16px;
  width: 100%;
`;

const AnchorLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  transition: all 0.3s;
  display: block;
  text-indent: ${({ level }) => `calc(15px * ${level})`};
  margin: 10px 0;
  border-right: 1px solid transparent;
  padding: 10px 0px 10px 0px;

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

const getHtml = (tree, level = 0) =>
  Object.values(tree).map(({ title, url, ...childs }) => {
    const hasChild = Boolean(Object.keys(childs).length);

    return (
      <ListItem
        key={url}
        active={
          typeof window !== 'undefined' && window.location.pathname === url
        }
      >
        <AnchorLink to={url} level={level} as={hasChild && 'span'}>
          {title}
        </AnchorLink>
        {hasChild && <List level={level}>{getHtml(childs, level + 1)}</List>}
      </ListItem>
    );
  });

const Navigation = ({ items }) => {
  const tree = createTree(items);

  return (
    <Wrapper>
      <Logo />
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
