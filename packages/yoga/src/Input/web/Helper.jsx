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

    ${error ? `color: ${colors.negative[1]};` : ''}
    ${disabled ? `color: ${colors.disabled.background};` : ''}
  `}
`;

const Info = styled(Text.Small)`
  ${({
    right,
    hiddenMaxLength,
    theme: {
      yoga: {
        components: { input },
      },
    },
  }) => `
    color: currentColor;
    font-size: ${input.helper.font.size}px;

    ${right ? 'margin-left: auto;' : ''}
    ${hiddenMaxLength ? 'display: none;' : ''}

    `}
`;

const Helper = ({
  disabled,
  error,
  helper,
  maxLength,
  length,
  hiddenMaxLength,
}) => (
  <Wrapper disabled={disabled} error={error}>
    {(error || helper) && <Info as="span">{error || helper}</Info>}
    {maxLength && !hiddenMaxLength && (
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
  hiddenMaxLength: bool,
};

Helper.defaultProps = {
  disabled: undefined,
  error: undefined,
  helper: undefined,
  maxLength: undefined,
  length: undefined,
  hiddenMaxLength: undefined,
};

export default Helper;
