import React from 'react';
import { Alert } from 'react-native';
import { Text, List } from '@gympass/yoga';

const listItemData = [
  { key: 'Devin' },
  { key: 'Dan' },
  { key: 'Dominic' },
  { key: 'Jackson' },
  { key: 'James' },
];

const listTouchableItemData = [
  { key: 'Joel' },
  { key: 'John' },
  { key: 'Jillian' },
  { key: 'Jimmy' },
  { key: 'Julie' },
];

const ListPage = () => {
  return (
    <>
      <Text.SectionTitle>List Item</Text.SectionTitle>
      <List
        data={listItemData}
        renderItem={({ item }) => (
          <List.Item>
            <Text>{item.key}</Text>
          </List.Item>
        )}
      />

      <Text.SectionTitle>List Touchable Item</Text.SectionTitle>
      <List
        scrollEnabled={false}
        data={listTouchableItemData}
        renderItem={({ item }) => (
          <List.TouchableItem
            small
            onPress={() => Alert.alert('You pressed', item.key)}
          >
            <Text>{item.key}</Text>
          </List.TouchableItem>
        )}
      />
    </>
  );
};

export default ListPage;
