import React, { useState } from 'react';
import styled from 'styled-components';
import { hexToRgb } from '@gympass/yoga-common';
import { navigate } from 'gatsby';
import { arrayOf, func, oneOf, bool, shape, number, string } from 'prop-types';

import Arrow from 'images/arrow-dropdown.svg';
import createTree from './tree';

import MDXElements from '../MDXElements';

const SORTING = {
  orderAscending: 'orderAscending',
  alphabeticAscending: 'alphabeticAscending',
};

/**
 * Gets the sorting function for the given sorting type.
 * See SORTING for possible values.
 *
 * @param {string} kind - 'alphabetic' or 'order', default to 'order'
 * @returns {function} - sorting function
 */
const getSorting = kind =>
  ({
    [SORTING.orderAscending]: (a, b) => (a.order > b.order ? 1 : -1),
    [SORTING.alphabeticAscending]: (a, b) => (a.title > b.title ? 1 : -1),
  }[kind ?? SORTING.orderAscending]);

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
`;

const Collapsible = styled(NavigationLabel)`
  + ul {
    display: ${({ displayChildren }) =>
      displayChildren === true ? 'block' : 'none'};
  }
`;

const ListItem = ({
  title,
  url,
  childrenContent,
  level,
  toggleMenu,
  prefix,
  open,
}) => {
  const [isOpen, setOpen] = useState(open);
  const hasChildren = Boolean(Object.keys(childrenContent).length);

  const isLink = !hasChildren;

  const filteredUrl = `/${[
    ...new Set(url.split('/').filter(item => item)),
  ].join('/')}`;

  const { pathname } = window.location;
  const linkPath = prefix ? `/yoga${filteredUrl}` : filteredUrl;
  const isActive = window && pathname.replace(/\/$/, '') === linkPath;
  const innerSorting = sectionsSortedByName.includes(title.toLowerCase())
    ? 'alphabetic'
    : 'order';

  const onNavigate = () => {
    if (filteredUrl !== pathname) {
      navigate(filteredUrl);
      toggleMenu(false);
    }
  };

  if (isLink) {
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
        displayChildren={isOpen}
        onClick={() => setOpen(!isOpen)}
        aria-label={`Toggle ${title} collapsible section`}
        role="switch"
        level={level}
        aria-checked={isOpen.toString()}
      >
        {title} <ArrowIcon isOpen={isOpen} />
      </Collapsible>
      {hasChildren && (
        <StyledList level={level}>
          <List
            tree={childrenContent}
            level={level + 1}
            toggleMenu={toggleMenu}
            prefix={prefix}
            sorting={innerSorting}
          />
        </StyledList>
      )}
    </li>
  );
};

ListItem.propTypes = {
  title: string.isRequired,
  url: string.isRequired,
  childrenContent: shape({}).isRequired,
  level: number.isRequired,
  toggleMenu: func.isRequired,
  prefix: bool.isRequired,
  open: bool.isRequired,
};

const List = ({ tree, level, toggleMenu, prefix, sorting }) => {
  const sortingFunction =
    sorting || Object.keys(tree).some(child => child?.order)
      ? SORTING.orderAscending
      : SORTING.alphabeticAscending;

  return (
    <StyledList>
      {Object.values(tree)
        .sort(getSorting(sortingFunction))
        .map(({ title, url, linkable, order, open, ...childrenContent }) => {
          return (
            <ListItem
              key={title}
              title={title}
              url={url}
              linkable={linkable}
              childrenContent={childrenContent}
              level={level}
              toggleMenu={toggleMenu}
              prefix={prefix}
              open={open}
            />
          );
        })}
    </StyledList>
  );
};

List.propTypes = {
  tree: shape({}).isRequired,
  level: number,
  toggleMenu: func.isRequired,
  prefix: bool.isRequired,
  sorting: oneOf(Object.values(SORTING)),
};

List.defaultProps = {
  level: 0,
  sorting: 'order',
};

const Navigation = ({ items, toggleMenu, opened, prefix }) => {
  const [, firstPath, secondPath] =
    typeof window !== 'undefined' ? window.location.pathname.split('/') : [];

  const filteredItems = items.filter(({ url }) => {
    return url.includes(prefix ? secondPath : firstPath);
  });
  const tree = createTree(filteredItems);

  return (
    <Wrapper opened={opened}>
      <Nav>
        <List
          tree={tree}
          toggleMenu={toggleMenu}
          prefix={prefix}
          sorting={SORTING.orderAscending}
        />
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
