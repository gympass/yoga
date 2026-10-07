import React from 'react';
import {
  oneOf,
  elementType,
  string,
  checkPropTypes,
  oneOfType,
  number,
} from 'prop-types';
import { withTheme } from 'styled-components';
import get from 'lodash.get';

import Box from '../Box';

// Box resolves width/height against the same `spacing` scale again. That
// object maps both token names (xxxsmall, small...) and numeric indexes
// (0, 1, 2...) to pixel values, so a resolved number that happens to also be
// a valid index (e.g. xxxsmall -> 4) would get looked up a second time and
// silently swapped for a different size. Suffixing with "px" only when that
// collision is possible keeps every other size byte-for-byte the same.
const resolveSize = (spacing, value) => {
  const resolved = get(spacing, value, value);
  const collidesWithIndex =
    typeof resolved === 'number' && get(spacing, resolved) !== undefined;

  return collidesWithIndex ? `${resolved}px` : resolved;
};

const Icon = ({
  as: Component,
  size = 12,
  width = size,
  height = size,
  fill,
  stroke,
  theme,
  title,
  description,
  ariaLabel,
  ...props
}) => {
  const componentWithTitle = propsTitle => {
    const titleId = `${ariaLabel}-titleId`;
    let ariaDescribedBy = titleId;
    const titleElement = (
      <title id={titleId} key={titleId}>
        {title}
      </title>
    );

    let svgChildren = [titleElement];

    if (description) {
      const descId = `${ariaLabel}-descId`;
      const descElement = (
        <desc id={descId} key={descId}>
          {description}
        </desc>
      );

      ariaDescribedBy += ` ${descId}`;

      svgChildren = [...svgChildren, descElement];
    }

    const defaultProps = {
      ...Component.defaultProps,
      role: 'img',
      'aria-describedby': ariaDescribedBy,
    };

    const newSvg = React.createElement(
      'svg',
      { ...propsTitle, ...defaultProps },
      svgChildren,
      Component().props.children,
    );

    return newSvg;
  };

  return (
    <Box
      as={title && ariaLabel ? componentWithTitle : Component}
      width={resolveSize(theme.yoga.spacing, width)}
      height={resolveSize(theme.yoga.spacing, height)}
      {...(fill && { fill: get(theme.yoga.colors, fill, fill) })}
      {...(stroke && { stroke: get(theme.yoga.colors, stroke, stroke) })}
      {...props}
      aria-hidden={title ? undefined : true}
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
  /** SVG to be rendered. */
  as: elementType.isRequired,
  /** Fill color. Use it as one of theme.colors
   * tokens (vibin, neutral, stamina...) */
  fill: string,
  /** Stroke color. Use it as one of theme.colors
   * tokens (vibin, neutral, stamina...) */
  stroke: string,
  /** Text that will be displayed in the title element, used for accessibility */
  title: string,
  /** Text used as element description, used for accessibility.
   * A title must be given in order to use description corretly.
   */
  description: string,
  /** Text used as identifier for aria-describedby, title and description */
  ariaLabel: (props, propName, componentName) => {
    const { title, ariaLabel } = props;

    if (title && !ariaLabel) {
      return new Error(
        `accessible elements, such as title, must receive the ${propName} property as an identifier.`,
      );
    }

    checkPropTypes(
      {
        [propName]: string,
      },
      { ariaLabel },
      'prop',
      componentName,
    );

    return null;
  },
  /** Horizontal size of the SVG. Use it as one of
   * theme.spacing tokens (xxsmall, small, medium...) */
  width: oneOfType([oneOf(commonSizes), string, number]),
  /** Vertical size of the SVG. Use it as one of
   * theme.spacing tokens (xxsmall, small, medium...) */
  height: oneOfType([oneOf(commonSizes), string, number]),
  /** Size for vertical and horizontal of the SVG.
   * Use it as one of theme.spacing tokens (xxsmall, small, medium...) */
  size: oneOfType([oneOf(commonSizes), string, number]),
};

export default withTheme(Icon);
