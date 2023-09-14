import { SystemProps } from '@gympass/yoga-system';

const colors = [
  'primary',
  'secondary',
  'vibin',
  'hope',
  'energy',
  'relax',
  'peace',
  'verve',
  'uplift',
  'deepPurple',
  'stamina',
  'dark',
  'medium',
  'deep',
  'light',
  'clear',
  'white'
] as const;
type colorProps = typeof colors[number];

const sizes = [
  'xxsmall',
  'xsmall',
  'small',
  'medium',
  'large',
  'xlarge',
  'xxlarge',
  'xxxlarge',
  'huge',
] as const;
export type fontSizes = typeof sizes[number];

export interface TextProps extends SystemProps {
  inverted?: boolean;
  numberOfLines?: number;
  /** @deprecated use color instead */
  variant?: colorProps;
  color?: colorProps;
  /** @deprecated use fontSize instead */
  size?: fontSizes;
  fontSize?: fontSizes;
  /** set the font-weight to regular */
  light?: boolean;
}
