import React from 'react';
import { withTheme } from 'styled-components';
import { Box } from '@gympass/yoga';

import { Table } from './Breakpoints';

const Th = props => <Box as="th" {...props} />;

const FontSizes = ({ theme }) => (
  <Table>
    <tr>
      <th> Theme </th>
      <th> Value </th>
      <th> Example </th>
    </tr>
    <tr>
      <th> fontSizes.xxsmall </th>
      <th> {theme.yoga.fontSizes.xxsmall} </th>
      <Th fs="xxsmall">live the missionss</Th>
    </tr>
    <tr>
      <th> fontSizes.xsmall </th>
      <th> {theme.yoga.fontSizes.xsmall} </th>
      <Th fs="xsmall">live the missionss</Th>
    </tr>
    <tr>
      <th> fontSizes.small </th>
      <th> {theme.yoga.fontSizes.small} </th>
      <Th fs="small">live the missionss</Th>
    </tr>
    <tr>
      <th> fontSizes.medium </th>
      <th> {theme.yoga.fontSizes.medium} </th>
      <Th fs="medium">live the missionss</Th>
    </tr>
    <tr>
      <th> fontSizes.large </th>
      <th> {theme.yoga.fontSizes.large} </th>
      <Th fs="large">live the missionss</Th>
    </tr>
    <tr>
      <th> fontSizes.xlarge </th>
      <th> {theme.yoga.fontSizes.xlarge} </th>
      <Th fs="xlarge">live the missionss</Th>
    </tr>
    <tr>
      <th> fontSizes.xxlarge </th>
      <th> {theme.yoga.fontSizes.xxlarge} </th>
      <Th fs="xxlarge">live the missionss</Th>
    </tr>
    <tr>
      <th> fontSizes.xxxlarge </th>
      <th> {theme.yoga.fontSizes.xxxlarge} </th>
      <Th fs="xxxlarge">live the missionss</Th>
    </tr>
    <tr>
      <th> fontSizes.huge </th>
      <th> {theme.yoga.fontSizes.huge} </th>
      <Th fs="huge">live the missionss</Th>
    </tr>
  </Table>
);

export default withTheme(FontSizes);
