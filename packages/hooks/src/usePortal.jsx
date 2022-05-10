/* eslint-disable no-shadow */
import React from 'react';
import ReactDOM from 'react-dom';

const usePortal = el => {
  const [portal, setPortal] = React.useState({
    render: () => null,
    remove: () => null,
  });

  const createPortal = React.useCallback(el => {
    const Portal = ({ children }) => ReactDOM.createPortal(children, el);
    const remove = () => ReactDOM.unmountComponentAtNode(el);

    return { render: Portal, remove };
  }, []);

  React.useEffect(() => {
    if (el) portal.remove();
    const newPortal = createPortal(el);

    setPortal(newPortal);
    return () => newPortal.remove(el);
  }, [el]);

  return portal.render;
};

export default usePortal;
