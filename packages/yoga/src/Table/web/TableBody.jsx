import React from 'react';
import { TableBody as TableBodyMaterial } from '@material-ui/core';
import { node } from 'prop-types';

const TableBody = ({ children, ...rest }) => (
  <TableBodyMaterial {...rest}>{children}</TableBodyMaterial>
);

TableBody.displayName = 'Table.Body';

TableBody.propTypes = {
  children: node.isRequired,
};

export default TableBody;
