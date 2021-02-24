import React from 'react';
import styled from 'styled-components';
import { Tag } from '@gympass/yoga';
import { Building } from '@gympass/yoga-icons';

import { DocTitle } from '../components';

const ScrollView = styled.ScrollView`
  margin-bottom: 50px;
  padding: 10px;
  width: 100%;
`;

const TagWrapper = styled.View`
  width: 100%;
  padding: 20px;
  margin-bottom: 10px;
  align-items: center;
  justify-content: space-between;
  height: 250px;
  flex-direction: column;
`;

const TagPage = () => (
  <ScrollView>
    <TagWrapper>
      <DocTitle>Default Tags</DocTitle>
      <Tag>default</Tag>
      <Tag variant="success">success</Tag>
      <Tag variant="informative">informative</Tag>
      <Tag variant="attention">attention</Tag>
    </TagWrapper>

    <TagWrapper>
      <DocTitle>Informative Tags</DocTitle>
      <Tag.Informative>default informative</Tag.Informative>
      <Tag.Informative variant="success">success</Tag.Informative>
      <Tag.Informative variant="attention">attention</Tag.Informative>
    </TagWrapper>

    <TagWrapper>
      <DocTitle>Informative Tags with Icon</DocTitle>
      <Tag.Informative icon={Building}>
        default with custom icon
      </Tag.Informative>
      <Tag.Informative variant="success" icon={Building}>
        success with custom icon
      </Tag.Informative>
      <Tag.Informative variant="attention" icon={Building}>
        attention with custom icon
      </Tag.Informative>
    </TagWrapper>
  </ScrollView>
);

export default TagPage;
