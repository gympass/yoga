import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { node, bool, func } from 'prop-types';
import { Spring } from 'react-burgers';

import yoga from 'images/yoga-logo.svg';

const LOGO_WRAPPER_WIDTH = 250;

const Wrapper = styled.div`
  ${({
    theme: {
      yoga: {
        colors: { white, elements },
      },
    },
  }) => `
    align-items: center;
    background-color: ${white};
    box-shadow: 0 2px 2px ${elements.backgroundAndDisabled};
    display: flex;
    flex-direction: row;
    grid-area: Header;
    height: 70px;
    position: relative;
    z-index: 2;

    @media (max-width: 900px) {
      width: 100%;
      position: fixed;
      top: 0;
      justify-content: space-between;
      padding: 20px;
    }
  `};
`;

const LogoWrapper = styled.div`
  align-items: center;
  height: 100%;
  display: flex;
  padding-left: 30px;
  overflow: hidden;
  width: ${LOGO_WRAPPER_WIDTH}px;

  @media (max-width: 900px) {
    width: unset;
    box-shadow: none;
    padding-left: unset;
  }
`;

const Hamburguer = styled(Spring)`
  @media (min-width: 900px) {
    display: none !important;
  }
`;

const YogaLogo = styled(yoga)`
  ${({
    theme: {
      yoga: {
        colors: { primary },
      },
    },
  }) => `
    path {
      fill: ${primary};
      transition: all 0.3s ease-in-out;
    }

  `}
`;

const Actions = styled.div`
  align-self: center;
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 0 20px;
  width: calc(100% - ${LOGO_WRAPPER_WIDTH}px);
  height: 100%;

  @media (max-width: 900px) {
    display: none;
  }
`;

const Header = ({
  children = undefined,
  showMenu = false,
  toggleMenu = () => {},
}) => (
  <Wrapper>
    <LogoWrapper>
      <Link to="/">
        <YogaLogo />
      </Link>
    </LogoWrapper>

    <Hamburguer
      width={18}
      lineHeight={2}
      lineSpacing={4}
      color="#333"
      padding="0px"
      active={showMenu}
      customProps={{
        style: { marginTop: 4 },
      }}
      onClick={() => toggleMenu(!showMenu)}
    />

    <Actions>{children}</Actions>
  </Wrapper>
);

Header.propTypes = {
  children: node,
  showMenu: bool,
  toggleMenu: func,
};

export default Header;
