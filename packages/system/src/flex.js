import { compose, generator } from './theme';

const flexDirection = props =>
  generator({
    props,
    prop: ['flexDirection'],
    cssProperty: 'flexDirection',
  });

const alignItems = props =>
  generator({
    props,
    prop: ['alignItems'],
    cssProperty: 'alignItems',
  });

const alignContent = props =>
  generator({
    props,
    prop: ['alignContent'],
    cssProperty: 'alignContent',
  });

const alignSelf = props =>
  generator({
    props,
    prop: ['alignSelf'],
    cssProperty: 'alignSelf',
  });

const justifyContent = props =>
  generator({
    props,
    prop: ['justifyContent'],
    cssProperty: 'justifyContent',
  });

const justifySelf = props =>
  generator({
    props,
    prop: ['justifySelf'],
    cssProperty: 'justifySelf',
  });

const flex = props =>
  generator({
    props,
    prop: ['flex'],
    cssProperty: 'flex',
  });

const flexBasis = props =>
  generator({
    props,
    prop: ['flexBasis'],
    cssProperty: 'flexBasis',
  });

const flexFlow = props =>
  generator({
    props,
    prop: ['flexFlow'],
    cssProperty: 'flexFlow',
  });

const flexGrow = props =>
  generator({
    props,
    prop: ['flexGrow'],
    cssProperty: 'flexGrow',
  });

const flexShrink = props =>
  generator({
    props,
    prop: ['flexShrink'],
    cssProperty: 'flexShrink',
  });

const flexWrap = props =>
  generator({
    props,
    prop: ['flexWrap'],
    cssProperty: 'flexWrap',
  });

const order = props =>
  generator({
    props,
    prop: ['order'],
    cssProperty: 'order',
    getter: () => ({}),
  });

const flexes = compose(
  flex,
  flexBasis,
  flexFlow,
  flexGrow,
  flexShrink,
  flexWrap,
  flexDirection,
  alignItems,
  alignContent,
  alignSelf,
  justifyContent,
  justifySelf,
  order,
);

export {
  flex,
  flexBasis,
  flexFlow,
  flexGrow,
  flexShrink,
  flexWrap,
  flexDirection,
  alignItems,
  alignContent,
  alignSelf,
  justifyContent,
  justifySelf,
  flexes,
  order,
};
