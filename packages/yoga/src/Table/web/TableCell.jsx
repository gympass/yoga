import React from 'react';
import { TableCell as TableCellMaterial } from '@material-ui/core';
import { node } from 'prop-types';

const TableCell = ({ children, ...rest }) => (
  <TableCellMaterial {...rest}>{children}</TableCellMaterial>
);

TableCell.displayName = 'Table.Cell';

TableCell.propTypes = {
  children: node.isRequired,
};

export default TableCell;
