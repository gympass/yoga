import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledList = styled.ul`
  ${({
    divided,
    horizontal,
    theme: {
      components: {
        list: {
          padding: {
            top: paddingTop,
            right: paddingRight,
            bottom: paddingBottom,
            left: paddingLeft,
          },
          border: {
            width: borderWidth,
            style: borderStyle,
            color: borderColor,
          },
        },
      },
    },
  }) => `
    display: flex;
    flex-direction: ${horizontal ? 'row' : 'column'};

    > * {
        padding: ${paddingTop}px ${paddingRight}px ${paddingBottom}px ${paddingLeft}px;

        ${divided &&
          `border-${
            horizontal ? 'right' : 'bottom'
          }: ${borderWidth} ${borderStyle} ${borderColor}`};
      }
    }
  `}
`;

const List = ({ children, as, horizontal, divided, theme }) => (
  <StyledList as={as} horizontal={horizontal} divided={divided} theme={theme}>
    {children}
  </StyledList>
);

List.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  as: PropTypes.string,
  horizontal: PropTypes.bool,
  divided: PropTypes.bool,
};

List.defaultProps = {
  children: undefined,
  as: 'ul',
  horizontal: false,
  divided: true,
};

List.displayName = 'List';

export default List;
