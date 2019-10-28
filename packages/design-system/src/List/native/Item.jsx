import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { View } from 'react-native';

const StyledView = styled.View`
  ${({
    divider,
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
    ${
      divider
        ? `
      border-bottom-width: ${borderWidth}px;
      border-bottom-color: ${borderColor};
    `
        : ''
    }
    padding: ${paddingTop}px ${paddingRight}px ${paddingBottom}px ${paddingLeft}px;
  `}
`;

const ListItem = ({ children, theme, divider }) => (
  <StyledView theme={theme} divider={divider}>
    {children}
  </StyledView>
);

ListItem.propTypes = {
  children: PropTypes.node,
  divider: PropTypes.bool,
};

ListItem.defaultProps = {
  children: undefined,
  divider: true,
};

ListItem.displayName = 'Item';

export default ListItem;
