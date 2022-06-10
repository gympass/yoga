import React from 'react';
import styled from 'styled-components';
import { bool, string, number } from 'prop-types';

import Text from '../../Text';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
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
    margin-top: ${input.helper.margin.top}px;

    color: ${error ? colors.feedback.attention[1] : input.helper.color.default};
    ${disabled ? `color: ${colors.text.disabled};` : ''}
  `}
`;

const Info = styled(Text.Small)`
  color: currentColor;
  ${({
    hideMaxLength,
    theme: {
      yoga: {
        components: { input },
      },
    },
  }) => `
    font-size: ${input.helper.font.size}px;

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
      <Info as="span">
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