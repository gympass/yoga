import React from 'react';
import styled from 'styled-components';
import * as YogaIcons from '@gympass/yoga-icons';
import { Text } from '@gympass/yoga';

import { DocTitle } from '../components';

const ScrollView = styled.ScrollView`
  margin-bottom: 50px;
  padding: 10px;
  width: 100%;
`;

const Wrapper = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const IconWrapper = styled.View`
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 80px;
  height: 80px;
`;

const IconPage = () => (
  <ScrollView>
    <DocTitle>Icons</DocTitle>
    <Wrapper>
      {Object.entries(YogaIcons).map(([name, Component]) => (
        <React.Fragment key={name}>
          <IconWrapper>
            <Component width={16} height={16} />
            <Text style={{ fontSize: 12 }} numberOfLines={1}>
              {name}
            </Text>
          </IconWrapper>
        </React.Fragment>
      ))}
    </Wrapper>
  </ScrollView>
);

export default IconPage;
