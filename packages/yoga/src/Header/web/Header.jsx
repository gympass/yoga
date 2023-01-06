import React from 'react';
import styled, { css } from 'styled-components';
import { string, node, elementType, bool } from 'prop-types';

import { media } from '@gympass/yoga-helpers';
import { Container, Row, Col } from '@gympass/yoga';

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
    ${({ fluid }) =>
      fluid &&
      css`
        padding: 0 ${header.padding.xxs}px;

        ${media.lg`
          padding: 0 ${header.padding.lg}px;
        `}
      `}

    height: ${header.height.xxs}px;

    ${media.lg`
      height: ${header.height.lg}px;
    `}
  `}
`;

const Header = ({ link, children, logo, fluid }) => {
  return (
    <Box as="header" elevation="medium" bgColor="white" w="100%">
      <Container fluid={fluid}>
        <Row>
          <Col xs={12}>
            <StyledHeader
              d="flex"
              bgColor="white"
              alignItems="center"
              fluid={fluid}
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
          </Col>
        </Row>
      </Container>
    </Box>
  );
};

Header.propTypes = {
  /** Use link to redirect clicking on the Gympass' logo */
  link: string,
  /** Use children to add whatever you want inside the header */
  children: node,
  /** Use logo to change headers image */
  logo: elementType,
  /** Use to fill all container size */
  fluid: bool,
};

Header.defaultProps = {
  link: null,
  children: null,
  logo: null,
  fluid: false,
};

export default Header;
