import React from 'react';
import styled from 'styled-components';
import { bool, string, number } from 'prop-types';

import Text from '../../Text';

const Wrapper = styled.div`
  ${({
    disabled,
    error,
    theme: {
      yoga: {
        colors,
        components: { input },
      },
    },
  }) => `
    display: flex;
    margin-top: ${input.helper.margin.top}px;

    color: ${error ? colors.feedback.attention[1] : input.helper.color};
    ${disabled ? `color: ${colors.elements.backgroundAndDisabled};` : ''}
  `}
`;

const Info = styled(Text.Small)`
  ${({
    right,
    hideMaxLength,
    theme: {
      yoga: {
        components: { input },
      },
    },
  }) => `
    color: currentColor;
    font-size: ${input.helper.font.size}px;

    ${right ? 'margin-left: auto;' : ''}
    ${hideMaxLength ? 'display: none;' : ''}

    `}
`;

const Helper = ({
  disabled,
  error,
  helper,
  maxLength,
  length,
  hideMaxLength,
}) => (
  <Wrapper disabled={disabled} error={error}>
    {(error || helper) && <Info as="span">{error || helper}</Info>}
    {maxLength && !hideMaxLength && (
      <Info as="span" right>
        {length}/{maxLength}
      </Info>
    )}
  </Wrapper>
);

Helper.propTypes = {
  disabled: bool,
  error: string,
  helper: string,
  maxLength: number,
  length: number,
  hideMaxLength: bool,
};

Helper.defaultProps = {
  disabled: undefined,
  error: undefined,
  helper: undefined,
  maxLength: undefined,
  length: undefined,
  hideMaxLength: undefined,
};

export default Helper;
