import React from 'react';
import styled from 'styled-components';
import { Result, Avatar, Text } from '@gympass/yoga';
import {
  BuildingFilled,
  Youtube,
  PinFilled,
  SmartphoneFilled,
} from '@gympass/yoga-icons';
import avatar from '../assets/images/avatarIcons/avatar.png';
import { DocTitle } from '../components';

const attendanceList = [
  {
    description: 'In-Person',
    icon: BuildingFilled,
  },
  {
    description: 'Online',
    icon: Youtube,
  },
];

const attendanceList2 = [
  {
    description: 'In person',
    icon: BuildingFilled,
  },
  {
    description: 'Online',
    icon: Youtube,
  },
];

const entranceListExampleApp = [
  {
    children: 'Android & IOS',
    icon: SmartphoneFilled,
  },
];

const activitieListExampleApp = [
  {
    children: 'Therapy',
    variant: 'deep',
  },
];
const activitiesList = [
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
    children: '04',
    variant: 'deep',
  },
  {
    children: '05',
    variant: 'deep',
  },
  {
    children: '06',
    variant: 'deep',
  },
  {
    children: '07',
    variant: 'deep',
  },
];

const entranceList = [
  {
    children: 'From 7:30 am to 9:00 pm',
    variant: 'stamina',
  },
];

const entranceList2 = [
  {
    children: '300ft',
    variant: 'stamina',
    icon: PinFilled,
  },
  {
    children: 'From 7:30 am to 9:00 pm',
    variant: 'stamina',
  },
  {
    children: 'From 7:30 am to 9:00 pm',
    variant: 'stamina',
  },
  {
    children: 'From 7:30 am to 9:00 pm',
    variant: 'stamina',
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

const tagsList2 = [
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

  padding: 0 50px;
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
        attendances={attendanceList}
        title="Ariel Malik Soares da test etsets teste"
        subTitle="Personal"
        divided
      >
        <Result.Details items={entranceList2} dots renderItem={Text.Small} />
        <Result.Details
          items={activitiesList}
          renderItem={Text.Small}
          dots
          limit={3}
        />
        <Result.Tags items={tagsList} />
        <Result.Button>Select</Result.Button>
      </Result>
    </ResultWrapper>
    <ResultWrapper>
      <DocTitle>Default Result With Circle Avatar</DocTitle>
      <Result
        rate="New"
        avatar={<Avatar.Circle src={avatar} />}
        attendances={attendanceList2}
        title="Ariel Malik"
      >
        <Result.Details items={entranceList} dots renderItem={Text.Small} />
        <Result.Details
          items={activitiesList}
          dots
          limit={3}
          renderItem={Text.Small}
        />
        <Result.Tags items={tagsList2} />
        <Result.Button>Upgrade</Result.Button>
      </Result>
    </ResultWrapper>
    <ResultWrapper>
      <Result
        rate="5.0"
        avatar={<Avatar.Circle src={avatar} />}
        attendances={attendanceList2}
        title="Zenklub"
      >
        <Result.Details
          items={entranceListExampleApp}
          renderItem={Text.Small}
          dots
        />
        <Result.Details
          items={activitieListExampleApp}
          renderItem={Text.Small}
          dots
        />
      </Result>
    </ResultWrapper>
  </ScrollView>
);

export default ResultPage;
