import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Navbar = styled.ul`
  ${({
    theme: {
      yoga: {
        colors: { elements },
      },
    },
  }) => `
    border-bottom: 1px dotted ${elements.lineAndBorders};
    display: flex;
    flex-grow: 1;
    flex-shrink: 1;
    list-style: none;
    margin: 30px 0 25px 0;
    padding: 0;
  `};
`;

Navbar.displayName = 'Navbar';

const NavItem = styled.li`
  ${({
    active,
    theme: {
      yoga: {
        colors: { primary },
      },
    },
  }) => `
    cursor: pointer;
    font-size: 17px;
    letter-spacing: initial;
    line-height: initial;
    overflow: hidden;
    padding: 18px 18px 16px;
    position: relative;
    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;

    &::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 0;

      transition: width 0.25s ease-out;
    }

    &:hover {
      color: ${primary};
    }

    ${
      active
        ? `
          color: ${primary};
          border-bottom: 2px solid ${primary};
            `
        : ''
    }
  `}
`;

NavItem.displayName = 'NavItem';

const Tab = ({ children, title }) => <>{title && children}</>;

Tab.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

Tab.displayName = 'Tab';

const renderIf = (conditional, renderFn) => conditional && renderFn();
const hasWindow = typeof window !== 'undefined';

const TabbedView = ({ children }) => {
  const [currentTab, setCurrentTab] = useState(0);

  useEffect(() => {
    const childrenArray = React.Children.toArray(children);
    const [, href] = hasWindow ? window.location.href.split('#') : [];

    childrenArray.find(a => a.props.title === href);

    const activeTab = childrenArray.find(
      child => child.props.title.toLowerCase() === href,
    );

    setCurrentTab(childrenArray.indexOf(activeTab) <= 0 ? 0 : 1);
  });

  const onTabClick = tab => {
    setCurrentTab(children.indexOf(tab));

    if (hasWindow) {
      window.location.href = `${
        window.location.pathname
      }#${tab.props.title.toLowerCase()}`;
    }
  };

  return (
    <>
      <Navbar>
        {React.Children.map(
          children,
          tab =>
            tab && (
              <NavItem
                key={tab.props.title}
                onClick={() => onTabClick(tab)}
                active={children.indexOf(tab) === currentTab}
              >
                {tab.props.title}
              </NavItem>
            ),
        )}
      </Navbar>

      {React.Children.map(children, child =>
        renderIf(children.indexOf(child) === currentTab, () => child),
      )}
    </>
  );
};

TabbedView.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

TabbedView.displayName = 'TabbedView';

export { Tab, TabbedView };
