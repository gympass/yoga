import React, { useContext } from 'react';
import styled from 'styled-components';
import { hexToRgb } from '@gympass/yoga-common';

import CodeIcon from 'images/code.svg';
import MoonVector from 'images/moon.svg';

import CodeSandboxButton from './CodeSandboxButton';
import ReactLiveContext from './ReactLiveContext';

const Toolbar = styled.div`
  ${({
    theme: {
      yoga: {
        colors: { gray: grayPallete },
      },
    },
  }) => `
    align-items: center;
    background-color: ${hexToRgb(grayPallete[1], 0.5)};
    display: flex;
    height: 50px;
    justify-content: center;
  `};
`;

const ToolbarIconButton = styled.button`
  ${({
    theme: {
      yoga: {
        colors: { primary: primaryPallete, gray: grayPallete },
      },
    },
  }) => `
    background-color: transparent;
    border: 0;
    cursor: pointer;
    height: 32px;
    margin-right: 10px;
    outline: none;
    width: 32px;

    svg {
      width: 100%;
      height: 100%;

      path {
        fill: ${grayPallete[7]};
      }

      &:hover {
        path {
          fill: ${primaryPallete[3]};
        }
      }
    }
  `}
`;

const Moon = styled(MoonVector)`
  ${({ 'data-darkmode': darkMode }) => `
    path[mode="dark"]{
      display: ${darkMode ? 'none' : 'block'};
    }
  `}
`;

const CodeToolbar = () => {
  const { codeVisible, setCodeVisible, darkMode, setDarkMode } = useContext(
    ReactLiveContext,
  );

  return (
    <Toolbar>
      <ToolbarIconButton title="Open in CodeSandbox">
        <CodeSandboxButton />
      </ToolbarIconButton>

      <ToolbarIconButton
        title="Show code"
        onClick={() => setCodeVisible(!codeVisible)}
      >
        <CodeIcon />
      </ToolbarIconButton>

      <ToolbarIconButton
        title="Change background"
        onClick={() => setDarkMode(!darkMode)}
      >
        <Moon data-darkmode={darkMode} />
      </ToolbarIconButton>
    </Toolbar>
  );
};

export default CodeToolbar;
