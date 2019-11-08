import React from 'react';
import { node } from 'prop-types';
import styled from 'styled-components';

const CardFooterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: center;
  align-items: center;
  justify-content: space-between;
`;

const CardFooter = ({ children, ...rest }) => (
  <CardFooterWrapper {...rest}>{children}</CardFooterWrapper>
);

CardFooter.propTypes = {
  children: node,
};

CardFooter.defaultProps = {
  children: 'span',
};

export default CardFooter;
