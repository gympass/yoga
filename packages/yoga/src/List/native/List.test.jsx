import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Text } from 'react-native';
import ThemeProvider from '../../Theme';
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

      it('should match snapshot with a small list', () => {
        const { container } = render(
          <ThemeProvider>
            <List
              data={data}
              renderItem={({ item }) => (
                <List.Item small>
                  <Text>{item.key}</Text>
                </List.Item>
              )}
            />
          </ThemeProvider>,
        );
        expect(container).toMatchSnapshot();
      });

      it('should match snapshot with a list without divisors', () => {
        const { container } = render(
          <ThemeProvider>
            <List
              data={data}
              renderItem={({ item }) => (
                <List.Item divided={false}>
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

      it('should call onPress when touchable item is pressed', () => {
        const a = { key: 'Devin', onPress: jest.fn() };
        const { getByText } = render(
          <ThemeProvider>
            <List
              data={[a]}
              renderItem={({ item }) => (
                <List.TouchableItem onPress={item.onPress}>
                  <Text>{item.key}</Text>
                </List.TouchableItem>
              )}
            />
          </ThemeProvider>,
        );

        const listTouchableItem = getByText(a.key);
        fireEvent.press(listTouchableItem);
        expect(a.onPress).toHaveBeenCalled();
      });
    });
  });
});
