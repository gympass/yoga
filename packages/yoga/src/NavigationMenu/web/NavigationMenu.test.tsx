import React from 'react';
import { render } from '@testing-library/react';
import { Home } from '@gympass/yoga-icons';
import { ThemeProvider, Avatar, Icon } from '@gympass/yoga';

import NavigationMenu from './NavigationMenu';

describe('<NavigationMenu />', () => {
  describe('Snapshots', () => {
    it('should match NavigationMenu', () => {
      const renderWrapper = ({ children }) => <a href="#">{children}</a>;
      const IconComponent = () => <Icon as={Home} />;

      const { container } = render(
        <ThemeProvider>
          <NavigationMenu>
            <NavigationMenu.Header>
              <NavigationMenu.Menu
                avatar={<Avatar.Circle />}
                title="Company"
                subtitle="Reseller"
              />
            </NavigationMenu.Header>

            <NavigationMenu.Items>
              <NavigationMenu.ItemsGroup>
                <NavigationMenu.Item
                  expanded
                  icon={<IconComponent />}
                  label="Subscription"
                  wrapper={renderWrapper}
                  tag="new"
                >
                  <NavigationMenu.Subitem
                    label="Details"
                    wrapper={renderWrapper}
                  />
                </NavigationMenu.Item>
                <NavigationMenu.Item
                  icon={<IconComponent />}
                  label="Billing"
                  wrapper={renderWrapper}
                />
              </NavigationMenu.ItemsGroup>
              <NavigationMenu.ItemsGroup>
                <NavigationMenu.Item
                  icon={<IconComponent />}
                  label="Help"
                  wrapper={renderWrapper}
                />
              </NavigationMenu.ItemsGroup>
            </NavigationMenu.Items>

            <NavigationMenu.Footer>
              <NavigationMenu.Switcher
                avatar={<Avatar.Circle />}
                title="User"
                subtitle="Admin, Supervisor"
              />
            </NavigationMenu.Footer>
          </NavigationMenu>
          );
        </ThemeProvider>,
      );

      expect(container).toMatchSnapshot();
    });

    it('should match NavigationMenu.Menu with an action', () => {
      const { container } = render(
        <ThemeProvider>
          <NavigationMenu>
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
          <NavigationMenu>
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
