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

const Span = styled.span`
  ${({ theme, size }) => css`
    display: inline-block;
    background-color: rgba(215, 215, 224, 0.7);
    width: ${theme.yoga.spacing[size]}px;
    height: ${theme.yoga.spacing[size]}px;
  `}
`;

const Spacing = ({ theme }) => {
  return (
    <Table>
      <tr>
        <th> theme </th>
        <th> Value </th>
        <th> Example </th>
      </tr>
      <tr>
        <th> spacing.zero </th>
        <th> {theme.yoga.spacing.zero} </th>
        <th>
          <Span theme={theme} size={0} />
        </th>
      </tr>
      <tr>
        <th> spacing.xxxsmall </th>
        <th> {theme.yoga.spacing.xxxsmall} </th>
        <th>
          <Span theme={theme} size={1} />
        </th>
      </tr>
      <tr>
        <th> spacing.xxsmall </th>
        <th> {theme.yoga.spacing.xxsmall} </th>
        <th>
          <Span theme={theme} size={2} />
        </th>
      </tr>
      <tr>
        <th> spacing.xsmall </th>
        <th> {theme.yoga.spacing.xsmall} </th>
        <th>
          <Span theme={theme} size={3} />
        </th>
      </tr>
      <tr>
        <th> spacing.small </th>
        <th> {theme.yoga.spacing.small} </th>
        <th>
          <Span theme={theme} size={4} />
        </th>
      </tr>
      <tr>
        <th> spacing.medium </th>
        <th> {theme.yoga.spacing.medium} </th>
        <th>
          <Span theme={theme} size={5} />
        </th>
      </tr>
      <tr>
        <th> spacing.large </th>
        <th> {theme.yoga.spacing.large} </th>
        <th>
          <Span theme={theme} size={6} />
        </th>
      </tr>
      <tr>
        <th> spacing.xlarge </th>
        <th> {theme.yoga.spacing.xlarge} </th>
        <th>
          <Span theme={theme} size={7} />
        </th>
      </tr>
      <tr>
        <th> spacing.xxlarge </th>
        <th> {theme.yoga.spacing.xxlarge} </th>
        <th>
          <Span theme={theme} size={8} />
        </th>
      </tr>
      <tr>
        <th> spacing.xxxlarge </th>
        <th> {theme.yoga.spacing.xxxlarge} </th>
        <th>
          <Span theme={theme} size={9} />
        </th>
      </tr>
      <tr>
        <th> spacing.huge </th>
        <th> {theme.yoga.spacing.huge} </th>
        <th>
          <Span theme={theme} size={10} />
        </th>
      </tr>
      <tr>
        <th> spacing.xhuge </th>
        <th> {theme.yoga.spacing.xhuge} </th>
        <th>
          <Span theme={theme} size={11} />
        </th>
      </tr>
    </Table>
  );
};

export default withTheme(Spacing);
