import { compose, generator } from './theme';

const flexDirection = props =>
  generator({
    props,
    prop: ['flexDirection'],
    cssProperty: 'flexDirection',
    getter: () => ({}),
  });

const alignItems = props =>
  generator({
    props,
    prop: ['alignItems'],
    cssProperty: 'alignItems',
    getter: () => ({}),
  });

const alignContent = props =>
  generator({
    props,
    prop: ['alignContent'],
    cssProperty: 'alignContent',
    getter: () => ({}),
  });

const alignSelf = props =>
  generator({
    props,
    prop: ['alignSelf'],
    cssProperty: 'alignSelf',
    getter: () => ({}),
  });

const justifyContent = props =>
  generator({
    props,
    prop: ['justifyContent'],
    cssProperty: 'justifyContent',
    getter: () => ({}),
  });

const justifySelf = props =>
  generator({
    props,
    prop: ['justifySelf'],
    cssProperty: 'justifySelf',
    getter: () => ({}),
  });

const flex = props =>
  generator({
    props,
    prop: ['flex'],
    cssProperty: 'flex',
    getter: () => ({}),
  });

const flexBasis = props =>
  generator({
    props,
    prop: ['flexBasis'],
    cssProperty: 'flexBasis',
    getter: () => ({}),
  });

const flexFlow = props =>
  generator({
    props,
    prop: ['flexFlow'],
    cssProperty: 'flexFlow',
    getter: () => ({}),
  });

const flexGrow = props =>
  generator({
    props,
    prop: ['flexGrow'],
    cssProperty: 'flexGrow',
    getter: () => ({}),
  });

const flexShrink = props =>
  generator({
    props,
    prop: ['flexShrink'],
    cssProperty: 'flexShrink',
    getter: () => ({}),
  });

const flexWrap = props =>
  generator({
    props,
    prop: ['flexWrap'],
    cssProperty: 'flexWrap',
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
};
