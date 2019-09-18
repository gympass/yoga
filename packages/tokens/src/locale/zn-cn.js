import merge from 'deepmerge';
import * as tokens from '../global';

const button = {
  success: tokens.colors.madrid.crossfit,
  error: tokens.colors.amsterda.crossfit,
};

const components = { button };

export default merge(tokens, { components });
