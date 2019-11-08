import React, { useState } from 'react';
import CodeSandboxIcon from '../../images/codesandbox.svg';
import LoadingIcon from '../../images/loading.svg';

import { URL, setOptions } from './code';

const CodeSandboxButton = ({ code }) => {
  const [loading, setLoading] = useState(false);

  const createSandbox = () => {
    setLoading(true);
    fetch(URL, setOptions(code))
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
