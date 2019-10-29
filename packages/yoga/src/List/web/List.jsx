import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledList = styled.ul`
  ${({
    divided,
    horizontal,
    theme: {
      components: {
        list: {
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
      }
    }
  `}
`;

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
