import React from 'react';
import { Table as MaterialTable, TableContainer } from '@material-ui/core';
import { node } from 'prop-types';

const defaultComponent = 'table';
const Table = ({ children, ...rest }) => {
  return (
    <TableContainer>
      <MaterialTable component={defaultComponent} {...rest}>
        {children}
      </MaterialTable>
    </TableContainer>
  );
};

Table.displayName = 'Table';

Table.propTypes = {
  children: node.isRequired,
};

export default Table;
