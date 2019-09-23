import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Doc = ({ children }) => <div>{children}</div>;

Doc.propTypes = {
  children: PropTypes.node,
};

export default Doc;
