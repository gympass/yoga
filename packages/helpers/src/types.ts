import { BreakpointsKey } from '@gympass/yoga-tokens';

import { CSSObject, FlattenSimpleInterpolation } from 'styled-components';
export type Width = BreakpointsKey | BreakpointsKey[];

export type Media = {
  not: MediaProps;
} & MediaProps;

export type Matcher = (
  width: Width,
  isNot?: boolean,
  range?: 'min' | 'max'
) => Match;

export type Hide = {
  [key in BreakpointsKey | StartBreakPoints]?: FlattenSimpleInterpolation;
};

export type Entries<T> = {
  [K in keyof T]: [K, T[K]];
}[keyof T][];

type StartBreakPoints =
  | 'xxs-start'
  | 'xs-start'
  | 'sm-start'
  | 'md-start'
  | 'lg-start'
  | 'xl-start'
  | 'xxl-start'
  | 'xxxl-start';

type MediaProps = {
  hide: Hide;
  max: Max;
  between: Between;
} & MappedType;

type MappedType = {
  [key in BreakpointsKey]: Match;
};

type Max = (width: Width) => Match;

export type Between = (min: BreakpointsKey, max: BreakpointsKey) => Match;

type Match = (
  first: TemplateStringsArray | CSSObject,
  ...interpolations: any[]
) => FlattenSimpleInterpolation;
