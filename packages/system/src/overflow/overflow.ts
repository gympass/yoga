import { compose, generator } from '../theme';
import { GeneratorProps } from '../types';

const overflow = (props: GeneratorProps['props']) =>
  generator({
    props,
    prop: ['overflow', 'of'],
    cssProperty: 'overflow',
  });

const overflowX = (props: GeneratorProps['props']) =>
  generator({
    props,
    prop: ['overflowX', 'ox'],
    cssProperty: 'overflow-x',
  });

const overflowY = (props: GeneratorProps['props']) =>
  generator({
    props,
    prop: ['overflowY', 'oy'],
    cssProperty: 'overflow-y',
  });

const overflows = compose(overflow, overflowX, overflowY);

export { overflows, overflow, overflowX, overflowY };
