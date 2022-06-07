import { compose, generator } from './theme';

const overflow = props =>
  generator({
    props,
    prop: ['overflow', 'of'],
    cssProperty: 'overflow',
  });

const overflowX = props =>
  generator({
    props,
    prop: ['overflowX', 'ox'],
    cssProperty: 'overflow-x',
  });

const overflowY = props =>
  generator({
    props,
    prop: ['overflowY', 'oy'],
    cssProperty: 'overflow-y',
  });

const overflows = compose(overflow, overflowX, overflowY);

export { overflows, overflow, overflowX, overflowY };
