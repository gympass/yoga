import React from 'react';
import styled, { withTheme } from 'styled-components';

export const Table = styled.table`
  tbody tr td,
  thead tr td,
  tbody tr th,
  thead tr th {
    border: none;
  }

  tr {
    border-bottom: 1px gray solid;

    th,
    td {
      padding: 20px;
      font-weight: normal;

      :first-child {
        font-weight: bold;
      }
    }
  }
`;

const Breakpoints = ({ theme }) => (
  <Table>
    <thead>
      <tr>
        <th>Theme</th>
        <th>Width</th>
        <th>Margin</th>
        <th>Gutter</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>breakpoints.xxs</td>
        <td>{theme.yoga.breakpoints.xxs.width}</td>
        <td>{theme.yoga.breakpoints.xxs.margin}</td>
        <td>{theme.yoga.breakpoints.xxs.gutter}</td>
      </tr>
      <tr>
        <td>breakpoints.xs</td>
        <td>{theme.yoga.breakpoints.xs.width}</td>
        <td>{theme.yoga.breakpoints.xs.margin}</td>
        <td>{theme.yoga.breakpoints.xs.gutter}</td>
      </tr>
      <tr>
        <td>breakpoints.sm</td>
        <td>{theme.yoga.breakpoints.sm.width}</td>
        <td>{theme.yoga.breakpoints.sm.margin}</td>
        <td>{theme.yoga.breakpoints.sm.gutter}</td>
      </tr>
      <tr>
        <td>breakpoints.md</td>
        <td>{theme.yoga.breakpoints.md.width}</td>
        <td>{theme.yoga.breakpoints.md.margin}</td>
        <td>{theme.yoga.breakpoints.md.gutter}</td>
      </tr>
      <tr>
        <td>breakpoints.lg</td>
        <td>{theme.yoga.breakpoints.lg.width}</td>
        <td>{theme.yoga.breakpoints.lg.margin}</td>
        <td>{theme.yoga.breakpoints.lg.gutter}</td>
      </tr>
      <tr>
        <td>breakpoints.xl</td>
        <td>{theme.yoga.breakpoints.xl.width}</td>
        <td>{theme.yoga.breakpoints.xl.margin}</td>
        <td>{theme.yoga.breakpoints.xl.gutter}</td>
      </tr>
      <tr>
        <td>breakpoints.xxl</td>
        <td>{theme.yoga.breakpoints.xxl.width}</td>
        <td>{theme.yoga.breakpoints.xxl.margin}</td>
        <td>{theme.yoga.breakpoints.xxl.gutter}</td>
      </tr>
      <tr>
        <td>breakpoints.xxxl</td>
        <td>{theme.yoga.breakpoints.xxxl.width}</td>
        <td>{theme.yoga.breakpoints.xxxl.margin}</td>
        <td>{theme.yoga.breakpoints.xxxl.gutter}</td>
      </tr>
    </tbody>
  </Table>
);

export default withTheme(Breakpoints);
