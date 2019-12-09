import { useEffect } from 'react';
import { string } from 'prop-types';
import { navigate } from 'gatsby';

const Redirect = ({ url }) => {
  useEffect(() => {
    navigate(url);
  });
  return null;
};

Redirect.propTypes = {
  url: string.isRequired,
};

export default Redirect;
