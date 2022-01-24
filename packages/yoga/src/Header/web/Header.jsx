import React from 'react';
import styled, { css } from 'styled-components';
import { string, node } from 'prop-types';

import { media } from '@gympass/yoga-helpers';
import Gympass from 'images/gympass-logo.svg';

const GympassLogo = styled(Gympass)`
  ${({
    theme: {
      yoga: {
        components: { header },
      },
    },
  }) => css`
    margin-right: ${header.logo.margin.xxs}px;
    width: ${header.logo.width.xxs}px;
    ${media.lg`
    width: ${header.logo.width.lg}px;
    margin-right: ${header.logo.margin.lg}px;
  `}
  `}
`;

const Heading = styled.header`
  ${({
    theme: {
      yoga: {
        components: { header },
      },
    },
  }) => css`
    display: flex;
    align-items: center;
    background: ${header.background};
    box-shadow: ${header.shadow};
    width: 100%;
    padding: 0 ${header.padding.xxs}px;
    height: ${header.height.xxs}px;

    ${media.lg`
    padding: 0 ${header.padding.lg}px;
    height: ${header.height.lg}px;
  `}
  `}
`;

const Header = ({ link, children }) => {
  return (
    <Heading>
      {link ? (
        <a href={link}>
          <GympassLogo />
        </a>
      ) : (
        <GympassLogo />
      )}
      {children}
    </Heading>
  );
};

Header.propTypes = {
  /** Use link to redirect clicking on the Gympass' logo */
  link: string,
  /** Use children to add whatever you want inside the header */
  children: node,
};

Header.defaultProps = {
  link: null,
  children: null,
};

export default Header;
