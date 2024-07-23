import { compose, generator, getSpacing } from '../theme';
import { GeneratorProps } from '../types';
import { toPx } from '../unit';

const flexDirection = (props: GeneratorProps['props']) =>
  generator({
    props,
    prop: ['flexDirection'],
    cssProperty: 'flexDirection',
  });

const alignItems = (props: GeneratorProps['props']) =>
  generator({
    props,
    prop: ['alignItems'],
    cssProperty: 'alignItems',
  });

const alignContent = (props: GeneratorProps['props']) =>
  generator({
    props,
    prop: ['alignContent'],
    cssProperty: 'alignContent',
  });

const alignSelf = (props: GeneratorProps['props']) =>
  generator({
    props,
    prop: ['alignSelf'],
    cssProperty: 'alignSelf',
  });

const justifyContent = (props: GeneratorProps['props']) =>
  generator({
    props,
    prop: ['justifyContent'],
    cssProperty: 'justifyContent',
  });

const justifySelf = (props: GeneratorProps['props']) =>
  generator({
    props,
    prop: ['justifySelf'],
    cssProperty: 'justifySelf',
  });

const flex = (props: GeneratorProps['props']) =>
  generator({
    props,
    prop: ['flex'],
    cssProperty: 'flex',
  });

const flexBasis = (props: GeneratorProps['props']) =>
  generator({
    props,
    prop: ['flexBasis'],
    cssProperty: 'flexBasis',
  });

const flexFlow = (props: GeneratorProps['props']) =>
  generator({
    props,
    prop: ['flexFlow'],
    cssProperty: 'flexFlow',
  });

const flexGrow = (props: GeneratorProps['props']) =>
  generator({
    props,
    prop: ['flexGrow'],
    cssProperty: 'flexGrow',
  });

const flexShrink = (props: GeneratorProps['props']) =>
  generator({
    props,
    prop: ['flexShrink'],
    cssProperty: 'flexShrink',
  });

const flexWrap = (props: GeneratorProps['props']) =>
  generator({
    props,
    prop: ['flexWrap'],
    cssProperty: 'flexWrap',
  });

const order = (props: GeneratorProps['props']) =>
  generator({
    props,
    prop: ['order'],
    cssProperty: 'order',
  });

const gap = (props: GeneratorProps['props']) =>
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
