import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledList = styled.ul.attrs(() => ({
  as: 'ul',
}))`
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
          border: { width: borderWidth, color: borderColor },
        },
      },
    },
  }) => `
    display: flex;
    flex-direction: ${horizontal ? 'row' : 'column'};

    > * {
        ${
          divided
            ? `border-${
                horizontal ? 'right' : 'bottom'
              }: ${borderWidth}px solid ${borderColor}`
            : ''
        };

        &:last-child {
          border: none;
        }

        padding: ${paddingTop}px ${paddingRight}px ${paddingBottom}px ${paddingLeft}px;
      }
    }
  `}
`;

const List = ({ children, horizontal, divided, theme, ...rest }) => (
  <StyledList horizontal={horizontal} divided={divided} theme={theme} {...rest}>
    {children}
  </StyledList>
);

List.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  horizontal: PropTypes.bool,
  divided: PropTypes.bool,
};

List.defaultProps = {
  children: undefined,
  horizontal: false,
  divided: true,
};

List.displayName = 'List';

export default List;
