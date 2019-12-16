import React from 'react';
import styled from 'styled-components';
import { arrayOf, any, shape, bool, string } from 'prop-types';
import { hexToRgb } from '@gympass/yoga-common';

import withToken from './withToken';

const StyledTable = styled.table`
  ${({
    theme: {
      yoga: {
        colors: { gray: grayPallete },
      },
    },
  }) => `
    width: 100%;
    margin: 0;

    border-collapse: collapse;
    font-family: monospace;

    thead {
      font-family: 'neue-haas-grotesk-display';

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
      border-top: 1px solid ${hexToRgb(grayPallete[2], 0.7)};

      &:first-child {
        font-weight: 700;
      }
    }
  `};
`;

const ExampleStyled = styled.span`
  ${({
    property,
    value,
    valueUnit,
    hasBackground,
    theme: {
      yoga: {
        colors: { gray: grayPallete },
      },
    },
  }) => `
    display: inline-block;
    width: ${
      property === 'height' && valueUnit ? `${value}${valueUnit}` : '100%'
    };
    background-color: ${
      hasBackground ? hexToRgb(grayPallete[2], 0.7) : 'transparent'
    };
    font-family: "Open Sans";
    ${property}: ${valueUnit ? `${value}${valueUnit}` : value};
  `};
`;

const Example = ({ text, ...rest }) => (
  <ExampleStyled {...rest}>{text}</ExampleStyled>
);

Example.propTypes = {
  text: string,
};

Example.defaultProps = {
  text: undefined,
};

const Tokens = ({ data, example }) => (
  <StyledTable>
    <thead>
      <tr>
        <th>Token</th>
        <th>Alias</th>
        <th>Value</th>
        {example && <th>Example</th>}
      </tr>
    </thead>
    <tbody>
      {data &&
        data.map(token => (
          <tr key={token.id}>
            <td>{token.key}</td>
            <td>{token.alias}</td>
            <td>{token.value}</td>
            {example && (
              <td>
                <Example
                  property={example.property}
                  text={example.text}
                  valueUnit={example.valueUnit}
                  hasBackground={example.hasBackground}
                  value={token.value}
                />
              </td>
            )}
          </tr>
        ))}
    </tbody>
  </StyledTable>
);

Tokens.propTypes = {
  data: arrayOf(any).isRequired,
  example: shape({
    property: string,
    text: string,
    valueUnit: string,
    hasBackground: bool,
  }),
};

Tokens.defaultProps = {
  example: undefined,
};

export default withToken(Tokens);
