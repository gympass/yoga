import React from 'react';
import styled from 'styled-components';
import { node } from 'prop-types';

import yoga from '../../images/lotus.svg';

const LOGO_WRAPPER_WIDTH = 320;

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
  align-items: center;
  display: flex;
  justify-content: left;
  overflow: hidden;
  padding: 0 32px;
  width: ${LOGO_WRAPPER_WIDTH}px;
`;

const YogaLogo = styled(yoga)`
  ${({
    theme: {
      colors: {
        primary: { length: len, [len - 1]: primaryColor },
      },
    },
  }) => `
    path {
      fill: ${primaryColor};
    }
  `}
`;

const Actions = styled.div`
  align-self: center;
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

    <Divider />

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
