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
        primaryButton={{
          label: 'Custom Action',
          action: () => {},
        }}
      />
      <Banner
        m="xsmall"
        variant="informative"
        message="Informative banner"
        primaryButton={{
          label: 'Custom Action',
          action: () => {},
        }}
      />
      <Banner
        m="xsmall"
        variant="attention"
        message="Attention banner"
        primaryButton={{
          label: 'Custom Action',
          action: () => {},
        }}
      />
    </BannerWrapper>

    <BannerWrapper>
      <DocTitle>Banner with two action buttons</DocTitle>
      <Banner
        m="xsmall"
        variant="success"
        message="Success Banner"
        primaryButton={{
          label: 'Primary Action',
          action: () => {},
        }}
        secondaryButton={{
          label: 'Secondary Action',
          action: () => {},
        }}
      />
      <Banner
        m="xsmall"
        variant="informative"
        message="Informative banner"
        primaryButton={{
          label: 'Primary Action',
          action: () => {},
        }}
        secondaryButton={{
          label: 'Secondary Action',
          action: () => {},
        }}
      />
      <Banner
        m="xsmall"
        variant="attention"
        message="Attention banner"
        primaryButton={{
          label: 'Primary Action',
          action: () => {},
        }}
        secondaryButton={{
          label: 'Secondary Action',
          action: () => {},
        }}
      />
    </BannerWrapper>
  </ScrollView>
);

export default BannerPage;
