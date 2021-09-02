import React from 'react';
import { TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';

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

const ListItem = ({
  theme: {
    yoga: {
      components: {
        list: { listItem },
      },
    },
  },
  small,
  divided,
  onPress,
  ...rest
}) => {
  const Component = <StyledView small={small} divided={divided} {...rest} />;

  if (onPress) {
    return (
      <TouchableHighlight
        onPress={onPress}
        underlayColor={listItem.selectable.color}
      >
        {Component}
      </TouchableHighlight>
    );
  }

  return Component;
};

ListItem.propTypes = {
  small: PropTypes.bool,
  divided: PropTypes.bool,
  onPress: PropTypes.func,
};

ListItem.defaultProps = {
  small: false,
  divided: true,
  onPress: null,
};

ListItem.displayName = 'List.Item';

export default withTheme(ListItem);
