import React from 'react';
import theme from '@gympass/yoga-tokens';

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

type AdditionalProperties = {
  [key: string]: {
    [key: string]: {
      [key: string]: {},
    },
  },
};

export type SystemProps = {
  as?: React.ElementType | React.FC | string;
  spacing?: string;
  stroke?: string;
  fill?: string;
  children?: React.ReactNode;
  theme?: AdditionalProperties;
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
  props: SystemValues;
  prop: SystemKeys | SystemKeys[];
  cssProperty: string | string[];
  getter?: ((componentProps: SystemValues) => DesignTokens) | (() => DesignTokens) | (() => object) | (() => SystemProps);
  transform?: (value: string | number) => void;
}

export type SystemValues = Omit<SystemProps, 'as' | 'children'>;
export type ComposeProps = (props: SystemValues) => Generator;

type SystemKeys = keyof SystemValues;
