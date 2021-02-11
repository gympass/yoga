import React from 'react';
import { oneOf, elementType, string } from 'prop-types';
import { withTheme } from 'styled-components';

const Icon = ({
  as: Component,
  width,
  height,
  fill,
  stroke,
  theme,
  ...props
}) => {
  return (
    <Component
      width={theme.yoga.spacing[width] || width}
      height={theme.yoga.spacing[height] || height}
      {...(fill && { fill: theme.yoga.colors[fill] || fill })}
      {...(stroke && { stroke: theme.yoga.colors[stroke] || stroke })}
      {...props}
    />
  );
};

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
  as: elementType.isRequired,
  fill: string,
  stroke: string,
  width: oneOf(commonSizes),
  height: oneOf(commonSizes),
};

Icon.defaultProps = {
  fill: undefined,
  stroke: undefined,
  width: 'xsmall',
  height: 'xsmall',
};

export default withTheme(Icon);
