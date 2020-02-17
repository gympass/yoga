import React from 'react';
import styled from 'styled-components';
import { bool, string, number } from 'prop-types';

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

    color: ${input.helper.color};

    ${error ? `color: ${colors.negative[1]};` : ''}
    ${disabled ? `color: ${colors.disabled.background};` : ''}
  `}
`;

const Info = styled.span`
  ${({
    right,
    theme: {
      yoga: {
        components: { input },
      },
    },
  }) => `
    font-size: ${input.helper.font.size}px;
    
    ${right ? 'margin-left: auto;' : ''}
  `}
`;

const Helper = ({ disabled, error, helper, maxLength, length }) => (
  <Wrapper disabled={disabled} error={error}>
    {(error || helper) && <Info>{error || helper}</Info>}
    {maxLength && (
      <Info right>
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
};

Helper.defaultProps = {
  disabled: undefined,
  error: undefined,
  helper: undefined,
  maxLength: undefined,
  length: undefined,
};

export default Helper;
