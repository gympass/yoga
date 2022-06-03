import React, { useRef } from 'react';
import { View } from 'react-native';
import { Button, Snackbar } from '@gympass/yoga';
import { CheckedFull } from '@gympass/yoga-icons/src';

import { DocTitle } from '../components';

const SnackbarPage = () => {
  const snackbarRef = useRef();

  const handleOpenSnackbar = () => {
    snackbarRef.current.open();
  };
  const closeSnackbar = () => {
    snackbarRef.current.close();
  };

  return (
    <View flex={1} width="100%" alignItems="center">
      <DocTitle>Default Snackbar</DocTitle>

      <Button onPress={handleOpenSnackbar}>Tap to open snackbar</Button>

      <Snackbar
        variant="success"
        icon={CheckedFull}
        message="Feedback message"
        actionLabel="Action"
        onClose={closeSnackbar}
        onAction={() => {}}
        duration="default"
        bottomOffset={0}
        ref={snackbarRef}
      />
    </View>
  );
};

export default SnackbarPage;
