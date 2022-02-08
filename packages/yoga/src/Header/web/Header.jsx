import React from 'react';
import styled, { css } from 'styled-components';
import { string, node } from 'prop-types';

import { media } from '@gympass/yoga-helpers';

import Gympass from 'images/gympass-logo.svg';
import Box from '../../Box';

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

const Heading = styled(Box)`
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

const Header = ({ link, children }) => {
  return (
    <Heading
      as="header"
      d="flex"
      elevation="medium"
      bgColor="white"
      alignItems="center"
      w="100%"
    >
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
