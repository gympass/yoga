import React from 'react';

import styled from 'styled-components';

import { Banner } from '@gympass/yoga';

import { DocTitle } from '../components';

const ScrollView = styled.ScrollView`
  margin-bottom: 50px;
  padding: 10px;
  width: 100%;
`;

const BannerWrapper = styled.View`
  width: 100%;
  padding: 20px;
  margin-bottom: 10px;
  align-items: center;
  justify-content: space-between;
  height: 300px;
  flex-direction: column;
`;

const BannerPage = () => (
  <ScrollView>
    <BannerWrapper>
      <DocTitle>Banner</DocTitle>
      <Banner
        variant="success"
        message="Success Banner"
        button={{ label: 'action', action: () => {} }}
      />
      <Banner
        variant="informative"
        message="Informative banner"
        button={{ label: 'action', action: () => {} }}
      />
      <Banner
        variant="attention"
        message="Attention banner"
        button={{ label: 'action', action: () => {} }}
      />
    </BannerWrapper>

    <BannerWrapper>
      <DocTitle>Banner without button</DocTitle>
      <Banner variant="success" message="Success banner" />
      <Banner variant="informative" message="Informative banner" />
      <Banner variant="attention" message="Attention banner" />
    </BannerWrapper>
  </ScrollView>
);

export default BannerPage;
