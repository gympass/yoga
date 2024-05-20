import tokens from '@gympass/yoga-tokens';

type SpacingValues = typeof tokens.spacing | string | number;

type Display = {
  display?: string;
  d?: string;
};

export type Layout = Display & {
  position?: string;
  top?: SpacingValues;
  right?: SpacingValues;
  bottom?: SpacingValues;
  left?: SpacingValues;
  zIndex?: string | number;
};
