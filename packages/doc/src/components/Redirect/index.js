import { useEffect } from 'react';
import { navigate } from 'gatsby';

const Redirect = ({ url }) => {
  useEffect(() => {
    navigate(url);
  }, []);
  return null;
};

export default Redirect;
