import React from 'react';
import styled from 'styled-components';
import { string, bool, number } from 'prop-types';

import Text from '../../Text';

const HelperWrapper = styled.View(
  ({
    full,
    theme: {
      yoga: {
        components: { input },
      },
    },
  }) => `
    width: ${full ? '100%' : `${input.width}px`};
    max-width: ${full ? '100%' : `${input.width}px`};
    flex-direction: row;
    justify-content: space-between;

    margin-top: ${input.helper.margin.top}px;
  `,
);

const Info = styled(Text.Caption)(
  ({
    disabled,
    focused,
    error,
    theme: {
      yoga: {
        baseFont,
        colors,
        components: { input },
      },
    },
  }) => `
    flex-wrap: wrap;

    font-family: ${baseFont.family};
    color: ${input.helper.color.default};

    ${disabled ? `color: ${colors.text.disabled};` : ''}
    ${focused ? `color: ${input.helper.color.focus};` : ''}
    ${error ? `color: ${colors.feedback.attention.dark};` : ''}
  `,
);

const Helper = React.forwardRef(
  (
    {
      full,
      error,
      helper,
      disabled,
      focused,
      maxLength,
      length,
      hideMaxLength,
    },
    ref,
  ) => (
    <HelperWrapper ref={ref} full={full} disabled={disabled}>
      {(error || helper) && (
        <Info disabled={disabled} focused={focused} error={error}>
          {error || helper}
        </Info>
      )}
      {!hideMaxLength && maxLength && (
        <Info disabled={disabled} focused={focused} error={error}>
          {length}/{maxLength}
        </Info>
      )}
    </HelperWrapper>
  ),
);

Helper.propTypes = {
  disabled: bool,
  error: string,
  focused: bool,
  full: bool,
  helper: string,
  maxLength: number,
  length: number,
  hideMaxLength: bool,
};

Helper.defaultProps = {
  disabled: undefined,
  error: undefined,
  focused: false,
  full: false,
  helper: undefined,
  maxLength: undefined,
  length: undefined,
  hideMaxLength: false,
};

export default Helper;
