import React from 'react';
import { ChevronUp } from '@gympass/yoga-icons';

import { TableSortLabel as TableSortLabelMaterial } from '@material-ui/core';
import { node } from 'prop-types';

const TableSortLabel = ({ children, ...rest }) => (
  <TableSortLabelMaterial IconComponent={ChevronUp} {...rest}>
    {children}
  </TableSortLabelMaterial>
);

TableSortLabel.propTypes = {
  children: node.isRequired,
};

TableSortLabel.displayName = 'Table.SortLabel';

export default TableSortLabel;
