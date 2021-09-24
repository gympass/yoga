import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider, List } from '../..';

describe('<List />', () => {
  describe('Snapshots', () => {
    describe('Without props', () => {
      it('should match snapshot with a default list', () => {
        const { container } = render(
          <ThemeProvider>
            <List>
              <List.Item>
                <div>List test</div>
              </List.Item>
            </List>
          </ThemeProvider>,
        );

        expect(container).toMatchSnapshot();
      });

      it('should match snapshot with a default list and multiple items', () => {
        const { container } = render(
          <ThemeProvider>
            <List>
              <List.Item>
                <div>List test</div>
              </List.Item>

              <List.Item>
                <div>List test</div>
              </List.Item>
            </List>
          </ThemeProvider>,
        );

        expect(container).toMatchSnapshot();
      });

      it('should match snapshot with a default list, multiple items and no dividers', () => {
        const { container } = render(
          <ThemeProvider>
            <List divided={false}>
              <List.Item>
                <div>List test</div>
              </List.Item>

              <List.Item>
                <div>List test</div>
              </List.Item>
            </List>
          </ThemeProvider>,
        );

        expect(container).toMatchSnapshot();
      });

      it('should match snapshot with a horizontal list', () => {
        const { container } = render(
          <ThemeProvider>
            <List horizontal>
              <List.Item>
                <button type="button">List test</button>
              </List.Item>
            </List>
          </ThemeProvider>,
        );

        expect(container).toMatchSnapshot();
      });

      it('should match snapshot with a horizontal list and multiple items', () => {
        const { container } = render(
          <ThemeProvider>
            <List horizontal>
              <List.Item>
                <div>List test</div>
              </List.Item>

              <List.Item>
                <div>List test</div>
              </List.Item>
            </List>
          </ThemeProvider>,
        );

        expect(container).toMatchSnapshot();
      });

      it('should match snapshot with a horizontal list, multiple items and no dividers', () => {
        const { container } = render(
          <ThemeProvider>
            <List horizontal divided={false}>
              <List.Item>
                <div>List test</div>
              </List.Item>

              <List.Item>
                <div>List test</div>
              </List.Item>
            </List>
          </ThemeProvider>,
        );

        expect(container).toMatchSnapshot();
      });

      it('should match snapshot with a default list and using a link item', () => {
        const { container } = render(
          <ThemeProvider>
            <List>
              <List.LinkItem>
                <div>List test</div>
              </List.LinkItem>
            </List>
          </ThemeProvider>,
        );

        expect(container).toMatchSnapshot();
      });
    });
  });
});
