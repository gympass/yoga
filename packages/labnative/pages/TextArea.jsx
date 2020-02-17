import React from 'react';
import { ScrollView } from 'react-native';
import { TextArea } from '@gympass/yoga';

const TextAreaPage = () => (
  <ScrollView
    style={{ width: '100%', marginTop: 20, marginBottom: 50 }}
    contentContainerStyle={{
      height: 600,
      width: '100%',
      padding: 10,
      alignItems: 'center',
    }}
  >
    <TextArea style={{ marginBottom: 20 }} />
    <TextArea
      style={{ marginBottom: 20 }}
      helper="Helper text"
      maxLength={20}
      label="Label"
    />
    <TextArea
      style={{ marginBottom: 20 }}
      label="Label"
      error="Error text"
      maxLength={20}
    />
    <TextArea
      style={{ marginBottom: 20 }}
      disabled
      label="Label"
      helper="Helper text"
      maxLength={20}
    />
  </ScrollView>
);

export default TextAreaPage;
