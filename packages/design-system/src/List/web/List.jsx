import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledList = styled.ul`
  display: flex;
  flex-direction: ${({ direction }) =>
    direction === 'horizontal' ? 'row' : 'column'};

  > * {
    ${({ divided }) =>
      divided &&
      `
      border-bottom: 1px solid red;
    `}
  }
`;

const List = ({ children, as, direction, divided, theme }) => {
  console.log(theme);

  return (
    <StyledList as={as} direction={direction} divided={divided}>
      {children}
    </StyledList>
  );
};

List.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  as: PropTypes.string,
  direction: PropTypes.oneOf(['vertical', 'horizontal']),
  divided: PropTypes.bool,
};

List.defaultProps = {
  children: undefined,
  as: 'ul',
  direction: 'vertical',
  divided: true,
};

export default List;
