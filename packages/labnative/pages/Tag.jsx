import React from 'react';
import styled from 'styled-components';
import { Tag } from '@gympass/yoga';
import { Building } from '@gympass/yoga-icons';

const TagWrapper = styled.View`
  width: 100%;
  margin-bottom: 10px;
  align-items: center;
  justify-content: space-between;
  height: 250px;
`;

const TagPage = () => (
  <TagWrapper>
    <Tag>default</Tag>
    <Tag icon={Building}>default with custom icon</Tag>
    <Tag icon={false}>default without icon</Tag>
    <Tag variant="informative">informative</Tag>
    <Tag variant="positive">positive</Tag>
    <Tag variant="negative">negative</Tag>
    <Tag full variant="warning">
      No spots left
    </Tag>
  </TagWrapper>
);

export default TagPage;
