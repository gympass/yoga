import React from 'react';
import { List } from '@gympass/design-system';
import { Text } from 'react-native';

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

const ListPage = () => {
  return (
    <List
      horizontal
      data={data}
      renderItem={({ item }) => (
        <List.Item>
          <Text>{item.key}</Text>
        </List.Item>
      )}
    />
  );
};

export default ListPage;
