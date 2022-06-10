import React from 'react';
import { render } from '@testing-library/react-native';
import { BuildingFilled } from '@gympass/yoga-icons';

import { ThemeProvider } from '../..';
import Result from './Result';
import Avatar from '../../Avatar';
import Text from '../../Text';

const attendanceList = [
  {
    description: 'Attendance 01',
    icon: BuildingFilled,
  },
  {
    description: 'Attendance 02',
    icon: BuildingFilled,
  },
];

const entranceList = [
  {
    children: 'From 7:30 am to 9:00 pm',
    variant: 'stamina',
  },
];

const activitiesList = [
  {
    children: 'Yoga',
    variant: 'deep',
  },
  {
    children: 'Meditation',
    variant: 'deep',
  },
  {
    children: 'Pilates',
    variant: 'deep',
  },
  {
    children: 'Activity4',
    variant: 'deep',
  },
  {
    children: 'Activity5',
    variant: 'deep',
  },
];

const tagsList = [
  {
    children: 'Plan x Product availability',
    variant: 'informative',
  },
  {
    children: 'Restriction',
    variant: 'attention',
  },
];

describe('<Result />', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <ThemeProvider>
        <Result
          rate="5.0"
          avatar={<Avatar.Circle />}
          attendances={attendanceList}
          title="Jane Doe"
          subTitle="Activity"
          divided
        >
          <Result.Details items={entranceList} dots renderItem={Text.Small} />
          <Result.Details
            items={activitiesList}
            dots
            limit={3}
            renderItem={Text.Small}
            limitLabel="activities"
          />
          <Result.Tags items={tagsList} />
          <Result.Button>See Details</Result.Button>
        </Result>
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });

  it('should match snapshot without limitLabel prop', () => {
    const { container } = render(
      <ThemeProvider>
        <Result
          rate="5.0"
          avatar={<Avatar.Circle />}
          attendances={attendanceList}
          title="John Doe"
          subTitle="Activity"
          divided
        >
          <Result.Details items={entranceList} dots renderItem={Text.Small} />
          <Result.Details
            items={activitiesList}
            dots
            limit={2}
            renderItem={Text.Small}
          />
          <Result.Tags items={tagsList} />
          <Result.Button>See Details</Result.Button>
        </Result>
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });

  it('should match snapshot without attendence', () => {
    const { container } = render(
      <ThemeProvider>
        <Result avatar={<Avatar />} title="Gym">
          <Result.Details items={entranceList} dots />
          <Result.Details items={activitiesList} dots />
        </Result>
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });
});
