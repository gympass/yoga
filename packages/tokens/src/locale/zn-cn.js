import { merge } from '../utils';
import tokens from '../global';

const button = {
  backgroundColor: tokens.colors.buenosAires.crossfit,
};

const components = { button };

export default merge(tokens, { components });
