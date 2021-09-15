import React from 'react';
import styled from 'styled-components';
import { string, number, shape, oneOfType, oneOf, bool } from 'prop-types';
import {
  backgroundColor,
  border,
  elevation,
  positions,
  display,
  spacing as Spacing,
} from '@gympass/yoga-system';

import { charLength } from '../../shared';

const ProgressBar = styled.progress`
  width: 100%;

  border: none;

  ${({
    variant,
    theme: {
      yoga: {
        colors: { [variant]: color },
        components: { progress },
      },
    },
  }) => `
  height: ${progress.height}px;

  &&,
  &::-webkit-progress-value,
  &[value]::-webkit-progress-bar,
  &:not(value)::-webkit-progress-bar {
    border-radius: ${progress.border.radius}px;
  }

  &:not(value)::-moz-progress-bar,
  &[value]::-moz-progress-bar {
    border-radius: ${progress.border.radius}px;
  }

  &:not(value)::-webkit-progress-bar {
    background-color: ${progress.backgroundColor.bar};
  }

  &::-webkit-progress-value {
    background-color: ${color};
  }

  &&,
  &:not(value)::-moz-progress-bar {
    background-color: ${progress.backgroundColor.bar};
  }

  &[value]::-moz-progress-bar {
    background-color: ${color};
  }
`}
`;

const Label = styled.label`
  ${({
    theme: {
      yoga: {
        components: { progress },
      },
    },
  }) => `
  font-size: ${progress.label.font.size}px;
  letter-spacing: normal;
`}
`;

const Wrapper = styled.div`
  display: flex;

  width: 100%;

  ${({
    isNumber,
    align,
    theme: {
      yoga: { spacing },
    },
  }) => `
    ${
      isNumber
        ? `
        ${Label} {
          width: 22px;

          margin-${align === 'right' ? 'left' : 'right'}: ${spacing.xxsmall}px;
        }

        ${ProgressBar} {
          margin: auto;
        }
    `
        : `
        flex-direction: column;

        ${Label} {
          max-width: 280px;

          margin-top: ${spacing.xxxsmall}px;
        }
      `
    }

      ${
        align === 'right'
          ? 'align-items: flex-end; text-align: right;'
          : 'align-items: flex-start;'
      }
      ${isNumber && align === 'left' ? 'flex-direction: row-reverse;' : ''}
  `}

  ${backgroundColor}
  ${border}
  ${elevation}
  ${positions}
  ${display}
  ${Spacing}
`;

Wrapper.propTypes = {
  align: oneOf(['left', 'right']),
  isNumber: bool,
};

Wrapper.defaultProps = {
  align: 'left',
  isNumber: false,
};

/** The Progress is a component used to indicate a progress of an indicator
 * of quantity. The use of labels numeric or alphabetic can increase the user
 * understanding. */
const Progress = ({ label, max, value, variant, ...props }) => {
  const isNumber = !isNaN(label.value);

  return (
    <Wrapper isNumber={isNumber} align={label.placement} {...props}>
      <ProgressBar max={max} value={value} variant={variant} />
      {Object.keys(label).length > 0 && (isNumber || label.value) && (
        <Label>{label.value}</Label>
      )}
    </Wrapper>
  );
};

Progress.propTypes = {
  /** Use labels to increase users understanding. If the value is numeric, make
   * sure it has a maximum of 3 characters */
  label: shape({
    value: charLength(3, oneOfType([number, string])),
    placement: oneOf(['left', 'right']),
  }),
  /** This attribute describes how much work the task indicated by the progress
   * element requires. The max attribute, if present, must have a value greater
   * than zero and be a valid floating point number. The default value is 1. */
  max: number,
  /** This attribute specifies how much of the task that has been completed. It
   * must be a valid floating point number between 0 and max, or between 0 and 1
   * if max is omitted. If there is no value attribute, the progress bar is
   * indeterminate; this indicates that an activity is ongoing with no
   * indication of how long it is expected to take. */
  value: number,
  /** style the card following the theme (primary, secondary, vibin, hope,
   * energy, relax, peace, verve, uplift, deepPurple, deep, stamina, dark,
   * medium, light, clear, white) */
  variant: oneOf([
    'primary',
    'secondary',
    'vibin',
    'hope',
    'energy',
    'relax',
    'peace',
    'verve',
    'uplift',
    'deepPurple',
    'stamina',
    'dark',
    'medium',
    'deep',
    'light',
    'clear',
    'white',
  ]),
};

Progress.defaultProps = {
  label: {
    value: undefined,
    placement: 'left',
  },
  max: 1,
  value: undefined,
  variant: 'verve',
};

export default Progress;
