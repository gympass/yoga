import { borders } from './border';
import { backgroundColor } from './color';
import { elevation } from './elevation';
import { spacing } from './spacing';
import { typography } from './typography';
import { compose } from './theme';

const system = compose(
  borders,
  backgroundColor,
  elevation,
  spacing,
  typography,
);

export { system };
