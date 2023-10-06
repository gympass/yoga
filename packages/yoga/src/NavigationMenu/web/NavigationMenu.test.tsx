import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider, Avatar, Icon } from '@gympass/yoga';
import { Help, Doc, MenuMore } from '@gympass/yoga-icons';

import NavigationMenu from './NavigationMenu';

type IconProps = {
  icon: React.ReactElement<typeof Icon>;
};

describe('<NavigationMenu />', () => {
  describe('Snapshots', () => {
    it('should match NavigationMenu', () => {
      const renderWrapper = ({ children }) => {
        return <a href="https://www.gympass.com">{children}</a>;
      };

      const IconComponent = ({ icon }: IconProps) => {
        return <Icon as={icon} />;
      };

      const itemMainGroup = [
        {
          expanded: true,
          icon: Doc,
          label: 'Subscription',
          tag: 'new',
          subitems: [{ label: 'Details' }],
        },
        {
          active: true,
          icon: Doc,
          label: 'Billing',
        },
      ];

      const itemGroups = [
        [...itemMainGroup],
        [
          {
            icon: Help,
            label: 'Help',
          },
        ],
      ];

      const bottomItems = [
        ...itemMainGroup.slice(0, 2).map(({ active, icon, label }) => ({
          active,
          icon,
          label,
          wrapper: renderWrapper,
        })),
        {
          active: false,
          icon: MenuMore,
          label: 'More',
          wrapper: ({ children }) => <div>{children}</div>,
        },
      ];

      const { container } = render(
        <ThemeProvider>
          <NavigationMenu
          >
            <NavigationMenu.Header>
              <NavigationMenu.Menu
                avatar={<Avatar.Circle />}
                title="Company"
                subtitle="Reseller"
              />
            </NavigationMenu.Header>

            <NavigationMenu.Items>
              {itemGroups.map((group, index) => (
                <NavigationMenu.ItemsGroup key={index}>
                  {group.map(item => (
                    <NavigationMenu.Item
                      key={item.label}
                      active={item.active}
                      expanded={item.expanded}
                      icon={<IconComponent icon={item.icon} />}
                      label={item.label}
                      wrapper={renderWrapper}
                      tag={item.tag}
                    >
                      {item.subitems &&
                        item.subitems.map(({ label }) => (
                          <NavigationMenu.Subitem
                            key={label}
                            label={label}
                            wrapper={renderWrapper}
                          />
                        ))}
                    </NavigationMenu.Item>
                  ))}
                </NavigationMenu.ItemsGroup>
              ))}
            </NavigationMenu.Items>

            <NavigationMenu.Footer>
              <NavigationMenu.Switcher
                avatar={<Avatar.Circle />}
                title="User"
                subtitle="Admin, Supervisor"
              />
            </NavigationMenu.Footer>
          </NavigationMenu>

          <NavigationMenu.BottomItems>
            {bottomItems.map(({ active, icon, label, wrapper }) => (
              <NavigationMenu.BottomItem
                key={label}
                active={active}
                icon={icon}
                label={label}
                wrapper={wrapper}
              />
            ))}
          </NavigationMenu.BottomItems>
        </ThemeProvider>,
      );

      expect(container).toMatchSnapshot();
    });

    it('should match NavigationMenu.Menu with an action', () => {
      const { container } = render(
        <ThemeProvider>
          <NavigationMenu responsive={false}>
            <NavigationMenu.Header>
              <NavigationMenu.Menu
                avatar={<Avatar.Circle />}
                title="Company"
                subtitle="Reseller"
                onClick={() => null}
              />
            </NavigationMenu.Header>
          </NavigationMenu>
        </ThemeProvider>,
      );

      expect(container).toMatchSnapshot();
    });

    it('should match NavigationMenu.Switcher with actions', () => {
      const actions = [
        {
          id: 'Action 1',
          label: 'Action 1',
          onClick: () => null,
        },
        {
          id: 'Action 2',
          label: 'Action 2',
          onClick: () => null,
        },
      ];

      const { container } = render(
        <ThemeProvider>
          <NavigationMenu responsive={false}>
            <NavigationMenu.Footer>
              <NavigationMenu.Switcher
                actions={actions}
                avatar={<Avatar.Circle />}
                sideOffset={36}
                subtitle="Admin, Supervisor"
                title="User"
              />
            </NavigationMenu.Footer>
          </NavigationMenu>
        </ThemeProvider>,
      );

      expect(container).toMatchSnapshot();
    });
  });
});
