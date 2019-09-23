import React from 'react';
import PropTypes from 'prop-types';
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer';

const Doc = ({ mdx }) => (
  <div>
    <MDXRenderer>{mdx}</MDXRenderer>
  </div>
);

Doc.propTypes = {
  children: PropTypes.node,
};

export default Doc;
