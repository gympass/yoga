import { useRef, useEffect } from 'react';

/**
 * Creates DOM element to be used as React root.
 * @returns {HTMLElement}
 */
const createRootElement = id => {
  const rootContainer = document.createElement('div');

  rootContainer.setAttribute('id', id);
  return rootContainer;
};

/**
 * Appends element as last child of body.
 * @param {HTMLElement} rootElement
 */
const addRootElement = rootElement => {
  document.body.insertBefore(
    rootElement,
    document.body.lastElementChild.nextElementSibling,
  );
};

const usePortal = id => {
  const rootElementRef = useRef(null);

  useEffect(() => {
    // Look for existing target dom element to append to
    const existingParent = document.getElementById(id);
    // Parent is either a new root or the existing dom element
    const parentElem = existingParent || createRootElement(id);

    // If there is no existing DOM element, add a new one.
    if (!existingParent) {
      addRootElement(parentElem);
    }

    // Add the detached element to the parent
    parentElem.appendChild(rootElementRef.current);

    return function removeElement() {
      rootElementRef.current.remove();
      if (!parentElem.childElementCount) {
        parentElem.remove();
      }
    };
  }, [id]);

  const getRootElemement = () => {
    if (!rootElementRef.current) {
      rootElementRef.current = document.createElement('div');
    }
    return rootElementRef.current;
  };

  return getRootElemement();
};

export default usePortal;
