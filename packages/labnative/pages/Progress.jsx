import React from 'react';
import { ScrollView } from 'react-native';
import { Progress } from '@gympass/yoga';

const ProgressPage = () => (
  <ScrollView
    style={{
      width: '100%',
      height: '100%',
      padding: 80,
    }}
  >
    <Progress max={100} value={20} label={{ value: 20, placement: 'left' }} />
    <Progress max={100} value={40} label={{ value: 40, placement: 'left' }} />
    <Progress
      max={100}
      value={67}
      label={{ value: 67, placement: 'left' }}
      style={{ marginBottom: 10 }}
    />

    <Progress
      max={100}
      value={70}
      label={{ value: 'Some description', placement: 'left' }}
    />
  </ScrollView>
);

export default ProgressPage;
