import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { arrayOf, object, func, bool, shape, number, string } from 'prop-types';

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
      padding-bottom: 68px;

      overflow: auto;
    }
  `};
`;

const Nav = styled.div`
  height: calc(100vh - 140px);
  padding: 30px;
  width: 100%;

  @media (max-width: 900px) {
    padding: 0 20px 0;
    height: unset;
  }
`;

const StyledList = styled.ul`
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

const StyledListItem = styled.li`
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

const ListItem = ({ title, url, childs, level, toggleMenu }) => {
  const [opened, setOpened] = useState(true);
  const hasChild = Boolean(Object.keys(childs).length);

  return (
    <StyledListItem
      key={url}
      active={typeof window !== 'undefined' && window.location.pathname === url}
    >
      <AnchorLink
        to={url}
        level={level}
        as={hasChild && Colapsible}
        visible={opened.toString()}
        onClick={hasChild ? () => setOpened(!opened) : () => toggleMenu(false)}
      >
        {title}{' '}
        {hasChild ? <Arrow style={{ height: '100%', paddingTop: 10 }} /> : ''}
      </AnchorLink>
      {hasChild && (
        <StyledList level={level}>
          <List tree={childs} level={level + 1} toggleMenu={toggleMenu} />
        </StyledList>
      )}
    </StyledListItem>
  );
};

ListItem.propTypes = {
  title: string.isRequired,
  url: string.isRequired,
  childs: shape({}).isRequired,
  level: number.isRequired,
  toggleMenu: func.isRequired,
};

const List = ({ tree, level, toggleMenu }) => (
  <StyledList>
    {Object.values(tree).map(({ title, url, ...childs }) => (
      <ListItem
        key={title}
        title={title}
        url={url}
        childs={childs}
        level={level}
        toggleMenu={toggleMenu}
      />
    ))}
  </StyledList>
);

List.propTypes = {
  tree: shape({}).isRequired,
  level: number,
  toggleMenu: func.isRequired,
};

List.defaultProps = {
  level: 0,
};

const Navigation = ({ items, toggleMenu, opened }) => {
  const [, firstPath] = window.location.pathname.split('/');
  const filteredItems = items.filter(({ url }) => url.includes(firstPath));
  const tree = createTree(filteredItems);

  return (
    <Wrapper opened={opened}>
      <Nav>
        <List tree={tree} toggleMenu={toggleMenu} />
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
