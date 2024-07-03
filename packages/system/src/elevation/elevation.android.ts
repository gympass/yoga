import { getElevation, generator } from '../theme';
import { SystemValues } from '../types';

const elevation = (props: SystemValues) =>
  generator({
    props,
    prop: ['boxShadow', 'bs', 'elevation'],
    cssProperty: 'elevation',
    getter: getElevation,
  });

export { elevation };
