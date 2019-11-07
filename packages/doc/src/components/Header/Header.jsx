import React from 'react';
import styled from 'styled-components';
import { node } from 'prop-types';

import yoga from '../../images/yoga-logo.svg';

const LOGO_WRAPPER_WIDTH = 250;

const Wrapper = styled.div`
  ${({
    theme: {
      colors: { gray: grayPallete },
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
  `};
`;

const LogoWrapper = styled.div`
  ${({
    theme: {
      colors: { gray: grayPallete },
    },
  }) => `
    align-items: center;
    height: 100%;
    display: flex;
  justify-content: center;
    overflow: hidden;
    box-shadow: 2px 0 0 ${grayPallete[1]};
    width: ${LOGO_WRAPPER_WIDTH}px;
  `};
`;

const YogaLogo = styled(yoga)`
  ${({
    theme: {
      colors: { primary: primaryPallete },
    },
  }) => `
    path {
      fill: ${primaryPallete[3]};
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
`;

const Divider = styled.div`
  ${({
    theme: {
      colors: { gray: grayPallete },
    },
  }) => `
    border-right: 1px solid ${grayPallete[2]};
    height: 20px;
    width: 1px;
  `};
`;

const Header = ({ children }) => (
  <Wrapper>
    <LogoWrapper>
      <YogaLogo />
    </LogoWrapper>

    <Actions>{children}</Actions>
  </Wrapper>
);

Header.protoTypes = {
  children: node,
};

Header.defaultProps = {
  children: undefined,
};

export default Header;
