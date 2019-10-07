import { merge } from '../utils';
import tokens from '../global';

const negative = ['#DEF8E9', '#1E854A'];
const positive = ['#FCEAE9', '#CB3530'];
const colors = { positive, negative };

export default merge(tokens, { colors });
