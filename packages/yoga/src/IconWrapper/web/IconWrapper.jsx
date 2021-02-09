import React from 'react';
import { oneOf, elementType, string } from 'prop-types';
import { withTheme } from 'styled-components';

const IconWrapper = ({
  as: Component,
  width,
  height,
  fill,
  stroke,
  theme,
  ...props
}) => (
  <Component
    fill={theme.yoga.colors[fill] || fill}
    stroke={theme.yoga.colors[stroke] || stroke}
    width={theme.yoga.spacing[width] || width}
    height={theme.yoga.spacing[height] || height}
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

IconWrapper.propTypes = {
  as: elementType.isRequired,
  fill: string,
  stroke: string,
  width: oneOf(commonSizes),
  height: oneOf(commonSizes),
};

IconWrapper.defaultProps = {
  fill: 'stamina',
  stroke: 'rgba(0, 0, 0, 0)',
  width: 'xsmall',
  height: 'xsmall',
};

export default withTheme(IconWrapper);
