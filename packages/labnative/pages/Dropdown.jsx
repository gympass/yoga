import React from 'react';
import { View } from 'react-native';
import { Dropdown } from '@gympass/yoga';

import { DocTitle } from '../components';

const DropdownPage = () => (
  <>
    <DocTitle>Simple</DocTitle>
    <View style={{ position: 'relative' }}>
      <Dropdown
        label="Select your City"
        options={[
          { label: 'Los Angeles', value: 'los-angeles' },
          { label: 'Santa Monica', value: 'santa-monica' },
          { label: 'San Francisco', value: 'san-francisco' },
        ]}
      />
    </View>
    <DocTitle>Disabled</DocTitle>
    <Dropdown
      disabled
      label="Find an activity to love"
      options={[
        { label: 'Yoga', value: 'yoga' },
        { label: 'Crossfit', value: 'crossfit' },
        { label: 'Tenis', value: 'tenis' },
        { label: 'Soccer', value: 'soccer' },
        { label: 'Pilates', value: 'pilates' },
        { label: 'Run', value: 'running' },
      ]}
    />
    <DocTitle>Selected</DocTitle>
    <Dropdown
      label="Find an activity to love"
      options={[
        { label: 'Yoga', value: 'yoga', selected: true },
        { label: 'Crossfit', value: 'crossfit' },
        { label: 'Tenis', value: 'tenis' },
        { label: 'Soccer', value: 'soccer' },
        { label: 'Pilates', value: 'pilates' },
        { label: 'Run', value: 'running' },
      ]}
    />
    <DocTitle>With error</DocTitle>
    <Dropdown
      label="Find an activity to love"
      error="Please, select one activity"
      options={[
        { label: 'Yoga', value: 'yoga' },
        { label: 'Crossfit', value: 'crossfit' },
        { label: 'Tenis', value: 'tenis' },
        { label: 'Soccer', value: 'soccer' },
        { label: 'Pilates', value: 'pilates' },
        { label: 'Run', value: 'running' },
      ]}
    />
  </>
);

export default DropdownPage;
