import { spacing } from '@gympass/yoga-tokens';

type GapValues = typeof spacing | string | number;

export type Flex = {
  flexDirection?: string;
  alignItems?: string;
  alignContent?: string;
  alignSelf?: string;
  justifyContent?: string;
  justifySelf?: string;
  flex?: string | number;
  flexBasis?: string;
  flexFlow?: string;
  flexGrow?: string | number;
  flexShrink?: string;
  flexWrap?: string;
  order?: string | number;
  gap?: GapValues;
};