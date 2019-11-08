import React, { useState } from 'react';
import { Slider } from '@gympass/yoga';

const Working = props => {
  const [values, setValues] = useState([0, 7]);

  return (
    <div style={{ padding: 10 }}>
      <Slider
        max={7}
        min={0}
        values={values}
        onChange={value => setValues(value)}
        snapped
        maxLabel={values[1]}
        minLabel={values[0]}
        tooltip={[
          {
            title: 'Only',
            description: `U$ 19,90`,
            step: 0,
            visible: values[0] === 0 && values[1] === 0,
          },
          {
            title: 'Only',
            description: `U$ 29,90`,
            step: 1,
            visible: values[0] === 1 && values[1] === 1,
          },
          {
            title: 'Only',
            description: `U$ 59,90`,
            step: 2,
            visible: values[0] === 2 && values[1] === 2,
          },
          {
            title: 'Only',
            description: `U$ 99,90`,
            step: 3,
            visible: values[0] === 3 && values[1] === 3,
          },
          {
            title: 'Only',
            description: `U$ 159,90`,
            step: 4,
            visible: values[0] === 4 && values[1] === 4,
          },
          {
            title: 'Only',
            description: `U$ 279,90`,
            step: 5,
            visible: values[0] === 5 && values[1] === 5,
          },
          {
            title: 'Only',
            description: `U$ 379,90`,
            step: 6,
            visible: values[0] === 6 && values[1] === 6,
          },
          {
            title: 'Only',
            description: `U$ 429,90`,
            step: 7,
            visible: values[0] === 7 && values[1] === 7,
          },
          {
            title: 'Start from',
            description: `U$ 19,90`,
            step: 0,
            visible: values[0] === 0,
          },
          {
            title: 'Start from',
            description: `U$ 29,90`,
            step: 1,
            visible: values[0] === 1,
          },
          {
            title: 'Start from',
            description: `U$ 59,90`,
            step: 2,
            visible: values[0] === 2,
          },
          {
            title: 'Start from',
            description: `U$ 99,90`,
            step: 3,
            visible: values[0] === 3,
          },
          {
            title: 'Start from',
            description: `U$ 159,90`,
            step: 4,
            visible: values[0] === 4,
          },
          {
            title: 'Start from',
            description: `U$ 279,90`,
            step: 5,
            visible: values[0] === 5,
          },
          {
            ribbon: 'My plan',
            title: 'Start from',
            description: `U$ 379,90`,
            step: 6,
            visible: values[0] === 6,
          },
          {
            title: 'Start from',
            description: `U$ 429,90`,
            step: 7,
            visible: values[0] === 7,
          },
          {
            title: 'Start from',
            description: `U$ 19,90`,
            step: 0,
            visible: values[0] === 0,
          },
          {
            title: 'Up to',
            description: `U$ 29,90`,
            step: 1,
            visible: values[1] === 1,
          },
          {
            title: 'Up to',
            description: `U$ 59,90`,
            step: 2,
            visible: values[1] === 2,
          },
          {
            title: 'Up to',
            description: `U$ 99,90`,
            step: 3,
            visible: values[1] === 3,
          },
          {
            title: 'Up to',
            description: `U$ 159,90`,
            step: 4,
            visible: values[1] === 4,
          },
          {
            title: 'Up to',
            description: `U$ 279,90`,
            step: 5,
            visible: values[1] === 5,
          },
          {
            ribbon: 'My plan',
            title: 'Up to',
            description: `U$ 379,90`,
            step: 6,
            visible: values[1] === 6,
          },
          {
            title: 'Up to',
            description: `U$ 429,90`,
            step: 7,
            visible: values[1] === 7,
          },
        ]}
        {...props}
      />
    </div>
  );
};

export default Working;
