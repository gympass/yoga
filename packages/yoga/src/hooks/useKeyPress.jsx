import { useEffect, useState } from 'react';

export const useKeyPress = targetKey => {
  const [keyPressed, setKeyPressed] = useState(false);

  useEffect(() => {
    function downHandler({ key }) {
      if (key === targetKey) {
        setKeyPressed(true);
      }
    }
    function upHandler({ key }) {
      if (key === targetKey) {
        setKeyPressed(false);
      }
    }
    window.addEventListener('keydown', downHandler);
    window.addEventListener('keyup', upHandler);

    return () => {
      window.removeEventListener('keydown');
      window.removeEventListener('keyup');
    };
  }, [targetKey]);

  return keyPressed;
};
