import React from 'react';
import styled from 'styled-components';
import { string, shape } from 'prop-types';
import { hexToRgb } from '@gympass/yoga-common';
import MetaDataQuery from './MetaDataQuery';

import { InlineCode } from '..';

const TableWrapper = styled.div`
  ${({
    theme: {
      colors: { gray: grayPallete },
    },
  }) => `
    border: 1px solid ${grayPallete[2]};
    border-radius: 5px;
    overflow: hidden;
  `};
`;

const StyledTable = styled.table`
  ${({
    theme: {
      colors: { primary: primaryPallete, gray: grayPallete },
    },
  }) => `
    background-color: ${grayPallete[0]};
    border-collapse: collapse;
    font-family: monospace;
    margin: 0px 0;
    width: 100%;

    thead {
      background-color: ${hexToRgb(grayPallete[1], 0.5)};
      font-family: 'Muli';

      th {
        font-size: 14px;
        font-weight: normal;
        padding: 14px 12px 12px;
        text-align: left;
      }
    }

    tbody {
      tr {
        background-color: ${grayPallete[0]};

        td {
          border-top: 1px solid ${hexToRgb(grayPallete[2], 0.7)};
          padding: 14px 12px 12px;

          &:first-child {
            font-weight: 700;
          }

          &:nth-child(3),
          &:last-child {
            color: ${primaryPallete[3]};
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
  data: shape({}).isRequired,
};

const PropsTable = ({ component, platform }) => {
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
