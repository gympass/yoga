import React from 'react';
import styled from 'styled-components';
import { string, shape } from 'prop-types';
import tokens from '@gympass/yoga-tokens';
import MetaDataQuery from './MetaDataQuery';
import { InlineCode } from '..';

const { colors } = tokens;

const BORDER_COLOR = '#e2dddd';

const TableWrapper = styled.div`
  border: 1px solid ${BORDER_COLOR};
  border-radius: 5px;
  overflow: hidden;
`;

const StyledTable = styled.table`
  border-collapse: collapse;
  font-family: monospace;
  margin: 0px 0;
  width: 100%;

  thead {
    background-color: #f6f8fa;

    th {
      font-size: 14px;
      font-weight: normal;
      padding: 14px 12px 12px;
      text-align: left;
    }
  }

  tbody {
    tr {
      background-color: ${colors.gray[0]};

      td {
        border-top: 1px solid ${BORDER_COLOR};
        padding: 14px 12px 12px;

        &:first-child {
          font-weight: 700;
        }

        &:nth-child(3),
        &:last-child {
          color: #e3116c;
        }
      }
    }
  }
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
            defaultValue: { value: defaultValue },
            required: isRequired,
          }) => (
            <tr key={name}>
              <td>{name}</td>
              <td>{description}</td>
              <td>{type}</td>
              <td>
                <InlineCode>{defaultValue.replace(/'/g, '')}</InlineCode>
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
