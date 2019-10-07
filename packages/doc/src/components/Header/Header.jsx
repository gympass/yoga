import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import GympassLogo from '../../images/gympass-logo.svg';

const Wrapper = styled.div`
  box-shadow: 0 2px 2px #f0f1f2;
  grid-area: Header;
  margin-bottom: 40px;
  padding: 24px 45px 15px;
`;

const Header = () => (
  <Wrapper>
    <Link to="/">
      <GympassLogo />
    </Link>
  </Wrapper>
);

export default Header;
