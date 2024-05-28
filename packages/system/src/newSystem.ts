import { css } from 'styled-components';
import { toPx } from './unit';
import get from 'lodash.get';

const allowedSpacing = {
  margin: 'spacing',
  marginBottom: 'spacing',
  marginTop: 'spacing',
  marginRight: 'spacing',
  marginLeft: 'spacing',
  marginHorizontal: 'spacing',
  marginVertical: 'spacing',
  padding: 'spacing',
  paddingTop: 'spacing',
  paddingRight: 'spacing',
  paddingBottom: 'spacing',
  paddingLeft: 'spacing',
  paddingHorizontal: 'spacing',
  paddingVertical: 'spacing',
  width: 'spacing',
  maxWidth: 'spacing',
  minWidth: 'spacing',
  height: 'spacing',
  maxHeight: 'spacing',
  minHeight: 'spacing',
  top: 'spacing',
  bottom: 'spacing',
  left: 'spacing',
  right: 'spacing',
  gap: 'spacing',
};

const allowedBorder = {
    border: 'borders',
  borderTop: 'borders',
  borderRight: 'borders',
  borderBottom: 'borders',
  borderLeft: 'borders',
  borderWidth: 'borders',
  borderTopWidth: 'borders',
  borderRightWidth: 'borders',
  borderBottomWidth: 'borders',
  borderLeftWidth: 'borders',
};

const allowedRadii = {
  borderTopLeftRadius: 'radii',
  borderTopRightRadius: 'radii',
  borderBottomLeftRadius: 'radii',
  borderBottomRightRadius: 'radii',
  borderRadius: 'radii',
};

const allowedColors = {
  backgroundColor: 'colors',
  color: 'colors',
  borderColor: 'colors',
  borderTopColor: 'colors',
  borderRightColor: 'colors',
  borderBottomColor: 'colors',
  borderLeftColor: 'colors',
};

const allowedElevation = { elevation: 'elevations', boxShadow: 'elevations' };

const allowedLineHeight = { lineHeight: 'lineHeights' };

const allowedFontSize = { fontSize: 'fontSizes' };

const allowedFontWeight = { fontWeight: 'fontWeights' };

const allowedCss = {
  textAlign: 'plainCss',
  textTransform: 'plainCss',
  position: 'plainCss',
  display: 'plainCss',
  zIndex: 'plainCss',
  flex: 'plainCss',
  flexBasis: 'plainCss',
  flexFlow: 'plainCss',
  flexGrow: 'plainCss',
  flexShrink: 'plainCss',
  flexWrap: 'plainCss',
  flexDirection: 'plainCss',
  alignItems: 'plainCss',
  alignContent: 'plainCss',
  alignSelf: 'plainCss',
  justifyContent: 'plainCss',
  justifySelf: 'plainCss',
  order: 'plainCss',
  overflow: 'plainCss',
};

const alloweProps = {
  ...allowedSpacing,
  ...allowedBorder,
  ...allowedColors,
  ...allowedRadii,
  ...allowedFontSize,
  ...allowedFontWeight,
  ...allowedElevation,
  ...allowedLineHeight,
  ...allowedCss,
};

function translate(prop) {
  const props = {
    mb: 'marginBottom',
    mt: 'marginTop',
    ml: 'marginLeft',
    mr: 'marginRight',
    pb: 'paddingBottom',
    pt: 'paddingTop',
    pl: 'paddingLeft',
    pr: 'paddingRight',
    bg: 'backgroundColor',
    bgColor: 'backgroundColor',
    // elevation: 'boxShadow',
    c: 'color',
    fs: 'fontSize',
    lh: 'lineHeight',
    ta: 'textAlign',
    tt: 'textTransform',
    d: 'display',
    of: 'overflow',
    ox: 'overflowX',
    oy: 'overflowY',
    p: 'padding',
    b: 'border',
    fw: 'fontWeight',
    w: 'width'
  };

  return props[prop] || prop;
}

const transformBorder = value => {
  if (Number(value) && value !== 0) {
    return `${toPx(value)} solid`;
  }

  if (Number(value) === 0) {
    return 'none';
  }

  return value;
};

function transform(variant, key, value) {
  if (['spacing', 'lineHeights'].indexOf(variant) !== -1) return toPx(value);
  if (
    ['borderTop', 'borderRight', 'borderBottom', 'borderLeft'].indexOf(key) !==
    -1
  )
    return transformBorder(value);
  if (variant === 'borders') return toPx(value);
  return value;
}

function apply(yoga, variant, key, value) {
  const valueToTransform = get(yoga[variant], value, value)
  const valueToApply = transform(
    variant,
    key,
    valueToTransform,
  );

  return { [key]: valueToApply };
}

export function newSystem(props) {
  // console.log({ props });
  const keys = Object.keys(props);

  let innerCss = {};

  // eslint-disable-next-line no-restricted-syntax
  for (const key of keys) {
    let newCss;
    const translated = translate(key);

    const variant = alloweProps[translated];

    if (variant) {
      if (variant === 'plainCss') {
        innerCss = {
          ...innerCss,
          ...{ [translated]: props[key] },
        };
        // eslint-disable-next-line no-continue
        continue;
      }

      newCss = apply(props.theme.yoga, variant, translated, props[key]);
      innerCss = {
        ...innerCss,
        ...newCss,
      };
    }
  }

//   console.log(innerCss);

  if (Object.keys(innerCss).length === 0) return;

  return css({ ...innerCss });
}
