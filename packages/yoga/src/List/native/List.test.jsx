import React from 'react';
import { render } from '@testing-library/react-native';
import { Text } from 'react-native';
import ThemeProvider from '../../ThemeProvider';
import List from '..';

const data = [
  { key: 'Devin' },
  { key: 'Dan' },
  { key: 'Dominic' },
  { key: 'Jackson' },
  { key: 'James' },
  { key: 'Joel' },
  { key: 'John' },
  { key: 'Jillian' },
  { key: 'Jimmy' },
  { key: 'Julie' },
];

describe('<List />', () => {
  describe('Snapshots', () => {
    describe('Without props', () => {
      it('should match snapshot with a default list', () => {
        const { container } = render(
          <ThemeProvider>
            <List
              data={data}
              renderItem={({ item }) => (
                <List.Item>
                  <Text>{item.key}</Text>
                </List.Item>
              )}
            />
          </ThemeProvider>,
        );
        expect(container).toMatchSnapshot();
      });

      it('should match snapshot with a horizontal list', () => {
        const { container } = render(
          <ThemeProvider>
            <List
              horizontal
              data={data}
              renderItem={({ item }) => (
                <List.Item>
                  <Text>{item.key}</Text>
                </List.Item>
              )}
            />
          </ThemeProvider>,
        );
        expect(container).toMatchSnapshot();
      });
    });
  });
});
