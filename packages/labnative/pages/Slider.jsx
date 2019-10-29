import React, { useState } from 'react';
import { Slider } from '@gympass/yoga';
import styled from 'styled-components';

const SliderPage = () => {
  return (
    <View
      style={{
        paddingBottom: 40,
      }}
    >
      <Slider />
    </View>
  );
};

export default SliderPage;
