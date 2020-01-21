import React from 'react';
import styled from 'styled-components';
import { Tag } from '@gympass/yoga';
import { Building } from '@gympass/yoga-icons';
import { ScrollView, View } from 'react-native';

const TagWrapper = styled.View`
  width: 100%;
  margin-bottom: 10px;
  align-items: center;
  justify-content: space-between;
  height: 180px;
`;

const TagPage = () => (
  <TagWrapper>
    <Tag>default</Tag>
    <Tag icon={Building}>default with custom icon</Tag>
    <Tag icon={false}>default without icon</Tag>
    <View
      style={{
        height: 30,
      }}
    >
      <ScrollView horizontal>
        <Tag
          style={{
            marginRight: 16,
          }}
          variant="informative"
        >
          informative
        </Tag>
        <Tag
          style={{
            marginRight: 16,
          }}
          variant="positive"
        >
          positive
        </Tag>
        <Tag
          style={{
            marginRight: 16,
          }}
          variant="negative"
        >
          negative
        </Tag>
      </ScrollView>
    </View>
    <Tag full variant="warning">
      No spots left
    </Tag>
  </TagWrapper>
);

export default TagPage;
