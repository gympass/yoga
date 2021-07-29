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
        <th>breakpoints.xxs</th>
        <th>{theme.yoga.breakpoints.xxs.width}</th>
        <th>{theme.yoga.breakpoints.xxs.margin}</th>
        <th>{theme.yoga.breakpoints.xxs.gutter}</th>
      </tr>
      <tr>
        <th>breakpoints.xs</th>
        <th>{theme.yoga.breakpoints.xs.width}</th>
        <th>{theme.yoga.breakpoints.xs.margin}</th>
        <th>{theme.yoga.breakpoints.xs.gutter}</th>
      </tr>
      <tr>
        <th>breakpoints.sm</th>
        <th>{theme.yoga.breakpoints.sm.width}</th>
        <th>{theme.yoga.breakpoints.sm.margin}</th>
        <th>{theme.yoga.breakpoints.sm.gutter}</th>
      </tr>
      <tr>
        <th>breakpoints.md</th>
        <th>{theme.yoga.breakpoints.md.width}</th>
        <th>{theme.yoga.breakpoints.md.margin}</th>
        <th>{theme.yoga.breakpoints.md.gutter}</th>
      </tr>
      <tr>
        <th>breakpoints.lg</th>
        <th>{theme.yoga.breakpoints.lg.width}</th>
        <th>{theme.yoga.breakpoints.lg.margin}</th>
        <th>{theme.yoga.breakpoints.lg.gutter}</th>
      </tr>
      <tr>
        <th>breakpoints.xl</th>
        <th>{theme.yoga.breakpoints.xl.width}</th>
        <th>{theme.yoga.breakpoints.xl.margin}</th>
        <th>{theme.yoga.breakpoints.xl.gutter}</th>
      </tr>
      <tr>
        <th>breakpoints.xxl</th>
        <th>{theme.yoga.breakpoints.xxl.width}</th>
        <th>{theme.yoga.breakpoints.xxl.margin}</th>
        <th>{theme.yoga.breakpoints.xxl.gutter}</th>
      </tr>
      <tr>
        <th>breakpoints.xxxl</th>
        <th>{theme.yoga.breakpoints.xxxl.width}</th>
        <th>{theme.yoga.breakpoints.xxxl.margin}</th>
        <th>{theme.yoga.breakpoints.xxxl.gutter}</th>
      </tr>
    </tbody>
  </Table>
);

export default withTheme(Breakpoints);
