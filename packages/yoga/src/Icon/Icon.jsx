import React from 'react';
import { oneOf, elementType, string, instanceOf } from 'prop-types';
import { withTheme } from 'styled-components';

const Icon = ({
  as: Component,
  fill,
  size,
  width = size,
  height = size,
  stroke,
  theme,
  ...props
}) => (
  <Component
    {...(width && { width: theme.yoga.spacing[width] || width })}
    {...(height && { height: theme.yoga.spacing[height] || height })}
    {...(fill && { fill: theme.yoga.colors[fill] || fill })}
    {...(stroke && { stroke: theme.yoga.colors[stroke] || stroke })}
    {...props}
  />
);

const commonSizes = [
  'xxxsmall',
  'xxsmall',
  'xsmall',
  'small',
  'medium',
  'large',
  'xlarge',
  'xxlarge',
  'xxxlarge',
  'huge',
  'xhuge',
];

Icon.propTypes = {
  /** SVG to be rendered. */
  as: elementType.isRequired,
  /** Fill color. Use it as one of theme.colors
   * tokens (vibin, neutral, stamina...) */
  fill: string,
  /** Horizontal and Vertical size of the SVG. Use it as one of
   * theme.spacing tokens (xxsmall, small, medium...) */
  size: oneOf([...commonSizes, instanceOf(Number)]),
  /** Horizontal size of the SVG. Use it as one of
   * theme.spacing tokens (xxsmall, small, medium...) */
  width: oneOf([...commonSizes, instanceOf(Number)]),
  /** Vertical size of the SVG. Use it as one of
   * theme.spacing tokens (xxsmall, small, medium...) */
  height: oneOf([...commonSizes, instanceOf(Number)]),
  /** Stroke color. Use it as one of theme.colors
   * tokens (vibin, neutral, stamina...) */
  stroke: string,
};

Icon.defaultProps = {
  fill: undefined,
  size: undefined,
  width: undefined,
  height: undefined,
  stroke: undefined,
};

export default withTheme(Icon);
