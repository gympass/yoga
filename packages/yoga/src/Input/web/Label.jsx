import React from 'react';
import styled, { css } from 'styled-components';
import { bool, node, string } from 'prop-types';

import Fieldset from './Fieldset';
import Legend from './Legend';

const StyledLabel = styled.label`
  position: absolute;

  letter-spacing: normal;
  pointer-events: none;
  user-select: none;

  ${({
    disabled,
    error,
    theme: {
      yoga: {
        colors,
        transition,
        components: { input },
      },
    },
  }) => css`
    top: ${input.padding.top * 1.5}px;
    left: ${input.padding.left}px;

    font-size: ${input.label.font.size.default}px;
    font-weight: ${input.label.font.weight.default};
    color: ${input.label.color.default};

    transform: translateY(-40%);

    transition-duration: ${transition.duration[1]}ms;
    transition-timing-function: cubic-bezier(${transition.timing[0].join()});

    ${error ? `color: ${colors.negative[1]};` : ''}
    ${disabled ? `color: ${colors.elements.backgroundAndDisabled};` : ''}
  `}
`;

const Label = ({ children, typed, error, disabled, ...props }) => (
  <>
    <StyledLabel error={error} disabled={disabled} {...props}>
      {children}
    </StyledLabel>
    <Fieldset error={error} disabled={disabled} area-hidden="true">
      <Legend typed={typed}>{children}</Legend>
    </Fieldset>
  </>
);

Label.propTypes = {
  children: node.isRequired,
  typed: bool,
  error: string,
  disabled: bool,
};

Label.defaultProps = {
  typed: undefined,
  error: undefined,
  disabled: undefined,
};

export default Label;
