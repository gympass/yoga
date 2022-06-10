/* eslint-disable no-undef */
import React, { useState, useRef } from 'react';
import { Button, Box } from '@gympass/yoga';
import { string } from 'prop-types';

import { CheckedFull, Copy } from '@gympass/yoga-icons/src';

const Clipboard = ({ copyText }) => {
  const [isCopied, setIsCopied] = useState(false);
  const timeoutRef = useRef();

  async function copyTextToClipboard(text) {
    const textToCopy = await navigator.clipboard.writeText(text);

    return textToCopy;
  }

  const handleCopyClick = async () => {
    await copyTextToClipboard(copyText);
    setIsCopied(true);
    timeoutRef.current = setTimeout(() => {
      setIsCopied(false);
    }, 1500);

    return () => clearTimeout(timeoutRef.current);
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
