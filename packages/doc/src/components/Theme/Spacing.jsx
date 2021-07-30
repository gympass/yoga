import React from 'react';
import { withTheme } from 'styled-components';
import { Box } from '@gympass/yoga';

import { Table } from './Breakpoints';

const SpaceBox = props => (
  <Box display="inline-block" bgColor="rgba(215, 215, 224, 0.7)" {...props} />
);

const Spacing = ({ theme }) => (
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
        <td> spacing.zero </td>
        <td> {theme.yoga.spacing.zero} </td>
        <td>
          <SpaceBox w="zero" h="zero" />
        </td>
      </tr>
      <tr>
        <td> spacing.xxxsmall </td>
        <td> {theme.yoga.spacing.xxxsmall} </td>
        <td>
          <SpaceBox w="xxxsmall" h="xxxsmall" />
        </td>
      </tr>
      <tr>
        <td> spacing.xxsmall </td>
        <td> {theme.yoga.spacing.xxsmall} </td>
        <td>
          <SpaceBox w="xxsmall" h="xxsmall" />
        </td>
      </tr>
      <tr>
        <td> spacing.xsmall </td>
        <td> {theme.yoga.spacing.xsmall} </td>
        <td>
          <SpaceBox w="xsmall" h="xsmall" />
        </td>
      </tr>
      <tr>
        <td> spacing.small </td>
        <td> {theme.yoga.spacing.small} </td>
        <td>
          <SpaceBox w="small" h="small" />
        </td>
      </tr>
      <tr>
        <td> spacing.medium </td>
        <td> {theme.yoga.spacing.medium} </td>
        <td>
          <SpaceBox w="medium" h="medium" />
        </td>
      </tr>
      <tr>
        <td> spacing.large </td>
        <td> {theme.yoga.spacing.large} </td>
        <td>
          <SpaceBox w="large" h="large" />
        </td>
      </tr>
      <tr>
        <td> spacing.xlarge </td>
        <td> {theme.yoga.spacing.xlarge} </td>
        <td>
          <SpaceBox w="xlarge" h="xlarge" />
        </td>
      </tr>
      <tr>
        <td> spacing.xxlarge </td>
        <td> {theme.yoga.spacing.xxlarge} </td>
        <td>
          <SpaceBox w="xxlarge" h="xxlarge" />
        </td>
      </tr>
      <tr>
        <td> spacing.xxxlarge </td>
        <td> {theme.yoga.spacing.xxxlarge} </td>
        <td>
          <SpaceBox w="xxxlarge" h="xxxlarge" />
        </td>
      </tr>
      <tr>
        <td> spacing.huge </td>
        <td> {theme.yoga.spacing.huge} </td>
        <td>
          <SpaceBox w="huge" h="huge" />
        </td>
      </tr>
      <tr>
        <td> spacing.xhuge </td>
        <td> {theme.yoga.spacing.xhuge} </td>
        <td>
          <SpaceBox w="xhuge" h="xhuge" />
        </td>
      </tr>
    </tbody>
  </Table>
);

export default withTheme(Spacing);
