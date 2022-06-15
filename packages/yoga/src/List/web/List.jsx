import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledList = styled.ul`
  display: flex;

  width: 100%;
  padding: 0;
  margin: 0;

  list-style: none;

  ${({
    divided,
    horizontal,
    theme: {
      yoga: {
        components: { list },
      },
    },
  }) => `
    flex-direction: ${horizontal ? 'row' : 'column'};

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
  `}
`;

/** Lists are a continuous group of text or images. They are composed of items
containing primary and supplemental actions, which are represented by icons and
text. */
const List = React.forwardRef(({ horizontal, divided, ...rest }, ref) => (
  <StyledList horizontal={horizontal} divided={divided} ref={ref} {...rest} />
));

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
