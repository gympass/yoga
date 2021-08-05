import React from 'react';
import { withTheme } from 'styled-components';

import { Table } from './Breakpoints';

const Fonts = ({ theme }) => (
  <Table>
    <thead>
      <tr>
        <th> Theme </th>
        <th> Family </th>
        <th> Weight </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td> fonts.rubik </td>
        <td>{theme.yoga.fonts.rubik.family}</td>
        <td>[{theme.yoga.fonts.rubik.weight.join(', ')}]</td>
      </tr>
    </tbody>
  </Table>
);

export default withTheme(Fonts);
