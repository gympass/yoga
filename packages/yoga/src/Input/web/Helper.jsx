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
    theme: {
      yoga: {
        components: { input },
      },
    },
  }) => `
    color: currentColor;
    font-size: ${input.helper.font.size}px;
    
    ${right ? 'margin-left: auto;' : ''}
  `}
`;

const Helper = ({ disabled, error, helper, maxLength, length }) => (
  <Wrapper disabled={disabled} error={error}>
    {(error || helper) && <Info as="span">{error || helper}</Info>}
    {maxLength && (
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
};

Helper.defaultProps = {
  disabled: undefined,
  error: undefined,
  helper: undefined,
  maxLength: undefined,
  length: undefined,
};

export default Helper;
