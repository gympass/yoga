/* eslint-disable no-undef */
import React, { useState } from 'react';
import * as YogaComponents from '@gympass/yoga';
import { string } from 'prop-types';

import styled from 'styled-components';

const ButtonCopy = styled(YogaComponents.Button)`
  height: 100%;
`;

const Clipboard = ({ copyText }) => {
  const [isCopied, setIsCopied] = useState(false);

  async function CopyTextToClipboard(text) {
    const textToCopy = await navigator.clipboard.writeText(text);

    return textToCopy;
  }

  const hnadleCopyClick = () => {
    CopyTextToClipboard(copyText)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 1500);
      })
      .catch(error => {
        throw new Error(error);
      });
  };

  return (
    <YogaComponents.Box>
      <ButtonCopy onClick={hnadleCopyClick}>
        {isCopied ? 'Copied!' : 'Copy'}
      </ButtonCopy>
    </YogaComponents.Box>
  );
};

Clipboard.propTypes = {
  copyText: string,
};

Clipboard.defaultProps = {
  copyText: undefined,
};

export default Clipboard;
