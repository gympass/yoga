import React from 'react';
import styled from 'styled-components';
import { arrayOf, oneOfType, shape, number, bool, string } from 'prop-types';
import { hexToRgb } from '@gympass/yoga-common';

import withToken from './withToken';

function capitalizeFirstLetter(str) {
  const [first, ...rest] = str;

  return `${first.toUpperCase()}${rest}`;
}

const StyledTable = styled.table`
  ${({
    theme: {
      yoga: {
        colors: { elements },
      },
    },
  }) => `
    width: 100%;
    margin: 0;

    border-collapse: collapse;
    font-family: monospace;

    thead {
      font-family: 'inter';

      th {
        padding: 14px 12px 12px;

        border: none;

        font-weight: normal;
        text-align: left;
      }
    }

    tbody td {
      padding: 14px 12px 12px;

      border: none;
      border-top: 1px solid ${hexToRgb(elements.lineAndBorders, 0.7)};

      &:first-child {
        font-weight: 700;
      }
    }
  `};
`;

const Example = styled.span`
  ${({
    property,
    value,
    valueUnit,
    hasBackground,
    theme: {
      yoga: {
        colors: { elements },
      },
    },
  }) => `
    display: inline-block;
    width: ${
      property === 'height' && valueUnit ? `${value}${valueUnit}` : '100%'
    };
    background-color: ${
      hasBackground ? hexToRgb(elements.lineAndBorders, 0.7) : 'transparent'
    };
    font-family: 'Rubik';
    ${property}: ${valueUnit ? `${value}${valueUnit}` : value};
  `};
`;

const Tokens = ({ data, example, columns }) => (
  <StyledTable>
    <thead>
      <tr>
        <th>Token</th>
        <th>Alias</th>
        {columns ? (
          columns.map(column => (
            <th key={column}>{capitalizeFirstLetter(column)}</th>
          ))
        ) : (
          <th>Value</th>
        )}

        {example && <th>Example</th>}
      </tr>
    </thead>
    <tbody>
      {data &&
        data.map(token => (
          <tr key={token.id}>
            <td>{token.key}</td>
            <td>{token.alias}</td>
            {columns ? (
              columns.map(column => {
                const prop = token.value[column];

                return <td key={prop}>{prop}</td>;
              })
            ) : (
              <td>
                {typeof token.value === 'string'
                  ? token.value
                  : JSON.stringify(token.value)}
              </td>
            )}

            {example && (
              <td>
                <Example
                  property={example.property}
                  valueUnit={example.valueUnit}
                  hasBackground={example.hasBackground}
                  value={token.value}
                >
                  {example.text}
                </Example>
              </td>
            )}
          </tr>
        ))}
    </tbody>
  </StyledTable>
);

Tokens.propTypes = {
  data: arrayOf(
    shape({
      token: string,
      id: oneOfType([string, number]),
      key: string,
      alias: string,
      value: oneOfType([string, number]),
    }),
  ).isRequired,
  example: shape({
    property: string,
    text: string,
    valueUnit: string,
    hasBackground: bool,
  }),
  columns: arrayOf(string),
};

Tokens.defaultProps = {
  example: undefined,
  columns: undefined,
};

export default withToken(Tokens);
