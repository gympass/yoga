import React from 'react';
import styled from 'styled-components';
import { Tag } from '@gympass/yoga';
import { Building } from '@gympass/yoga-icons';

const TagWrapper = styled.View`
  width: 100%;
  padding: 20px;
  margin-bottom: 10px;
  align-items: center;
  justify-content: space-evenly;
  height: 250px;
  flex-direction: row;
  flex-wrap: wrap;
`;

const TagPage = () => (
  <TagWrapper>
    <Tag>default</Tag>

    <Tag variant="success">success</Tag>
    <Tag variant="informative">informative</Tag>
    <Tag variant="attention">attention</Tag>

    <Tag.Informative>default informative</Tag.Informative>
    <Tag.Informative icon={Building}>default with custom icon</Tag.Informative>

    <Tag.Informative variant="success">success</Tag.Informative>
    <Tag.Informative variant="success" icon={Building}>
      success with custom icon
    </Tag.Informative>

    <Tag.Informative variant="attention">attention</Tag.Informative>
    <Tag.Informative variant="attention" icon={Building}>
      attention with custom icon
    </Tag.Informative>
  </TagWrapper>
);

export default TagPage;
