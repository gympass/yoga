import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledList = styled.ul(
  ({
    divided,
    horizontal,
    theme: {
      yoga: {
        components: { list },
      },
    },
  }) => `
  display: flex;
  width: 100%;
  flex-direction: ${horizontal ? 'row' : 'column'};
  list-style: none;
  padding: 0;
  margin: 0;

  > * {
      ${
        divided
          ? `border-${horizontal ? 'right' : 'bottom'}: ${
              list.border.width
            }px solid ${list.border.color}`
          : ''
      };

      &:last-child {
        border: none;
      }
    }
  }
`,
);

/** Lists are a continuous group of text or images. They are composed of items containing primary and supplemental actions, which are represented by icons and text. */
const List = ({ horizontal, divided, ...rest }) => (
  <StyledList horizontal={horizontal} divided={divided} {...rest} />
);

List.propTypes = {
  horizontal: PropTypes.bool,
  divided: PropTypes.bool,
};

List.defaultProps = {
  horizontal: false,
  divided: true,
};

List.displayName = 'List';

export default List;
