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

const Icon = ({
  as: Component,
  size,
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
  const withTitle = propsTitle => {
    const defaultProps = {
      width: '12',
      height: '12',
      viewBox: '0 0 12 12',
      role: 'img',
    };
    const titleElement = <title>{title}</title>;
    const descElement = <desc>{description}</desc>;

    const newSvg = React.createElement(
      'svg',
      { ...propsTitle, ...defaultProps },
      titleElement,
      descElement,
      Component().props.children,
    );

    return newSvg;
  };

  return (
    <Box
      as={title ? withTitle : Component}
      width={get(theme.yoga.spacing, width, width)}
      height={get(theme.yoga.spacing, height, height)}
      {...(fill && { fill: get(theme.yoga.colors, fill, fill) })}
      {...(stroke && { stroke: get(theme.yoga.colors, stroke, stroke) })}
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
  ariaLabel: string,
  /** Horizontal size of the SVG. Use it as one of
   * theme.spacing tokens (xxsmall, small, medium...) */
  width: oneOfType([oneOf(commonSizes), string, number]),
  /** Vertical size of the SVG. Use it as one of
   * theme.spacing tokens (xxsmall, small, medium...) */
  height: oneOfType([oneOf(commonSizes), string, number]),
  /** Size for vertical and horizontal of the SVG.
   * Use it as one of theme.spacing tokens (xxsmall, small, medium...) */
  size: (props, propName, componentName) => {
    const { size, width, height } = props;

    if (size && (width || height)) {
      return new Error(
        `you must use only ${propName}, alone, or width and/or height in ${componentName}`,
      );
    }

    checkPropTypes(
      {
        [propName]: oneOfType([oneOf(commonSizes), string, number]),
      },
      { size },
      'prop',
      componentName,
    );

    return null;
  },
};

Icon.defaultProps = {
  fill: undefined,
  stroke: undefined,
  title: 'teste',
  description: 'teste description',
  ariaLabel: 'label test',
  width: 30,
  height: undefined,
  size: undefined,
};

export default withTheme(Icon);
