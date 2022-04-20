import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { Input } from '@gympass/yoga';

const InputPage = () => {
  const [defaultValue, setDefaultValue] = useState('');
  const [withErrorValue, setWithErrorValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [numberValue, setNumberValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [telValue, setTelValue] = useState('');

  return (
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
      <Input
        label="Default"
        helper="Helper Text"
        maxLength={20}
        value={defaultValue}
        onChangeText={(text) => setDefaultValue(text)}
        onClean={(cleaned) => setDefaultValue(cleaned)}
      />
      <Input
        label="With error"
        error="Please, don't let this field empy"
        value={withErrorValue}
        onChangeText={(text) => setWithErrorValue(text)}
        onClean={(cleaned) => setWithErrorValue(cleaned)}
      />
      <Input.Email
        label="Email"
        value={emailValue}
        onChangeText={(text) => setEmailValue(text)}
        onClean={(cleaned) => setEmailValue(cleaned)}
      />
      <Input.Number
        label="Number"
        value={numberValue}
        onChangeText={(text) => setNumberValue(text)}
        onClean={(cleaned) => setNumberValue(cleaned)}
      />
      <Input.Password
        label="Password"
        value={passwordValue}
        onChangeText={(text) => setPasswordValue(text)}
      />
      <Input.Tel
        label="Telephone"
        value={telValue}
        onChangeText={(text) => setTelValue(text)}
        onClean={(cleaned) => setTelValue(cleaned)}
      />
      <Input disabled label="Disabled" />
    </ScrollView>
  );
};

export default InputPage;
