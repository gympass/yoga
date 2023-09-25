export const NavigationMenuProps = [
  {
    name: 'children',
    description: { text: '' },
    type: { name: 'node' },
    required: true,
  },
];

export const MenuProps = [
  {
    name: 'avatar',
    description: {
      text: 'Element displayed on the left (Avatar, Icon, ...)',
    },
    type: { name: 'node' },
    required: true,
  },
  {
    name: 'subtitle',
    description: { text: 'Text to be displayed as subtitle' },
    type: { name: 'string' },
    required: false,
  },
  {
    name: 'title',
    description: { text: 'Text to be displayed displayed as title' },
    type: { name: 'string' },
    required: true,
  },
  {
    name: 'onClick',
    description: {
      text: 'Event triggered when clicking in the component',
    },
    type: { name: 'func' },
    required: false,
  },
];

export const SwitcherActionProps = [
  {
    name: 'id',
    description: {
      text: 'Action id',
    },
    type: { name: 'string' },
    required: true,
  },
  {
    name: 'label',
    description: {
      text: 'Action label',
    },
    type: { name: 'string' },
    required: true,
  },
  {
    name: 'onClick',
    description: {
      text: 'Event triggered when clicking in the action',
    },
    type: { name: 'func' },
    required: true,
  },
];

export const SwitcherProps = [
  {
    name: 'actions',
    description: {
      text: 'Switcher actions',
    },
    type: { name: 'obj' },
    required: false,
  },
  {
    name: 'avatar',
    description: {
      text: 'Element displayed on the left (Avatar, Icon, ...)',
    },
    type: { name: 'node' },
    required: true,
  },
  {
    name: 'fill',
    description: { text: 'Color used as background' },
    type: { name: 'string' },
    required: false,
    defaultValue: { value: 'transparent' },
  },
  {
    name: 'sideOffset',
    description: {
      text: 'Horizontal space between the action icon and the list',
    },
    type: { name: 'string' },
    required: false,
    defaultValue: { value: '4' },
  },
  {
    name: 'subtitle',
    description: { text: 'Text to be displayed as subtitle' },
    type: { name: 'string' },
    required: false,
  },
  {
    name: 'title',
    description: { text: 'Text to be displayed as title' },
    type: { name: 'string' },
    required: true,
  },
];

export const ItemProps = [
  {
    name: 'children',
    description: { text: 'Subitems to be displayed under the item' },
    type: { name: 'node' },
    required: false,
  },
  {
    name: 'expanded',
    description: { text: 'Controls when hide/show the subitems' },
    type: { name: 'bool' },
    required: false,
    defaultValue: { value: 'false' },
  },
  {
    name: 'icon',
    description: { text: `Item's icon` },
    type: { name: 'node' },
    required: false,
  },
  {
    name: 'label',
    description: { text: `Item's name` },
    type: { name: 'string' },
    required: true,
  },
  {
    name: 'tag',
    description: { text: 'Tag text' },
    type: { name: 'string' },
    required: false,
  },
  {
    name: 'wrapper',
    description: { text: 'Link that wraps the item' },
    type: { name: 'node' },
    required: true,
  },
];

export const SubitemProps = [
  {
    name: 'label',
    description: { text: `Item's name` },
    type: { name: 'string' },
    required: true,
  },
  {
    name: 'wrapper',
    description: { text: 'Link that wraps the subitem' },
    type: { name: 'node' },
    required: true,
  },
];
