import React from 'react';
import { oneOf, elementType, string, instanceOf } from 'prop-types';
import { withTheme } from 'styled-components';

const Icon = ({ as: Component, fill, size, stroke, theme, ...props }) => (
  <Component
    {...(size && { width: theme.yoga.spacing[size] || size })}
    {...(size && { height: theme.yoga.spacing[size] || size })}
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
  /** Stroke color. Use it as one of theme.colors
   * tokens (vibin, neutral, stamina...) */
  stroke: string,
};

Icon.defaultProps = {
  fill: undefined,
  size: undefined,
  stroke: undefined,
};

export default withTheme(Icon);
