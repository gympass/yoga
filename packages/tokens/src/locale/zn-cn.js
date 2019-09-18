import merge from 'deepmerge';
import tokens, { colors } from '../global';

const button = {
  success: colors.madrid.crossfit,
};

export default merge(tokens, button);
