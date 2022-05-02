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
  flex: 1;
  padding: 20px;
  margin-bottom: 10px;
  align-items: center;
  flex-direction: column;
`;

const BannerPage = () => (
  <ScrollView>
    <BannerWrapper>
      <DocTitle>Banner</DocTitle>
      <Banner
        m="xsmall"
        variant="success"
        message="Success Banner"
        actionLabel="Custom Action"
        onAction={() => {}}
      />
      <Banner
        m="xsmall"
        variant="informative"
        message="Informative banner"
        actionLabel="Custom Action"
        onAction={() => {}}
      />
      <Banner
        m="xsmall"
        variant="attention"
        message="Attention banner"
        actionLabel="Custom Action"
        onAction={() => {}}
      />
    </BannerWrapper>

    <BannerWrapper>
      <DocTitle>Banner without button</DocTitle>
      <Banner m="xsmall" variant="success" message="Success banner" />
      <Banner m="xsmall" variant="informative" message="Informative banner" />
      <Banner m="xsmall" variant="attention" message="Attention banner" />
    </BannerWrapper>
  </ScrollView>
);

export default BannerPage;
