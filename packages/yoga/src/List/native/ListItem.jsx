import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledView = styled.View(
  ({
    divided,
    theme: {
      components: { list },
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
    padding: 
      ${list.listItem.padding.top}px 
      ${list.listItem.padding.right}px 
      ${list.listItem.padding.bottom}px 
      ${list.listItem.padding.left}px;
  `,
);

const ListItem = ({ divided, ...rest }) => (
  <StyledView divided={divided} {...rest} />
);

ListItem.propTypes = {
  divided: PropTypes.bool,
};

ListItem.defaultProps = {
  divided: true,
};

ListItem.displayName = 'List.Item';

export default ListItem;
