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
    <Tag icon={false}>default without icon</Tag>
    <Tag variant="primary">primary</Tag>
    <Tag variant="secondary">secondary</Tag>

    <Tag.Informative variant="success" icon={Building}>
      default with custom icon
    </Tag.Informative>

    <Tag.Informative variant="success">success</Tag.Informative>
    <Tag.Informative variant="neutral">neutral</Tag.Informative>
    <Tag.Informative variant="attention">attention</Tag.Informative>

    <Tag full variant="relax">
      No spots left
    </Tag>
  </TagWrapper>
);

export default TagPage;
