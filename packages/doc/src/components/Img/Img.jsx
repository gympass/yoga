import React from 'react';
import { string, bool } from 'prop-types';

const Img = ({ src, prefix, alt, ...props }) => (
  <img src={prefix ? `/yoga${src}` : src} alt={alt} {...props} />
);

Img.propTypes = {
  src: string.isRequired,
  prefix: bool.isRequired,
  alt: string.isRequired,
};

export default Img;
