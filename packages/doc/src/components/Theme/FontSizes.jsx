import React from 'react';
import styled, { withTheme, css } from 'styled-components';

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

const Th = styled.th`
  ${({ theme, size }) => css`
    font-size: ${theme.yoga.fontSizes[size]}px;
  `}
`;

const FontSizes = ({ theme }) => {
  return (
    <Table>
      <tr>
        <th> Theme </th>
        <th> Value </th>
        <th> Example </th>
      </tr>
      <tr>
        <th> fontSizes.xxsmall </th>
        <th> {theme.yoga.fontSizes.xxsmall} </th>
        <Th theme={theme} size={0}>
          live the missionss
        </Th>
      </tr>
      <tr>
        <th> fontSizes.xsmall </th>
        <th> {theme.yoga.fontSizes.xsmall} </th>
        <Th theme={theme} size={1}>
          live the missionss
        </Th>
      </tr>
      <tr>
        <th> fontSizes.small </th>
        <th> {theme.yoga.fontSizes.small} </th>
        <Th theme={theme} size={2}>
          live the missionss
        </Th>
      </tr>
      <tr>
        <th> fontSizes.medium </th>
        <th> {theme.yoga.fontSizes.medium} </th>
        <Th theme={theme} size={3}>
          live the missionss
        </Th>
      </tr>
      <tr>
        <th> fontSizes.large </th>
        <th> {theme.yoga.fontSizes.large} </th>
        <Th theme={theme} size={4}>
          live the missionss
        </Th>
      </tr>
      <tr>
        <th> fontSizes.xlarge </th>
        <th> {theme.yoga.fontSizes.xlarge} </th>
        <Th theme={theme} size={5}>
          live the missionss
        </Th>
      </tr>
      <tr>
        <th> fontSizes.xxlarge </th>
        <th> {theme.yoga.fontSizes.xxlarge} </th>
        <Th theme={theme} size={6}>
          live the missionss
        </Th>
      </tr>
      <tr>
        <th> fontSizes.xxxlarge </th>
        <th> {theme.yoga.fontSizes.xxxlarge} </th>
        <Th theme={theme} size={7}>
          live the missionss
        </Th>
      </tr>
      <tr>
        <th> fontSizes.huge </th>
        <th> {theme.yoga.fontSizes.huge} </th>
        <Th theme={theme} size={8}>
          live the missionss
        </Th>
      </tr>
    </Table>
  );
};

export default withTheme(FontSizes);
