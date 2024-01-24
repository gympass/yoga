import React from 'react';
import styled from 'styled-components/native';
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
import type { View } from 'react-native';
import type { InferProps } from 'prop-types';

const ProgressWrapper = styled.View<{
  isNumber: boolean;
  align: string;
  // TODO: Better type children
  children: any;
}>`
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

// TODO: Type theme
const ProgressBar = styled.View<{ theme: any }>`
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

// TODO: Type theme
const ProgressValue = styled.View<{
  width: number;
  variant: string;
  theme: any;
}>`
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

// TODO: Type theme
const Label = styled.Text<{ isNumber: boolean; align: string; theme: any }>`
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

const propTypes = {
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

// TODO: Use system typing
type ProgressProps = InferProps<typeof propTypes> & { [key: string]: any };

/** The Progress Bar is a component used to indicate a progress of an indicator
 * of quantity.  The use of labels numeric or alphabetic can increase the user
 * understanding. */
const Progress = React.forwardRef<View, ProgressProps>(
  ({ label, max, value, variant, ...props }, ref) => {
    const isNumber = !/[a-zA-Z]/g.test(label?.value as string);
    const align = label?.placement || 'left';

    return (
      <ProgressWrapper ref={ref} {...props} isNumber={isNumber} align={align}>
        <ProgressBar>
          {/* TODO: Fix as number cast */}
          <ProgressValue
            width={((value as number) / (max as number)) * 100}
            variant={variant as string}
          />
        </ProgressBar>

        {Object.keys(label as object).length > 0 && (isNumber || label?.value) && (
          <Label isNumber={isNumber} align={align}>
            {label?.value as string}
          </Label>
        )}
      </ProgressWrapper>
    );
  },
);

Progress.propTypes = propTypes;

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
