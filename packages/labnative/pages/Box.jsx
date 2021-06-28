import React from 'react';
import { View } from 'react-native';
import { Box, Text } from '@gympass/yoga';

const BoxPage = () => (
  <View>
    <Box
      b="small"
      p="small"
      borderRadius="small"
      color="feedback.success.dark"
      as={Text}
    >
      Making wellbeing universal
    </Box>
  </View>
);

export default BoxPage;
