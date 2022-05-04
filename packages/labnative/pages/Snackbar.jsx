import React from 'react';
import { View } from 'react-native';
import { Snackbar } from '@gympass/yoga';
import { CheckedFull } from '@gympass/yoga-icons/src';

const SnackbarPage = () => (
  <View flex={1} width="100%">
    <Snackbar
      variant="success"
      icon={CheckedFull}
      actionLabel="Action"
      onAction={() => {}}
    >
      Success
    </Snackbar>
  </View>
);

export default SnackbarPage;
