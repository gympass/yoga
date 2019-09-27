import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

const StyledTable = styled.table`
  border: 1px solid #f2f2f2;
  border-collapse: collapse;
  font-family: monospace;
  margin: 10px 0;
  width: 100%;

  thead {
    background-color: #fbfbfb;

    th {
      font-size: 14px;
      font-weight: normal;
      padding: 14px 12px 12px;
      text-align: left;
    }
  }

  tbody {
    tr {
      td {
        border-top: 1px solid #f2f2f2;
        padding: 14px 12px 12px;

        &:first-child {
          font-weight: 700;
        }

        &:nth-child(3),
        &:last-child {
          color: #c41d7f;
        }

        &:nth-child(4) {
          code {
            background-color: #fbfbfb;
            border: 1px solid #f2f2f2;
            border-radius: 3px;
            padding: 5px;
          }
        }
      }
    }
  }
`;

const Table = ({
  data: {
    node: { description, props },
  },
}) => (
  <>
    <h3>PropTypes</h3>
    {description && <p>{description.text}</p>}
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
        {props.map(
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
                <code>{defaultValue.replace(/'/g, '')}</code>
              </td>
              <td>{String(isRequired)}</td>
            </tr>
          ),
        )}
      </tbody>
    </StyledTable>
  </>
);

const PropsTable = ({ component }) => (
  <StaticQuery
    query={graphql`
      query {
        allComponentMetadata {
          edges {
            node {
              displayName
              props {
                name
                type {
                  name
                }
                required
                defaultValue {
                  value
                }
                description {
                  text
                }
              }
              description {
                text
              }
            }
          }
        }
      }
    `}
    render={({ allComponentMetadata: { edges } }) => {
      const componentProps = edges.filter(
        ({ node }) => node.displayName === component,
      )[0];
      return <Table data={componentProps} />;
    }}
  />
);

export default PropsTable;
