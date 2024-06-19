import { compose, generator } from '../theme';
import { SystemValues } from '../types';

const overflow = (props: SystemValues) =>
  generator({
    props,
    prop: ['overflow', 'of'],
    cssProperty: 'overflow',
  });

const overflowX = (props: SystemValues) =>
  generator({
    props,
    prop: ['overflowX', 'ox'],
    cssProperty: 'overflow-x',
  });

const overflowY = (props: SystemValues) =>
  generator({
    props,
    prop: ['overflowY', 'oy'],
    cssProperty: 'overflow-y',
  });

const overflows = compose(overflow, overflowX, overflowY);

export { overflows, overflow, overflowX, overflowY };
