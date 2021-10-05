import React, { useState } from 'react';
import styled from 'styled-components';
import { hexToRgb } from '@gympass/yoga-common';
import { navigate } from 'gatsby';
import { arrayOf, func, bool, shape, number, string } from 'prop-types';

import Arrow from 'images/arrow-dropdown.svg';
import createTree from './tree';

import MDXElements from '../MDXElements';

const Wrapper = styled.aside`
  ${({
    opened,
    theme: {
      yoga: {
        colors: { white, text },
      },
    },
  }) => `
    align-items: center;
    background-color: ${white};
    display: flex;
    flex-direction: column;
    grid-area: Navigation;
    height: auto;
    width: 250px;

    span {
      color: ${text.secondary};
    }

    @media (max-width: 900px) {
      position: fixed;
      display: ${opened ? 'block' : 'none'};
      top: 72px;
      left: 0;

      width: 100%;
      height: calc(100% - 70px);

      overflow: auto;
      z-index: 3;
    }
  `};
`;

const Nav = styled.nav`
  height: auto;
  padding: 30px;
  width: 100%;

  @media (max-width: 900px) {
    padding: 0 20px 0;
    height: unset;
  }
`;

const StyledList = styled(MDXElements.Ul)`
  font-size: 2rem;
  font-weight: 300;
  list-style-type: none;
  padding: 0;
  margin: 0;
  width: 100%;
`;

const ArrowIcon = styled(Arrow)`
  width: 0.6rem;
  transition: all 200ms ease-out;
  ${({ isOpen }) => `
    transform: rotate(${isOpen ? 180 : 0}deg);
  `}
`;

const NavigationLabel = styled.button`
  ${({
    active,
    level,
    theme: {
      yoga: {
        colors: { text, primary },
      },
    },
  }) => `
  color: ${active ? primary : hexToRgb(text.secondary, 0.75)};
  text-indent: calc(15px * ${level});

  :hover, :focus {
    color: ${primary};
  }
`}

  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  font-family: inherit;
  letter-spacing: 0.5px;
  line-height: 2;
  font-size: 0.9rem;
  text-decoration: none;
  font-weight: 300;
  align-items: center;
  width: 100%;
  background: none;
  border: none;
  transition: all 200ms ease-out;
  outline-offset: 2px;

  :hover {
    cursor: pointer;
  }
`;

const Collapsible = styled(NavigationLabel)`
  + ul {
    display: ${({ displayChildren }) =>
      displayChildren === true ? 'block' : 'none'};
  }
`;

const ListItem = ({
  title,
  linkable,
  url,
  childs,
  level,
  toggleMenu,
  prefix,
  collapsed,
}) => {
  const [isCollapsed, setCollapsed] = useState(collapsed);
  const hasChild = Boolean(Object.keys(childs).length);

  const filteredUrl = `/${[
    ...new Set(url.split('/').filter(item => item)),
  ].join('/')}`;

  const { pathname } = window.location;
  const linkPath = prefix ? `/yoga${filteredUrl}` : filteredUrl;
  const isActive = pathname === linkPath;

  const onNavigate = () => {
    if (filteredUrl !== pathname) {
      navigate(filteredUrl);
      toggleMenu(false);
    }
  };

  if (linkable) {
    return (
      <li key={url}>
        <NavigationLabel
          level={level}
          tabindex="0"
          active={isActive}
          onClick={onNavigate}
        >
          {title}
        </NavigationLabel>
      </li>
    );
  }

  return (
    <li key={url}>
      <Collapsible
        displayChildren={isCollapsed}
        onClick={() => setCollapsed(!isCollapsed)}
        aria-label={`Toggle ${title} collapsible section`}
        role="switch"
        aria-checked={isCollapsed.toString()}
      >
        {title} <ArrowIcon isOpen={isCollapsed} />
      </Collapsible>
      {hasChild && (
        <StyledList level={level}>
          <List
            tree={childs}
            level={level + 1}
            toggleMenu={toggleMenu}
            prefix={prefix}
          />
        </StyledList>
      )}
    </li>
  );
};

ListItem.propTypes = {
  title: string.isRequired,
  url: string.isRequired,
  childs: shape({}).isRequired,
  level: number.isRequired,
  toggleMenu: func.isRequired,
  linkable: bool.isRequired,
  prefix: bool.isRequired,
  collapsed: bool.isRequired,
};

const List = ({ tree, level, toggleMenu, prefix }) => (
  <StyledList>
    {Object.values(tree)
      .sort((t1, t2) => (t1.order > t2.order ? 1 : -1))
      .map(({ title, url, linkable, order, collapsed, ...childs }) => (
        <ListItem
          key={title}
          title={title}
          url={url}
          linkable={linkable}
          childs={childs}
          level={level}
          toggleMenu={toggleMenu}
          prefix={prefix}
          collapsed={collapsed}
        />
      ))}
  </StyledList>
);

List.propTypes = {
  tree: shape({}).isRequired,
  level: number,
  toggleMenu: func.isRequired,
  prefix: bool.isRequired,
};

List.defaultProps = {
  level: 0,
};

const Navigation = ({ items, toggleMenu, opened, prefix }) => {
  const [, firstPath, secondPath] =
    typeof window !== 'undefined' ? window.location.pathname.split('/') : [];
  const filteredItems = items.filter(({ url }) =>
    url.includes(prefix ? secondPath : firstPath),
  );
  const tree = createTree(filteredItems);

  return (
    <Wrapper opened={opened}>
      <Nav aria-label="Contents navigation">
        <List tree={tree} toggleMenu={toggleMenu} prefix={prefix} />
      </Nav>
    </Wrapper>
  );
};

Navigation.propTypes = {
  items: arrayOf(shape({})).isRequired,
  toggleMenu: func.isRequired,
  opened: bool.isRequired,
  prefix: bool.isRequired,
};

export default Navigation;
