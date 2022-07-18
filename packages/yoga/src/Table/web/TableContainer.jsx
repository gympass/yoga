import React from 'react';

import { TableContainer as TableContainerMaterial } from '@material-ui/core';
import { node } from 'prop-types';

const TableContainer = ({ children, ...rest }) => (
  <TableContainerMaterial {...rest}>{children}</TableContainerMaterial>
);

TableContainer.displayName = 'Table.Container';

TableContainer.propTypes = {
  children: node.isRequired,
};
export default TableContainer;
