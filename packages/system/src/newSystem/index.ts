import { css } from 'styled-components';
import { toPx } from '../unit';
import get from 'lodash.get';
import translate from './translate';

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

const allowedProps = {
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

type Prop = keyof typeof allowedProps;
type Variant =
  | 'spacing'
  | 'borders'
  | 'radii'
  | 'colors'
  | 'elevations'
  | 'lineHeights'
  | 'fontSizes'
  | 'fontWeights'
  | 'plainCss'
  | undefined;

const TRANSFORM_TO_PX = ['spacing', 'lineHeights', 'borders'];
const TRANSFORM_TO_BORDER = [
  'borderTop',
  'borderRight',
  'borderBottom',
  'borderLeft',
];

function transformBorder(value: string): string {
  if (Number(value) && Number(value) !== 0) {
    return `${toPx(value)} solid`;
  }

  if (Number(value) === 0) {
    return 'none';
  }

  return value;
}

function transform(variant: string, key: string, value: string): string {
  if (TRANSFORM_TO_PX.includes(variant)) return String(toPx(value));
  if (TRANSFORM_TO_BORDER.includes(key)) return transformBorder(value);
  return value;
}

function apply(yoga, variant: string, key: Prop, value: string) {
  const valueToTransform = get(yoga[variant], value, value);
  const valueToApply = transform(variant, key, valueToTransform);

  return valueToApply;
}

export function newSystem(props: Record<string, any>) {
  const keys = Object.keys(props);

  let innerCss = {};

  for (let x = 0; x < keys.length; x++) {
    const key = keys[x];
    const translated = translate(key);

    const variant = allowedProps[translated] as Variant;

    if (variant) {
      if (variant === 'plainCss') {
        innerCss[translated] = props[key];
        // eslint-disable-next-line no-continue
        continue;
      }

      const value = apply(
        props.theme.yoga,
        variant,
        translated as Prop,
        props[key],
      );

      innerCss[translated] = value;
    }
  }

  if (Object.keys(innerCss).length === 0) return;

  return css({ ...innerCss });
}
