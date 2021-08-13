import React from 'react';
import styled from 'styled-components';
import { Result, Avatar, Text } from '@gympass/yoga';
import {
  BuildingFilled,
  Youtube,
  PinFilled,
  SmartphoneFilled,
  HomeFilled,
  Accessibility,
} from '@gympass/yoga-icons';
import avatar from '../assets/images/avatarIcons/avatar.png';
import classAvatar from '../assets/images/avatarIcons/class.png';
import { DocTitle } from '../components';

const activitiesExample1 = [
  {
    children: 'Yoga',
    variant: 'deep',
    icon: PinFilled,
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
    children: 'Spa',
    variant: 'deep',
  },
  {
    children: 'Well Being',
    variant: 'deep',
  },
];

const entrancesExample1 = [
  {
    children: '300ft',
    variant: 'stamina',
    icon: PinFilled,
  },
  {
    children: 'From 7:30 am to 9:00 pm',
    variant: 'stamina',
    icon: PinFilled,
  },
];

const attendancesExample1 = [
  {
    description: 'In-Person',
    icon: BuildingFilled,
  },
  {
    description: 'Online',
    icon: Youtube,
  },
];

const entrancesExample2 = [
  {
    children: 'Android & IOS',
    icon: SmartphoneFilled,
  },
];

const attendancesExample2 = [
  {
    description: 'In person',
    icon: BuildingFilled,
  },
  {
    description: 'Online',
    icon: Youtube,
  },
];

const activitieExample2 = [
  {
    children: 'Therapy',
    variant: 'deep',
  },
];

const attendancesExample3 = [
  {
    description: 'In-Person',
    icon: Accessibility,
  },
  {
    description: 'Online',
    icon: HomeFilled,
  },
  {
    description: 'Group',
    icon: PinFilled,
  },
];

const entrancesExample3 = [
  {
    children: 'From 7:30 am to 9:00 pm',
  },
];

const activitiesExample3 = [
  {
    children: 'Yoga',
    variant: 'deep',
    icon: BuildingFilled,
  },
  {
    children: 'Pilates',
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

const ScrollView = styled.ScrollView`
  padding: 10px;
  margin-bottom: 50px;

  width: 100%;
`;

const ResultWrapper = styled.View`
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  padding: 0 10px;
  margin-bottom: 10px;

  width: 100%;
  height: 250px;
`;

const ResultPage = () => (
  <ScrollView>
    <ResultWrapper>
      <DocTitle>Default Result</DocTitle>
      <Result
        rate="5.0"
        avatar={<Avatar src={avatar} />}
        attendances={attendancesExample1}
        title="Ariel Malik"
        subTitle="Personal"
        divided
      >
        <Result.Details
          items={entrancesExample1}
          dots
          renderItem={Text.Small}
        />
        <Result.Details
          items={activitiesExample1}
          renderItem={Text.Small}
          dots
          limit={3}
          limitLabel="activities"
        />
        <Result.Tags items={tagsList} />
        <Result.Button>Select</Result.Button>
      </Result>
    </ResultWrapper>

    <ResultWrapper>
      <DocTitle>Default Result With Circle Avatar</DocTitle>
      <Result
        rate="5.0"
        avatar={<Avatar.Circle src={avatar} />}
        attendances={attendancesExample2}
        title="Zenklub"
      >
        <Result.Details
          items={entrancesExample2}
          renderItem={Text.Small}
          dots
        />
        <Result.Details
          items={activitieExample2}
          renderItem={Text.Small}
          dots
        />
        <Result.Tags items={tagsList} />
        <Result.Button>Select</Result.Button>
      </Result>
    </ResultWrapper>
    <ResultWrapper>
      <DocTitle>Default Result With Circle Avatar Without button</DocTitle>
      <Result
        avatar={<Avatar.Circle />}
        attendances={attendancesExample3}
        title="John"
      >
        <Result.Details
          items={entrancesExample3}
          renderItem={Text.Small}
          dots
        />
        <Result.Details
          items={activitiesExample3}
          renderItem={Text.Small}
          dots
        />
      </Result>
    </ResultWrapper>
    <ResultWrapper>
      <DocTitle>Result With Circle Avatar with button</DocTitle>
      <Result
        avatar={<Avatar.Circle src={classAvatar} />}
        attendances={attendancesExample3}
        title="John"
      >
        <Result.Button>See Details</Result.Button>
      </Result>
    </ResultWrapper>
  </ScrollView>
);

export default ResultPage;
