/* eslint-disable no-undef */
import React, { useState } from 'react';
import { Button, Box } from '@gympass/yoga';
import { string } from 'prop-types';

import { CheckedFull, Copy } from '@gympass/yoga-icons/src';

const Clipboard = ({ copyText }) => {
  const [isCopied, setIsCopied] = useState(false);

  async function copyTextToClipboard(text) {
    const textToCopy = await navigator.clipboard.writeText(text);

    return textToCopy;
  }

  const handleCopyClick = async () => {
    await copyTextToClipboard(copyText);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1500);
  };

  return (
    <Box position="absolute" top="5px" right="5px">
      {isCopied ? (
        <Button.Icon icon={CheckedFull} small />
      ) : (
        <Button.Icon icon={Copy} small onClick={handleCopyClick} />
      )}
    </Box>
  );
};

Clipboard.propTypes = {
  copyText: string,
};

Clipboard.defaultProps = {
  copyText: undefined,
};

export default Clipboard;
