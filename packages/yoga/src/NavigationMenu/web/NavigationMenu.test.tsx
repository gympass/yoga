import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider, Avatar, Icon } from '@gympass/yoga';
import { Help, Doc } from '@gympass/yoga-icons';

import NavigationMenu from './NavigationMenu';

describe('<NavigationMenu />', () => {
  describe('Snapshots', () => {
    it('should match  NavigationMenu', () => {
      const renderWrapper = ({ children }) => <a href="#">{children}</a>;
      const IconComponent = ({ icon }) => <Icon as={icon} />;

      const itemGroups = [
        [
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
        ],
        [
          {
            icon: Help,
            label: 'Help',
          },
        ],
      ];

      const { container } = render(
        <ThemeProvider>
          <NavigationMenu responsive={false}>
            <NavigationMenu.Header>
              <NavigationMenu.Menu
                avatar={<Avatar.Circle />}
                title="Company"
                subtitle="Reseller"
              />
            </NavigationMenu.Header>

            <NavigationMenu.Items>
              {itemGroups.map(group => (
                <NavigationMenu.ItemsGroup>
                  {group.map(item => (
                    <NavigationMenu.Item
                      active={item.active}
                      expanded={item.expanded}
                      icon={<IconComponent icon={item.icon} />}
                      label={item.label}
                      responsive={false}
                      wrapper={renderWrapper}
                      tag={item.tag}
                    >
                      {item.subitems &&
                        item.subitems.map(({ label }) => (
                          <NavigationMenu.Subitem
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
                onClick={() => alert('Menu was clicked')}
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
          onClick: () => alert('Action 1 was selected'),
        },
        {
          id: 'Action 2',
          label: 'Action 2',
          onClick: () => alert('Action 2 was selected'),
        },
      ];

      const { container } = render(
        <ThemeProvider>
          <NavigationMenu responsive={false}>
            <NavigationMenu.Footer>
              <NavigationMenu.Switcher
                actions={actions}
                avatar={<Avatar.Circle />}
                title="User"
                subtitle="Admin, Supervisor"
              />
            </NavigationMenu.Footer>
          </NavigationMenu>
        </ThemeProvider>,
      );

      expect(container).toMatchSnapshot();
    });
  });
});
