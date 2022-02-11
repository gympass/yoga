/* eslint-disable no-undef */
import React, { useState } from 'react';
import { Button, Box } from '@gympass/yoga';
import { string } from 'prop-types';

import styled from 'styled-components';

const ButtonCopy = styled(Button.Link)`
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
    <Box position="absolute" top="20px" right="25px">
      <ButtonCopy onClick={hnadleCopyClick}>
        {isCopied ? 'Copied!' : 'Copy'}
      </ButtonCopy>
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
