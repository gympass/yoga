import { borders } from './border';
import { backgroundColor } from './color';
import { elevation } from './elevation';
import { spacing } from './spacing';
import { typography } from './typography';
import { display, positions } from './layout';
import { flexes } from './flex';
import { compose } from './theme';

const system = compose(
  borders,
  backgroundColor,
  elevation,
  spacing,
  typography,
  display,
  positions,
  flexes,
);

export { system };
