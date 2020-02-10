import React from 'react';
import styled from 'styled-components';
import { string, number, shape, oneOfType, oneOf, bool } from 'prop-types';

const ProgressBar = styled.progress`
  border: none;
  width: 100%;

  ${({
    theme: {
      yoga: {
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
    background-color: ${progress.backgroundColor.value};
  }

  &&,
  &:not(value)::-moz-progress-bar {
    background-color: ${progress.backgroundColor.bar};
  }

  &[value]::-moz-progress-bar {
    background-color: ${progress.backgroundColor.value};
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
`}
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;

  ${({
    isNumber,
    align,
    theme: {
      yoga: { spacing },
    },
  }) =>
    isNumber
      ? `
        ${Label} {
          margin-${isNumber && align === 'right' ? 'left' : 'right'}: ${
          spacing.xsmall
        }px;
        }
    
        ${ProgressBar} {
          margin: auto;
        }
    `
      : 'flex-direction: column;'}
  
  align-items: ${({ align }) =>
    align === 'right' ? `flex-end` : 'flex-start'};

  ${({ isNumber, align }) =>
    isNumber && align === 'left' ? 'flex-direction: row-reverse;' : ''}
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
 * of quantity.  The use of labels numeric or alphabetic can increase the user
 * understanding. */
const Progress = ({ label, max, value, ...props }) => (
  <Wrapper
    isNumber={!Number.isNaN(label.value)}
    align={label.placement || 'left'}
    {...props}
  >
    <ProgressBar max={max} value={value} />
    {Object.keys(label).length > 0 && label.value && (
      <Label>{label.value}</Label>
    )}
  </Wrapper>
);

Progress.propTypes = {
  label: shape({
    value: oneOfType([string, number]),
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
};

Progress.defaultProps = {
  label: {
    value: undefined,
    placement: 'left',
  },
  max: 1,
  value: undefined,
};

export default Progress;
