import React from 'react';
import styled from 'styled-components';
import { node, bool, func } from 'prop-types';
import { Spring } from 'react-burgers';

import yoga from '../../images/yoga-logo.svg';

const LOGO_WRAPPER_WIDTH = 250;

const Wrapper = styled.div`
  ${({
    theme: {
      yoga: {
        colors: { gray: grayPallete },
      },
    },
  }) => `
    align-items: center;
    background-color: ${grayPallete[0]};
    box-shadow: 0 2px 2px ${grayPallete[1]};
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
  ${({
    theme: {
      yoga: {
        colors: { gray: grayPallete },
      },
    },
  }) => `
    align-items: center;
    height: 100%;
    display: flex;
    justify-content: center;
    overflow: hidden;
    box-shadow: 2px 0 0 ${grayPallete[1]};
    width: ${LOGO_WRAPPER_WIDTH}px;

    @media (max-width: 900px) {
      width: unset;
      box-shadow: none;
    }
  `};
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
        colors: { primary: primaryPallete },
      },
    },
  }) => `
    path {
      fill: ${primaryPallete[3]};
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

const Header = ({ children, showMenu, toggleMenu }) => (
  <Wrapper>
    <LogoWrapper>
      <YogaLogo />
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

Header.defaultProps = {
  children: undefined,
  showMenu: false,
  toggleMenu: () => {},
};

export default Header;
