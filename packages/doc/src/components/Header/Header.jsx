import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Logo from '../../images/gympass.svg';

const Wrapper = styled.div`
  box-shadow: 0 2px 2px #f0f1f2;
  grid-area: Header;
  margin-bottom: 40px;
  padding: 24px 45px 15px;
  width: 100vw;
`;

const Header = () => (
  <Wrapper>
    <Logo />
  </Wrapper>
);

export default Header;
