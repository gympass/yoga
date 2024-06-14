import { getElevation, generator } from '../theme';
import { SystemValues } from '../types';

const elevation = (props: SystemValues) =>
  generator({
    props,
    prop: ['boxShadow', 'bs', 'elevation'],
    cssProperty: 'boxShadow',
    getter: getElevation,
  });

export { elevation };
