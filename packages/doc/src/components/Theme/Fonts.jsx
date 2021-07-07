import React from 'react';
import styled, { withTheme } from 'styled-components';

const Table = styled.table`
  tr {
    border-bottom: 0.3px gray solid;
    th {
      padding: 20px 5px;
      font-weight: normal;

      :nth-child(1) {
        font-weight: bolder;
      }
    }
  }
`;

const Fonts = ({ theme }) => {
  return (
    <Table>
      <tr>
        <th> Theme </th>
        <th> Family </th>
        <th> Weight </th>
      </tr>
      <tr>
        <th> fonts.rubik </th>
        <th>{theme.yoga.fonts.rubik.family}</th>
        <th>
          [
          {theme.yoga.fonts.rubik.weight.map(value => (
            <span key={value}> {value} </span>
          ))}
          ]
        </th>
      </tr>
    </Table>
  );
};

export default withTheme(Fonts);
