import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import { Dropdown } from '@gympass/yoga';

const DropdownPage = () => (
  <Dropdown
    label="Find an activity to love"
    options={[
      { label: 'Yoga', value: 'yoga' },
      { label: 'Crossfit', value: 'crossfit' },
      { label: 'Tenis', value: 'tenis' },
      { label: 'Soccer', value: 'soccer' },
      { label: 'Pilates', value: 'pilates' },
      { label: 'Run', value: 'running' },
    ]}
    style={{ marginLeft: 20, width: 220 }}
  />
);

export default DropdownPage;
