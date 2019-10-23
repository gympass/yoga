import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { View } from 'react-native';

const StyledView = styled.View`
  ${({
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
    border-bottom-width: ${borderWidth};
    border-bottom-color: ${borderColor};
    padding: ${paddingTop}px ${paddingRight}px ${paddingBottom}px ${paddingLeft}px;
  `}
`;

const ListItem = ({ children, theme }) => (
  <StyledView theme={theme}>{children}</StyledView>
);

ListItem.propTypes = {
  children: PropTypes.node,
};

ListItem.defaultProps = {
  children: undefined,
};

ListItem.displayName = 'Item';

export default ListItem;
