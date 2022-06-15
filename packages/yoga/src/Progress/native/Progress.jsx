import React from 'react';
import styled from 'styled-components';
import { string, number, shape, oneOfType, oneOf } from 'prop-types';
import {
  backgroundColor,
  borders,
  elevation,
  positions,
  display,
  spacing as systemSpacing,
} from '@gympass/yoga-system';

import { charLength } from '../../shared';

const ProgressWrapper = styled.View`
  width: 100%;

  ${({ isNumber, align }) => `

  ${
    isNumber
      ? `
      flex-direction: row;
    `
      : `
      flex-direction: column;
    `
  }

  ${isNumber && align === 'left' ? 'flex-direction: row-reverse;' : ''}
  `}

  ${backgroundColor}
  ${borders}
  ${elevation}
  ${positions}
  ${display}
  ${systemSpacing}
`;

const ProgressBar = styled.View`
  position: relative;
  flex-grow: 1;

  margin: auto 0;

  ${({
    theme: {
      yoga: {
        components: { progress },
      },
    },
  }) => `
    height: ${progress.height}px;

    background-color: ${progress.backgroundColor.bar};

    border-radius: ${progress.border.radius}px;
  `};
`;
const ProgressValue = styled.View`
  position: absolute;

  height: 100%;

  ${({
    variant,
    width,
    theme: {
      yoga: {
        colors: { [variant]: color },
        components: { progress },
      },
    },
  }) =>
    `
    width: ${width}%;

    background-color: ${color};

    border-radius: ${progress.border.radius}px;
  `}
`;

const Label = styled.Text`
  ${({
    isNumber,
    align,
    theme: {
      yoga: {
        baseFont,
        spacing,
        colors,
        components: { progress },
      },
    },
  }) => `
  font-family: ${baseFont.family};
  font-size: ${progress.label.font.size}px;
  text-align: ${align};
  color: ${colors.deep};

  ${
    isNumber
      ? `
      width: 22px;

      margin-${align === 'right' ? 'left' : 'right'}: ${spacing.xxsmall}px;
    `
      : `
      margin-top: ${spacing.xxxsmall}px;
    `
  }
`}
`;

/** The Progress Bar is a component used to indicate a progress of an indicator
 * of quantity.  The use of labels numeric or alphabetic can increase the user
 * understanding. */
const Progress = React.forwardRef(
  ({ label, max, value, variant, ...props }, ref) => {
    const isNumber = !/[a-zA-Z]/g.test(label.value);
    const align = label.placement || 'left';

    return (
      <ProgressWrapper ref={ref} {...props} isNumber={isNumber} align={align}>
        <ProgressBar>
          <ProgressValue width={(value / max) * 100} variant={variant} />
        </ProgressBar>

        {Object.keys(label).length > 0 && (isNumber || label.value) && (
          <Label isNumber={isNumber} align={align}>
            {label.value}
          </Label>
        )}
      </ProgressWrapper>
    );
  },
);

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
