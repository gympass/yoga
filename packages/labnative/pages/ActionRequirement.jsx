import React from 'react';
import { View } from 'react-native';
import { ActionRequirement, Box, Checkbox, Text } from '@gympass/yoga';
import { Img2d01 } from '@gympass/yoga-illustrations';
import { Dumbbell, User, Star } from '@gympass/yoga-icons';

function handleGetCheckableContent() {
  return (
    <Box display="flex" flexDirection="row" alignItems="center">
      <Checkbox />
      <Text>I have read and agree to the Terms of Use and Privacy Policy.</Text>
    </Box>
  );
}

function handleGetIllustration() {
  return <Img2d01 width={375} height={375} />;
}

function handleGetList() {
  return (
    <>
      <Text>
        <Dumbbell /> 1x/day standard access
      </Text>
      <Text mt="small">
        <User /> 4x/month 1-on-1 sessions
      </Text>
      <Text mt="small">
        <Star /> 2x/month premium classes
      </Text>
    </>
  );
}

function ActionRequirementPage() {
  return (
    <View>
      <ActionRequirement
        title="Welcome to the world of feeling good!"
        description="Let’s make it a good day!"
        illustration={handleGetIllustration()}
        checkable={handleGetCheckableContent()}
        list={handleGetList()}
      />
    </View>
  );
}

export default ActionRequirementPage;
