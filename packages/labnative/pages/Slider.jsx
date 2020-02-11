import React, { useState } from 'react';
import styled from 'styled-components';
import { ScrollView } from 'react-native';
import { Slider } from '@gympass/yoga';

import { DocTitle } from '../components';

const StyledView = styled.View`
  margin-bottom: 30px;
`;

const SliderPage = () => {
  const [simple, setSimple] = useState([0]);
  const [withTooltip, setWithTooltip] = useState([0, 10]);
  const [overlapMultiLabel, setOverlapMultiLabel] = useState([0, 10]);
  const [singleSnapped, setSingleSnapped] = useState([0]);
  const [multiValues, setMultiValues] = useState([0, 7]);

  return (
    <ScrollView
      style={{ width: '100%' }}
      contentContainerStyle={{
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <StyledView>
        <DocTitle>Simple</DocTitle>
        <Slider
          min={0}
          max={10}
          sliderLength={300}
          values={simple}
          step={1}
          onValuesChange={e => setSimple(e)}
        />
      </StyledView>
      <StyledView>
        <DocTitle>With Tooltip</DocTitle>
        <Slider
          min={0}
          max={10}
          sliderLength={300}
          values={withTooltip}
          step={1}
          onValuesChange={e => setWithTooltip(e)}
          tooltip={[
            {
              ribbon: 'Ribbon',
              title: 'Title',
              description: `Description`,
              visible: true,
            },
          ]}
        />
      </StyledView>
      <StyledView>
        <DocTitle>Multi with min and max labels</DocTitle>
        <Slider
          min={0}
          max={24}
          sliderLength={300}
          values={overlapMultiLabel}
          step={1}
          allowOverlap
          onValuesChange={e => setOverlapMultiLabel(e)}
          minLabel={`${overlapMultiLabel[0]} h`}
          maxLabel={`${overlapMultiLabel[1]} h`}
        />
      </StyledView>
      <StyledView>
        <DocTitle>Snapped</DocTitle>
        <Slider
          min={0}
          max={10}
          sliderLength={300}
          values={singleSnapped}
          onValuesChange={e => setSingleSnapped(e)}
          step={1}
          snapped
        />
      </StyledView>
      <StyledView>
        <DocTitle>Plans</DocTitle>
        <Slider
          max={7}
          min={0}
          onValuesChange={e => setMultiValues(e)}
          sliderLength={300}
          snapped
          step={1}
          values={multiValues}
          allowOverlap
          tooltip={[
            {
              title: 'Only',
              description: `U$ 19,90`,
              step: 0,
              visible: multiValues[0] === 0 && multiValues[1] === 0,
            },
            {
              title: 'Only',
              description: `U$ 29,90`,
              step: 1,
              visible: multiValues[0] === 1 && multiValues[1] === 1,
            },
            {
              title: 'Only',
              description: `U$ 59,90`,
              step: 2,
              visible: multiValues[0] === 2 && multiValues[1] === 2,
            },
            {
              title: 'Only',
              description: `U$ 99,90`,
              step: 3,
              visible: multiValues[0] === 3 && multiValues[1] === 3,
            },
            {
              title: 'Only',
              description: `U$ 159,90`,
              step: 4,
              visible: multiValues[0] === 4 && multiValues[1] === 4,
            },
            {
              title: 'Only',
              description: `U$ 279,90`,
              step: 5,
              visible: multiValues[0] === 5 && multiValues[1] === 5,
            },
            {
              title: 'Only',
              description: `U$ 379,90`,
              step: 6,
              visible: multiValues[0] === 6 && multiValues[1] === 6,
            },
            {
              title: 'Only',
              description: `U$ 429,90`,
              step: 7,
              visible: multiValues[0] === 7 && multiValues[1] === 7,
            },
            {
              title: 'Start from',
              description: `U$ 19,90`,
              step: 0,
              visible: multiValues[0] === 0,
            },
            {
              title: 'Start from',
              description: `U$ 29,90`,
              step: 1,
              visible: multiValues[0] === 1,
            },
            {
              title: 'Start from',
              description: `U$ 59,90`,
              step: 2,
              visible: multiValues[0] === 2,
            },
            {
              title: 'Start from',
              description: `U$ 99,90`,
              step: 3,
              visible: multiValues[0] === 3,
            },
            {
              title: 'Start from',
              description: `U$ 159,90`,
              step: 4,
              visible: multiValues[0] === 4,
            },
            {
              title: 'Start from',
              description: `U$ 279,90`,
              step: 5,
              visible: multiValues[0] === 5,
            },
            {
              ribbon: 'My plan',
              title: 'Start from',
              description: `U$ 379,90`,
              step: 6,
              visible: multiValues[0] === 6,
            },
            {
              title: 'Start from',
              description: `U$ 429,90`,
              step: 7,
              visible: multiValues[0] === 7,
            },
            {
              title: 'Start from',
              description: `U$ 19,90`,
              step: 0,
              visible: multiValues[0] === 0,
            },
            {
              title: 'Up to',
              description: `U$ 29,90`,
              step: 1,
              visible: multiValues[1] === 1,
            },
            {
              title: 'Up to',
              description: `U$ 59,90`,
              step: 2,
              visible: multiValues[1] === 2,
            },
            {
              title: 'Up to',
              description: `U$ 99,90`,
              step: 3,
              visible: multiValues[1] === 3,
            },
            {
              title: 'Up to',
              description: `U$ 159,90`,
              step: 4,
              visible: multiValues[1] === 4,
            },
            {
              title: 'Up to',
              description: `U$ 279,90`,
              step: 5,
              visible: multiValues[1] === 5,
            },
            {
              ribbon: 'My plan',
              title: 'Up to',
              description: `U$ 379,90`,
              step: 6,
              visible: multiValues[1] === 6,
            },
            {
              title: 'Up to',
              description: `U$ 429,90`,
              step: 7,
              visible: multiValues[1] === 7,
            },
          ]}
        />
      </StyledView>
    </ScrollView>
  );
};

export default SliderPage;
