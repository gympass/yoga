import React from 'react';

import styled from 'styled-components';

import { Banner } from '@gympass/yoga';

import { AlertCircle, AlertTriangle, CheckedFull } from '@gympass/yoga-icons';
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
      <DocTitle>Banner default</DocTitle>

      <Banner m="xsmall" variant="success" message="Success banner" />
      <Banner m="xsmall" variant="informative" message="Informative banner" />
      <Banner m="xsmall" variant="attention" message="Attention banner" />
    </BannerWrapper>

    <BannerWrapper>
      <DocTitle>Banner with icon</DocTitle>

      <Banner
        m="xsmall"
        icon={CheckedFull}
        variant="success"
        message="Success banner"
      />
      <Banner
        m="xsmall"
        icon={AlertCircle}
        variant="informative"
        message="Informative banner"
      />
      <Banner
        m="xsmall"
        icon={AlertTriangle}
        variant="attention"
        message="Attention banner"
      />
    </BannerWrapper>

    <BannerWrapper>
      <DocTitle>Banner with action button</DocTitle>
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
  </ScrollView>
);

export default BannerPage;
