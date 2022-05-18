import React, { createRef } from 'react';
import { View } from 'react-native';
import { Button, Snackbar } from '@gympass/yoga';
import { CheckedFull } from '@gympass/yoga-icons/src';

import { DocTitle } from '../components';

const SnackbarPage = () => {
  const snackbarRef = createRef();

  const handleOpenSnackbar = () => {
    snackbarRef.current.open();
  };

  return (
    <View flex={1} width="100%" alignItems="center">
      <DocTitle>Default Snackbar</DocTitle>

      <Button onPress={handleOpenSnackbar}>Tap to open snackbar</Button>

      <Snackbar
        variant="success"
        icon={CheckedFull}
        message="Lorem Ipsum is simply dummy text of the printing and types."
        actionLabel="See details"
        onAction={() => {}}
        duration="default"
        bottomOffset={0}
        ref={snackbarRef}
      />
    </View>
  );
};

export default SnackbarPage;
