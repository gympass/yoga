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
                subTitle="Reseller"
              />
            </NavigationMenu.Header>

            <NavigationMenu.Items>
              <NavigationMenu.ItemsGroup>
                <NavigationMenu.Item
                  expanded={true}
                  icon={<IconComponent />}
                  label="Subscription"
                  wrapper={renderWrapper}
                  tag="new"
                >
                  <NavigationMenu.SubItem
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
                subTitle="Admin, Supervisor"
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
                subTitle="Reseller"
                onClick={() => alert('You clicked in the Menu component')}
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
          onClick: () => alert('You selected Action 1'),
        },
        {
          id: 'Action 2',
          label: 'Action 2',
          onClick: () => alert('You selected Action 2'),
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
                subTitle="Admin, Supervisor"
              />
            </NavigationMenu.Footer>
          </NavigationMenu>
        </ThemeProvider>,
      );

      expect(container).toMatchSnapshot();
    });
  });
});
