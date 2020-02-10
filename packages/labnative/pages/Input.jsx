import React from 'react';
import { ScrollView } from 'react-native';
import { Input } from '@gympass/yoga';

const InputPage = () => (
  <ScrollView
    keyboardShouldPersistTaps="handled"
    style={{ width: '100%', marginTop: 50, marginBottom: 50 }}
    contentContainerStyle={{
      width: '100%',
      height: 500,
      padding: 10,
      justifyContent: 'space-between',
      alignItems: 'center',
    }}
  >
    <Input label="Default" />
    <Input.Email label="Email" />
    <Input.Number label="Number" />
    <Input.Password label="Password" />
    <Input.Tel label="Telephone" />
  </ScrollView>
);

export default InputPage;
