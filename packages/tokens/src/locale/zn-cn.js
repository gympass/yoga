import merge from 'deepmerge';
import * as tokens from '../global';

const components = {
  button: {
    success: tokens.colors.madrid.crossfit,
    error: tokens.colors.munich.crossfit,
    new: tokens.colors.white,
  },
};

const fonts = ['Daltoso'];

export default merge(tokens, { components, fonts });
