import React, { useEffect, useState } from 'react';
import { URL, setOptions } from './code';

const CodeSandbox = ({ children }) => {
  const [sandboxId, setSandboxId] = useState(null);

  useEffect(() => {
    if (!sandboxId) {
      fetch(URL, setOptions(children))
        .then(x => x.json())
        .then(data => setSandboxId(data.sandbox_id));
    }
  }, []);

  return (
    <iframe
      src={`https://codesandbox.io/embed/${sandboxId}?fontsize=14&hidenavigation=1`}
      style={{
        width: '100%',
        height: 500,
        border: 0,
        borderRadius: 4,
        overflow: 'hidden',
      }}
      title="Define API - XHR Request"
      allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
      sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
    />
  );
};

export default CodeSandbox;
