import { getElevation, generator } from './theme';

const elevation = props =>
  generator({
    props,
    prop: ['boxShadow', 'bs', 'elevation'],
    cssProperty: 'boxShadow',
    getter: getElevation,
  });

export { elevation };
