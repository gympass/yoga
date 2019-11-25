import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { arrayOf, object, func, bool } from 'prop-types';

import Arrow from '../../images/arrow-dropdown.svg';
import createTree from './tree';

const Wrapper = styled.div`
  ${({
    opened,
    theme: {
      yoga: {
        colors: { gray: grayPallete },
      },
    },
  }) => `
    align-items: center;
    background-color: ${grayPallete[0]};
    display: flex;
    flex-direction: column;
    grid-area: Navigation;
    height: 100%;
    width: 250px;

    span {
      color: ${grayPallete[4]};
    }

    @media (max-width: 900px) {
      position: fixed;
      top: 72px;
      left: 0;
      z-index: 3;

      display: ${opened ? 'block' : 'none'};
      width: 100%;
      height: calc(100vh - 72px);

      overflow: auto;
    }
  `};
`;

const Nav = styled.div`
  height: 100vh;
  padding: 30px;
  width: 100%;

  @media (max-width: 900px) {
    padding: 0 20px 0;
    height: unset;
  }
`;

const List = styled.ul`
  font-size: 14px;
  list-style-type: none;
  padding: 0px;
  width: 100%;
`;

const AnchorLink = styled(Link)`
  ${({
    level,
    theme: {
      yoga: {
        colors: { gray: grayPallete },
      },
    },
  }) => `
    color: ${grayPallete[4]};
    display: flex;
    justify-content: space-between;
    padding: 10px 0px 10px 0px;
    text-decoration: none;
    text-indent: calc(15px * ${level});
    transition: all 0.3s;
    width: 100%;
  `};
`;

const ListItem = styled.li`
  ${({
    active,
    theme: {
      yoga: {
        colors: { primary: primaryPallete },
      },
    },
  }) => `
    & > ${AnchorLink} {
      ${
        active
          ? `
          color: ${primaryPallete[3]};
            `
          : ''
      }
    }
  `}
`;

const Colapsible = styled.div`
  ${({
    theme: {
      yoga: {
        colors: { gray: grayPallete },
      },
    },
  }) => `
    cursor: pointer;
    color: ${grayPallete[3]};
    svg {
      width: 10px;
      margin-left: 5px;
    }
  `};
  + ul {
    display: ${({ visible }) => (visible === 'true' ? 'block' : 'none')};
  }
`;

const getHtml = (tree, level = 0, toggleMenu) =>
  Object.values(tree).map(({ title, url, ...childs }) => {
    const hasChild = Boolean(Object.keys(childs).length);
    const [opened, setOpened] = useState(true);

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
          visible={opened.toString()}
          onClick={
            hasChild ? () => setOpened(!opened) : () => toggleMenu(false)
          }
        >
          {title} {hasChild ? <Arrow /> : ''}
        </AnchorLink>
        {hasChild && (
          <List level={level}>{getHtml(childs, level + 1, toggleMenu)}</List>
        )}
      </ListItem>
    );
  });

const Navigation = ({ items, toggleMenu, opened }) => {
  const tree = createTree(items);

  return (
    <Wrapper opened={opened}>
      <Nav>
        <List level={0}>{getHtml(tree, 0, toggleMenu)}</List>
      </Nav>
    </Wrapper>
  );
};

Navigation.propTypes = {
  items: arrayOf(object).isRequired,
  toggleMenu: func.isRequired,
  opened: bool.isRequired,
};

export default Navigation;
