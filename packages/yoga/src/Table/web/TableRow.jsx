import React from 'react';
import { TableRow as TableRowMaterial } from '@material-ui/core';
import { node } from 'prop-types';

const TableRow = ({ children, ...rest }) => (
  <TableRowMaterial {...rest}>{children}</TableRowMaterial>
);

TableRow.displayName = 'Table.Row';

TableRow.propTypes = {
  children: node.isRequired,
};

export default TableRow;
