import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledList = styled.ul`
  ${({
    divided,
    direction,
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
    border-top: ${borderWidth} ${borderStyle} ${borderColor};
    flex-direction: ${direction === 'horizontal' ? 'row' : 'column'};
    > * {
        ${divided &&
          `border-bottom: ${borderWidth} ${borderStyle} ${borderColor}`}
        padding: ${paddingTop}px ${paddingRight}px ${paddingBottom}px ${paddingLeft}px;
      }
    }
  `}
`;

const List = ({ children, as, direction, divided, theme }) => (
  <StyledList as={as} direction={direction} divided={divided} theme={theme}>
    {children}
  </StyledList>
);

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
