import React from 'react';
import { node } from 'prop-types';
import styled from 'styled-components';
import tokens from '@gympass/yoga-tokens';

import yoga from '../../images/lotus.svg';

const { colors } = tokens;

const YogaLogo = styled(yoga)`
  path {
    fill: ${colors.madrid[3]};
  }
`;

const Wrapper = styled.div`
  align-items: center;
  background-color: ${colors.gray[0]};
  box-shadow: 0 2px 2px #f0f1f2;
  display: flex;
  grid-area: Header;
  height: 70px;
  position: relative;
  z-index: 2;
`;

const Actions = styled.div`
  align-items: end;
  display: flex;
  justify-content: space-around;
  width: 300px;
`;

const LogoWrapper = styled.div`
  padding: 0 32px;
  width: 320px;
  display: flex;
  align-items: center;
  justify-content: left;
  overflow: hidden;
`;

const Divider = styled.div`
  border-right: 1px solid ${colors.gray[2]};
  height: 20px;
  width: 1px;
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
