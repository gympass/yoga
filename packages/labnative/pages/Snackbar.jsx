import React from 'react';
import { View } from 'react-native';
import { Snackbar } from '@gympass/yoga';

const SnackbarPage = () => (
  <View flex={1} width="100%">
    <Snackbar
      variantColor="success"
      icon="CheckedFull"
      actionLabel="Action"
      closeButton
    >
      Success
    </Snackbar>
  </View>
);

export default SnackbarPage;
