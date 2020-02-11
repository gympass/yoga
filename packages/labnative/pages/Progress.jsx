import React from 'react';
import { ScrollView } from 'react-native';
import { Progress } from '@gympass/yoga';

import { DocTitle } from '../components';

const ProgressPage = () => (
  <ScrollView
    style={{
      width: '100%',
      height: '100%',
      padding: 80,
    }}
  >
    <DocTitle>Default</DocTitle>
    <Progress max={100} value={35} />

    <DocTitle>Numeric value on the left (default)</DocTitle>
    <Progress max={100} value={20} label={{ value: 20 }} />
    <Progress max={100} value={40} label={{ value: 40 }} />
    <Progress max={100} value={67} label={{ value: 67 }} />

    <DocTitle>Numeric value on the right</DocTitle>
    <Progress
      max={100}
      value={100}
      label={{ value: 100, placement: 'right' }}
    />
    <Progress max={100} value={65} label={{ value: 65, placement: 'right' }} />
    <Progress max={100} value={12} label={{ value: 12, placement: 'right' }} />

    <DocTitle>Alphabetic value on the left (default)</DocTitle>
    <Progress max={100} value={30} label={{ value: 'Some description' }} />

    <DocTitle>Alphabetic value on the right (default)</DocTitle>
    <Progress
      max={100}
      value={70}
      label={{ value: 'Some description', placement: 'right' }}
    />
  </ScrollView>
);

export default ProgressPage;
