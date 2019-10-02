import { merge } from '../utils';
import tokens from '../global';

const button = {
  backgroundColor: tokens.colors.milan[1],
};

const components = { button };

export default merge(tokens, { components });
