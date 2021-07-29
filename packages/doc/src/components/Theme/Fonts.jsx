import React from 'react';
import { withTheme } from 'styled-components';

import { Table } from './Breakpoints';

const Fonts = ({ theme }) => (
  <Table>
    <thead>
      <tr>
        <td> Theme </td>
        <td> Family </td>
        <td> Weight </td>
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
