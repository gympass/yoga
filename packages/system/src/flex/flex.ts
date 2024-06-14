import { compose, generator, getSpacing } from '../theme';
import { SystemValues } from '../types';
import { toPx } from '../unit';

const flexDirection = (props: SystemValues) =>
  generator({
    props,
    prop: ['flexDirection'],
    cssProperty: 'flexDirection',
  });

const alignItems = (props: SystemValues) =>
  generator({
    props,
    prop: ['alignItems'],
    cssProperty: 'alignItems',
  });

const alignContent = (props: SystemValues) =>
  generator({
    props,
    prop: ['alignContent'],
    cssProperty: 'alignContent',
  });

const alignSelf = (props: SystemValues) =>
  generator({
    props,
    prop: ['alignSelf'],
    cssProperty: 'alignSelf',
  });

const justifyContent = (props: SystemValues) =>
  generator({
    props,
    prop: ['justifyContent'],
    cssProperty: 'justifyContent',
  });

const justifySelf = (props: SystemValues) =>
  generator({
    props,
    prop: ['justifySelf'],
    cssProperty: 'justifySelf',
  });

const flex = (props: SystemValues) =>
  generator({
    props,
    prop: ['flex'],
    cssProperty: 'flex',
  });

const flexBasis = (props: SystemValues) =>
  generator({
    props,
    prop: ['flexBasis'],
    cssProperty: 'flexBasis',
  });

const flexFlow = (props: SystemValues) =>
  generator({
    props,
    prop: ['flexFlow'],
    cssProperty: 'flexFlow',
  });

const flexGrow = (props: SystemValues) =>
  generator({
    props,
    prop: ['flexGrow'],
    cssProperty: 'flexGrow',
  });

const flexShrink = (props: SystemValues) =>
  generator({
    props,
    prop: ['flexShrink'],
    cssProperty: 'flexShrink',
  });

const flexWrap = (props: SystemValues) =>
  generator({
    props,
    prop: ['flexWrap'],
    cssProperty: 'flexWrap',
  });

const order = (props: SystemValues) =>
  generator({
    props,
    prop: ['order'],
    cssProperty: 'order',
  });

const gap = (props: SystemValues) =>
  generator({
    props,
    prop: ['gap'],
    cssProperty: 'gap',
    getter: getSpacing,
    transform: toPx,
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
  gap,
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
  gap,
};
