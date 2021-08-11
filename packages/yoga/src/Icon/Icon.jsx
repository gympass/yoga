import React from 'react';
import { oneOf, elementType, string, oneOfType, number } from 'prop-types';
import { withTheme } from 'styled-components';

const Icon = ({
  as: Component,
  width,
  height,
  fill,
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
  /** Stroke color. Use it as one of theme.colors
   * tokens (vibin, neutral, stamina...) */
  stroke: string,
  /** Horizontal size of the SVG. Use it as one of
   * theme.spacing tokens (xxsmall, small, medium...) */
  width: oneOfType([oneOf(commonSizes), string, number]),
  /** Vertical size of the SVG. Use it as one of
   * theme.spacing tokens (xxsmall, small, medium...) */
  height: oneOfType([oneOf(commonSizes), string, number]),
};

Icon.defaultProps = {
  fill: undefined,
  stroke: undefined,
  width: undefined,
  height: undefined,
};

export default withTheme(Icon);
