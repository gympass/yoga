import React from 'react';
import { ScrollView } from 'react-native';
import { TextArea } from '@gympass/yoga';

const TextAreaPage = () => (
  <ScrollView
    contentContainerStyle={{
      height: '100%',
      justifyContent: 'space-evenly',
      marginTop: 50,
    }}
  >
    <TextArea label="Label" />
    <TextArea label="Label" helper="Helper text" maxLength={20} />
    <TextArea label="Label" error="Error text" maxLength={20} />
    <TextArea disabled label="Label" helper="Helper text" maxLength={20} />
  </ScrollView>
);

export default TextAreaPage;
