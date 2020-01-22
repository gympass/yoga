import React, { useState, useContext } from 'react';
import CodeSandboxIcon from 'images/codesandbox.svg';
import LoadingIcon from 'images/loading.svg';
import ReactLiveContext from './ReactLiveContext';
import { URL, setOptions } from './sandboxConfig';

const CodeSandboxButton = () => {
  const [loading, setLoading] = useState(false);
  const { imports, code } = useContext(ReactLiveContext);

  const sandbox = [imports, code];

  const createSandbox = () => {
    setLoading(true);
    fetch(URL, setOptions(sandbox))
      .then(x => x.json())
      .then(data =>
        window.open(
          `https://codesandbox.io/embed/${data.sandbox_id}?fontsize=14&hidenavigation=1`,
          '_blank',
        ),
      )
      .then(() => setLoading(false));
  };

  return (
    <>
      {loading ? (
        <LoadingIcon />
      ) : (
        <CodeSandboxIcon onClick={() => createSandbox()} />
      )}
    </>
  );
};

export default CodeSandboxButton;
