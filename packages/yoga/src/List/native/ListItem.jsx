import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledView = styled.View(
  ({
    divided,
    small,
    theme: {
      yoga: {
        components: { list },
      },
    },
  }) => `
  ${
    divided
      ? `
          border-bottom-width: ${list.border.width}px;
          border-bottom-color: ${list.border.color};
        `
      : ''
  }

  ${
    small
      ? `
          padding:
            ${list.listItem.small.padding.top}px
            ${list.listItem.small.padding.right}px
            ${list.listItem.small.padding.bottom}px
            ${list.listItem.small.padding.left}px;
        `
      : `
          padding:
            ${list.listItem.padding.top}px
            ${list.listItem.padding.right}px
            ${list.listItem.padding.bottom}px
            ${list.listItem.padding.left}px;
        `
  }
  `,
);

const ListItem = ({ small, divided, ...rest }) => (
  <StyledView small={small} divided={divided} {...rest} />
);

ListItem.propTypes = {
  small: PropTypes.bool,
  divided: PropTypes.bool,
};

ListItem.defaultProps = {
  small: false,
  divided: true,
};

ListItem.displayName = 'List.Item';

export default ListItem;
