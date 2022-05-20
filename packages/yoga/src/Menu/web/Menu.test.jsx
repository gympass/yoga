import React from 'react';
import { render } from '@testing-library/react';
import {
  FlagArgentina,
  FlagBrazil,
  FlagChile,
  HomeFilled,
  MenuList,
} from '@gympass/yoga-icons';

import { ThemeProvider, Menu, Button } from '../..';

describe('<Menu />', () => {
  it('should match snapshot in default Menu', () => {
    const { container } = render(
      <ThemeProvider>
        <Menu>
          <Menu.Action>
            <Button.Icon icon={MenuList} />
          </Menu.Action>
          <Menu.List>
            <Menu.Item>Item 1</Menu.Item>
            <Menu.Item>Item 2</Menu.Item>
            <Menu.Item>Item 3</Menu.Item>
          </Menu.List>
        </Menu>
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });
  it('should match snapshot Menu.Item with icon', () => {
    const { container } = render(
      <ThemeProvider>
        <Menu>
          <Menu.Action>
            <Button.Icon icon={MenuList} />
          </Menu.Action>
          <Menu.List>
            <Menu.Item icon={FlagBrazil}>Item 1</Menu.Item>
            <Menu.Item icon={FlagArgentina}>Item 2</Menu.Item>
            <Menu.Item icon={FlagChile}>Item 3</Menu.Item>
          </Menu.List>
        </Menu>
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });
  it('should match snapshot Menu.Item with link', () => {
    const { container } = render(
      <ThemeProvider>
        <Menu>
          <Menu.Action>
            <Button.Icon icon={MenuList} />
          </Menu.Action>
          <Menu.List>
            <Menu.Item href="http://www.gympass.com" target="blank">
              Item 1
            </Menu.Item>
            <Menu.Item href="http://www.gympass.com" target="blank">
              Item 2
            </Menu.Item>
            <Menu.Item href="http://www.gympass.com" target="blank">
              Item 3
            </Menu.Item>
          </Menu.List>
        </Menu>
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });
  it('should match snapshot Menu.Item with active', () => {
    const { container } = render(
      <ThemeProvider>
        <Menu>
          <Menu.Action>
            <Button.Icon icon={MenuList} />
          </Menu.Action>
          <Menu.List>
            <Menu.Item active>Item 1</Menu.Item>
            <Menu.Item>Item 2</Menu.Item>
            <Menu.Item>Item 3</Menu.Item>
          </Menu.List>
        </Menu>
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });
  it('should match snapshot Menu.Item with disabled', () => {
    const { container } = render(
      <ThemeProvider>
        <Menu>
          <Menu.Action>
            <Button.Icon icon={MenuList} />
          </Menu.Action>
          <Menu.List>
            <Menu.Item disabled>Item 1</Menu.Item>
            <Menu.Item>Item 2</Menu.Item>
            <Menu.Item>Item 3</Menu.Item>
          </Menu.List>
        </Menu>
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });
  it('should match snapshot Menu.Item with disabled and icon', () => {
    const { container } = render(
      <ThemeProvider>
        <Menu>
          <Menu.Action>
            <Button.Icon icon={MenuList} />
          </Menu.Action>
          <Menu.List>
            <Menu.Item icon={HomeFilled} disabled>
              Item 1
            </Menu.Item>
            <Menu.Item>Item 2</Menu.Item>
            <Menu.Item>Item 3</Menu.Item>
          </Menu.List>
        </Menu>
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });
  it('should match snapshot Menu with a onMouseHover props false', () => {
    const { container } = render(
      <ThemeProvider>
        <Menu onMouseHover={false}>
          <Menu.Action>
            <Button.Icon icon={MenuList} />
          </Menu.Action>
          <Menu.List>
            <Menu.Item icon={HomeFilled} disabled>
              Item 1
            </Menu.Item>
            <Menu.Item>Item 2</Menu.Item>
            <Menu.Item>Item 3</Menu.Item>
          </Menu.List>
        </Menu>
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });
  it('should match snapshot Menu with an align props start', () => {
    const { container } = render(
      <ThemeProvider>
        <Menu>
          <Menu.Action>
            <Button.Icon icon={MenuList} />
          </Menu.Action>
          <Menu.List align="start">
            <Menu.Item icon={HomeFilled} disabled>
              Item 1
            </Menu.Item>
            <Menu.Item>Item 2</Menu.Item>
            <Menu.Item>Item 3</Menu.Item>
          </Menu.List>
        </Menu>
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });
  it('should match snapshot Menu with an align props end', () => {
    const { container } = render(
      <ThemeProvider>
        <Menu>
          <Menu.Action>
            <Button.Icon icon={MenuList} />
          </Menu.Action>
          <Menu.List align="end">
            <Menu.Item icon={HomeFilled} disabled>
              Item 1
            </Menu.Item>
            <Menu.Item>Item 2</Menu.Item>
            <Menu.Item>Item 3</Menu.Item>
          </Menu.List>
        </Menu>
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });
});
