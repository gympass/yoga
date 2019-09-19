import { merge } from '../utils';
import tokens, { colors } from '../global';

const button = {
  success: tokens.colors.madrid.crossfit,
  error: tokens.colors.amsterda.crossfit,
};

const components = { button };

export default merge(tokens, { components });
