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
    <Tag icon={Building}>default with custom icon</Tag>
    <Tag icon={false}>default without icon</Tag>
    <Tag variant="primary">primary</Tag>
    <Tag variant="secondary">secondary</Tag>

    <Tag variant="vibin">vibin</Tag>
    <Tag variant="hope">hope</Tag>
    <Tag variant="energy">energy</Tag>
    <Tag variant="relax">relax</Tag>
    <Tag variant="peace">peace</Tag>
    <Tag variant="verve">verve</Tag>
    <Tag variant="uplift">uplift</Tag>
    <Tag variant="deepPurple">deepPurple</Tag>
    <Tag variant="stamina">stamina</Tag>
    <Tag variant="dark">dark</Tag>
    <Tag variant="medium">medium</Tag>
    <Tag variant="deep">deep</Tag>
    <Tag variant="light">light</Tag>
    <Tag variant="clear">clear</Tag>
    <Tag variant="white">white</Tag>

    <Tag full variant="relax">
      No spots left
    </Tag>
  </TagWrapper>
);

export default TagPage;
