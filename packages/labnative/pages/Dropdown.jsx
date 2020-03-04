import React from 'react';
import { Dropdown } from '@gympass/yoga';

import { DocTitle } from '../components';

const DropdownPage = () => (
  <>
    <DocTitle>Simple</DocTitle>
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
    />
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
  </>
);

export default DropdownPage;
