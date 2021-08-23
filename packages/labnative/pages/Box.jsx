import React from 'react';
import { View } from 'react-native';
import { Box, Text } from '@gympass/yoga';

const BoxPage = () => (
  <View>
    <Box
      b="small"
      p="small"
      borderRadius="small"
      borderColor="feedback.success.dark"
      display="flex"
      flexDirection="column"
      alignItems="center"
      elevation="small"
      bgColor="white"
    >
      <Text>Making</Text>
      <Text>wellbeing</Text>
      <Text>universal</Text>
    </Box>
  </View>
);

export default BoxPage;
