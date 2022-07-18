import React from 'react';
import { TableFooter as TableFooterMaterial } from '@material-ui/core';
import { node } from 'prop-types';

const TableFooter = ({ children, ...rest }) => (
  <TableFooterMaterial {...rest}>{children}</TableFooterMaterial>
);

TableFooter.displayName = 'Table.Footer';

TableFooter.propTypes = {
  children: node.isRequired,
};

export default TableFooter;
