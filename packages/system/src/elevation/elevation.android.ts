import { getElevation, generator } from '../theme';
import { GeneratorProps } from '../types';

const elevation = (props: GeneratorProps['props']) =>
  generator({
    props,
    prop: ['boxShadow', 'bs', 'elevation'],
    cssProperty: 'elevation',
    getter: getElevation,
  });

export { elevation };
