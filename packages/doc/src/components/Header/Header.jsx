import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Logo from '../../images/gympass.svg';

const Wrapper = styled.div`
  width: 100vw;
  grid-area: Header;
  padding: 24px 25px 15px;
  box-shadow: 0 2px 2px #f0f1f2;
`;

const Header = () => (
  <Wrapper>
    <Logo />
  </Wrapper>
);

export default Header;
