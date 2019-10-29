import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { View } from 'react-native';

const StyledView = styled.View`
  ${({
    divided,
    theme: {
      components: {
        list: {
          listItem: {
            padding: {
              top: paddingTop,
              right: paddingRight,
              bottom: paddingBottom,
              left: paddingLeft,
            },
          },

          border: { width: borderWidth, color: borderColor },
        },
      },
    },
  }) => `
    ${
      divided
        ? `
      border-bottom-width: ${borderWidth}px;
      border-bottom-color: ${borderColor};
    `
        : ''
    }
    padding: ${paddingTop}px ${paddingRight}px ${paddingBottom}px ${paddingLeft}px;
  `}
`;

const ListItem = ({ divided, ...rest }) => (
  <StyledView divided={divided} {...rest} />
);

ListItem.propTypes = {
  divided: PropTypes.bool,
};

ListItem.defaultProps = {
  divided: true,
};

ListItem.displayName = 'Item';

export default ListItem;
