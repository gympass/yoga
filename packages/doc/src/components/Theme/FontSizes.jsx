import React from 'react';
import { withTheme } from 'styled-components';
import { Box } from '@gympass/yoga';

import { Table } from './Breakpoints';

const Td = props => <Box as="td" {...props} />;

const FontSizes = ({ theme }) => (
  <Table>
    <thead>
      <tr>
        <th> Theme </th>
        <th> Value </th>
        <th> Example </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td> fontSizes.xxsmall </td>
        <td> {theme.yoga.fontSizes.xxsmall} </td>
        <Td fs="xxsmall">live the missionss</Td>
      </tr>
      <tr>
        <td> fontSizes.xsmall </td>
        <td> {theme.yoga.fontSizes.xsmall} </td>
        <Td fs="xsmall">live the missionss</Td>
      </tr>
      <tr>
        <td> fontSizes.small </td>
        <td> {theme.yoga.fontSizes.small} </td>
        <Td fs="small">live the missionss</Td>
      </tr>
      <tr>
        <td> fontSizes.medium </td>
        <td> {theme.yoga.fontSizes.medium} </td>
        <Td fs="medium">live the missionss</Td>
      </tr>
      <tr>
        <td> fontSizes.large </td>
        <td> {theme.yoga.fontSizes.large} </td>
        <Td fs="large">live the missionss</Td>
      </tr>
      <tr>
        <td> fontSizes.xlarge </td>
        <td> {theme.yoga.fontSizes.xlarge} </td>
        <Td fs="xlarge">live the missionss</Td>
      </tr>
      <tr>
        <td> fontSizes.xxlarge </td>
        <td> {theme.yoga.fontSizes.xxlarge} </td>
        <Td fs="xxlarge">live the missionss</Td>
      </tr>
      <tr>
        <td> fontSizes.xxxlarge </td>
        <td> {theme.yoga.fontSizes.xxxlarge} </td>
        <Td fs="xxxlarge">live the missionss</Td>
      </tr>
      <tr>
        <td> fontSizes.huge </td>
        <td> {theme.yoga.fontSizes.huge} </td>
        <Td fs="huge">live the missionss</Td>
      </tr>
    </tbody>
  </Table>
);

export default withTheme(FontSizes);
