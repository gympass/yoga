export const NavigationMenuProps = [
  {
    name: 'children',
    description: { text: 'Menu sub components' },
    type: { name: 'node' },
    required: true,
  },
  {
    name: 'openOnMobile',
    description: { text: 'Indicates whether the menu is open/close in mobile' },
    type: { name: 'bool' },
    required: false,
    defaultValue: { value: 'false' },
  },
  {
    name: 'responsive',
    description: { text: `Indicates whether the menu should be responsive` },
    type: { name: 'bool' },
    required: false,
    defaultValue: { value: 'true' },
  },
  {
    name: '$zIndex',
    description: { text: `Value of z-index of the menu` },
    type: { name: 'number' },
    required: false,
    defaultValue: { value: "2" },
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
    description: { text: 'Text to be displayed as title' },
    type: { name: 'string' },
    required: false,
  },
  {
    name: 'onClick',
    description: {
      text: 'Event triggered when clicking on the component',
    },
    type: { name: 'func' },
    required: false,
  },
  {
    name: 'icon',
    description: {
      text: 'Custom action icon',
    },
    type: { name: 'node' },
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
      text: 'Event triggered when clicking on the action',
    },
    type: { name: 'func' },
    required: true,
  },
  {
    name: '$zIndex',
    description: { text: `Value of z-index of the switcher actions menu` },
    type: { name: 'number' },
    required: false,
    defaultValue: { value: "1" },
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
    name: 'isLoading',
    description: {
      text: 'Indicates whether the title and the subtitle are loading',
    },
    type: { name: 'bool' },
    required: false,
    defaultValue: { value: 'false' },
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
    required: false,
  },
];

export const ItemProps = [
  {
    name: 'active',
    description: {
      text:
        'Indicates whether the item is active/inactive. This prop is not necessary when the wrapper already handles this.',
    },
    type: { name: 'bool' },
    required: false,
    defaultValue: { value: 'false' },
  },
  {
    name: 'children',
    description: { text: 'Subitems to be displayed under the item' },
    type: { name: 'node' },
    required: false,
  },
  {
    name: 'expanded',
    description: { text: 'Controls when to hide/show subitems' },
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
    name: 'responsive',
    description: { text: `Indicates whether the item should be responsive` },
    type: { name: 'bool' },
    required: false,
    defaultValue: { value: 'true' },
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
    name: 'active',
    description: {
      text:
        'Indicates whether the item is active/inactive. This prop is not necessary when the wrapper already handles this.',
    },
    type: { name: 'bool' },
    required: false,
    defaultValue: { value: 'false' },
  },
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

export const BottomItemsProps = [
  {
    name: 'children',
    description: { text: 'Items to be displayed in the mobile bottom bar' },
    type: { name: 'node' },
    required: true,
  },
  {
    name: '$zIndex',
    description: { text: `Value of z-index of the bottom items menu` },
    type: { name: 'number' },
    required: false,
    defaultValue: { value: "2" },
  },
];

export const BottomItemProps = [
  {
    name: 'active',
    description: {
      text:
        'Indicates whether the item is active/inactive. This prop is not necessary when the wrapper already handles this.',
    },
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
    name: 'wrapper',
    description: { text: 'Link that wraps the item' },
    type: { name: 'node' },
    required: true,
  },
];
