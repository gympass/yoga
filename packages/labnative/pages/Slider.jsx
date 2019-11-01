import React, { useState } from 'react';
import { View } from 'react-native';
import { Slider } from '@gympass/yoga';

const SliderPage = () => {
  const [singleValue, setSingleValues] = useState([0]);
  const [multiValues, setMultiValues] = useState([0, 7]);

  return (
    <View>
      <View>
        <Slider
          min={0}
          max={50}
          sliderLength={300}
          step={1}
          values={singleValue}
          onValuesChange={e => setSingleValues(e)}
          minLabel="05 am"
          maxLabel="5 pm"
        />
      </View>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Slider
          max={10}
          min={0}
          onValuesChange={e => setMultiValues(e)}
          sliderLength={250}
          snapped
          step={1}
          allowOverlap={true}
          values={multiValues}
          tooltip={[
            {
              ribbon: 'Meu plano',
              title: 'Até',
              description: `R$ 199,90`,
              step: 6,
              visible: multiValues[0] === 6 || multiValues[1] === 6,
            },
            {
              title: 'Até',
              description: 'R$ 299,00',
              step: 7,
              visible: multiValues[0] === 7 || multiValues[1] === 7,
            },
          ]}
        />
      </View>
    </View>
  );
};

export default SliderPage;
