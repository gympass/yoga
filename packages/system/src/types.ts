import React from 'react';
import theme from '@gympass/yoga-tokens';
import { Theme } from '@gympass/yoga/Theme';

import { CSSObject, FlattenSimpleInterpolation } from 'styled-components';

import type {
  Borders,
  Colors,
  Elevations,
  Flex,
  FontWeights,
  Layout,
  Overflows,
  Spacing,
  Typography
} from './index';

export type SystemProps = {
  as?: React.ElementType | React.FC | string;
  spacing?: string;
  stroke?: string;
  fill?: string;
  children?: React.ReactNode;
} & Borders &

  Colors &
  Elevations &
  Flex &
  FontWeights &
  Layout &
  Overflows &
  Spacing &
  Typography;

export type DesignTokens = typeof theme;

export type Generator =
  | CSSObject
  | TemplateStringsArray
  | (string | CSSObject)[]
  | FlattenSimpleInterpolation;

export interface GeneratorProps {
  props: SystemProps & { theme?: { yoga: Theme } };
  prop: SystemKeys | SystemKeys[];
  cssProperty: string | string[];
  getter?: ((componentProps: SystemValues) => DesignTokens) | (() => DesignTokens) | (() => object) | (() => SystemProps);
  transform?: (value: string | number) => void;
}

export type SystemValues = Omit<SystemProps, 'as' | 'children'>;
export type ComposeProps = (props: SystemValues) => Generator;

type SystemKeys = keyof SystemValues;
