import React from 'react';
import styled from 'styled-components';
import { string, shape } from 'prop-types';
import { hexToRgb } from '@gympass/yoga-common';
import MetaDataQuery from './MetaDataQuery';

import { InlineCode } from '..';

const TableWrapper = styled.div`
  ${({
    theme: {
      yoga: {
        colors: { elements },
      },
    },
  }) => `
    border: 1px solid ${elements.lineAndBorders};
    border-radius: 5px;
    overflow-x: auto;
  `};
`;

const StyledTable = styled.table`
  ${({
    theme: {
      yoga: {
        colors: { primary, white, elements },
      },
    },
  }) => `
    background-color: ${white};
    border-collapse: collapse;
    font-family: monospace;
    margin: 0px 0;
    width: 100%;

    thead {
      background-color: ${hexToRgb(elements.lineAndBorders, 0.5)};
      font-family: 'neue-haas-grotesk-display';


      th {
        border: none;
        font-size: 14px;
        font-weight: normal;
        padding: 14px 12px 12px;
        text-align: left;
      }
    }

    tbody {
      tr {
        background-color: ${white};

        td {
          border: none;
          border-top: 1px solid ${hexToRgb(elements.selectionAndIcons, 0.7)};
          padding: 14px 12px 12px;

          &:first-child {
            font-weight: 700;
          }

          &:nth-child(3),
          &:last-child {
            color: ${primary};
          }
        }
      }
    }
  `};
`;

const Table = ({
  data: {
    node: { props: properties },
  },
}) => (
  <TableWrapper>
    <StyledTable>
      <thead>
        <tr>
          <th>Prop</th>
          <th>Description</th>
          <th>Type</th>
          <th>Default</th>
          <th>Required</th>
        </tr>
      </thead>
      <tbody>
        {properties.map(
          ({
            name,
            description: { text: description },
            type: { name: type },
            defaultValue,
            required: isRequired,
          }) => (
            <tr key={name}>
              <td>{name}</td>
              <td>{description}</td>
              <td>{type}</td>
              <td>
                <InlineCode>
                  {defaultValue && defaultValue.value.replace(/'/g, '')}
                </InlineCode>
              </td>
              <td>{String(isRequired)}</td>
            </tr>
          ),
        )}
      </tbody>
    </StyledTable>
  </TableWrapper>
);

Table.propTypes = {
  data: shape({}),
};

Table.defaultProps = {
  data: {
    node: {
      props: [],
    },
  },
};

const PropsTable = ({ component, platform = '' }) => {
  const {
    allComponentMetadata: { edges },
  } = MetaDataQuery();

  const componentProps = edges.filter(
    ({ node }) =>
      node.parent.absolutePath.includes(platform) &&
      node.displayName === component,
  )[0];

  return <Table data={componentProps} />;
};

PropsTable.propTypes = {
  component: string.isRequired,
  platform: string.isRequired,
};

export default PropsTable;
