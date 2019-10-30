import React from 'react';
import { node } from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';
import tokens from '@gympass/yoga-tokens';

import GympassLogo from '../../images/gympass-logo.svg';

const { colors } = tokens;

const Wrapper = styled.div`
  box-shadow: 0 2px 2px #f0f1f2;
  grid-area: Header;
  margin-bottom: 2px;
  padding: 24px 45px 15px;
  display: flex;
  justify-content: space-between;
  background-color: ${colors.gray[0]};
`;

const Actions = styled.div`
  width: 300px;
  display: flex;
  justify-content: space-around;
  align-items: end;
`;

const Header = ({ children }) => (
  <Wrapper>
    <Link to="/">
      <GympassLogo />
    </Link>
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
