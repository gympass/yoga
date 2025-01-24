import React from 'react';
import styled, { css } from 'styled-components';
import { string, node, elementType } from 'prop-types';

import { media } from '@gympass/yoga-helpers';

import Box from '../../Box';

import Logo from './Logo';

const StyledHeader = styled(Box)`
  ${({
    theme: {
      yoga: {
        components: { header },
      },
    },
  }) => css`
    padding: 0 ${header.padding.xxs}px;
    height: ${header.height.xxs}px;

    ${media.lg`
      padding: 0 ${header.padding.lg}px;
      height: ${header.height.lg}px;
    `}
  `}
`;

const Header = ({ link = null, logo = null, children = null, ...props }) => {
  return (
    <StyledHeader
      as="header"
      d="flex"
      elevation="medium"
      bgColor="white"
      alignItems="center"
      w="100%"
      {...props}
    >
      {link ? (
        <a href={link}>
          <Logo customLogo={logo} />
        </a>
      ) : (
        <Logo customLogo={logo} />
      )}
      {children}
    </StyledHeader>
  );
};

Header.propTypes = {
  /** Use link to redirect clicking on the Gympass' logo */
  link: string,
  /** Use children to add whatever you want inside the header */
  children: node,
  /** Use logo to change headers image */
  logo: elementType,
};

export default Header;
