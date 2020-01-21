import React, { useState } from 'react';
import styled from 'styled-components';

import githubTheme from 'prism-react-renderer/themes/github';
import { LiveProvider, LiveError, LivePreview } from 'react-live';
import { MDXContext } from '@mdx-js/react';

import * as YogaComponents from '@gympass/yoga';
import { hexToRgb } from '@gympass/yoga-common';
import { CodeSandboxButton, PrismHighlight } from 'components';

import CodeIcon from 'images/code.svg';
import MoonVector from 'images/moon.svg';

const StyledLiveError = styled(LiveError)`
  background-color: #fff0f0;
  color: #ff4249;
  margin: 0;
  padding: 15px 15px 4px;
`;

const Preview = styled.div`
  ${({
    theme: {
      yoga: {
        colors: { gray: grayPallete },
      },
    },
  }) => `
    background-color: ${grayPallete[0]};
    border-radius: 5px;
    border: 1px solid ${grayPallete[3]};
    overflow: hidden;

    textarea {
      outline: none;
    }
  `};
`;

const Component = styled.div`
  ${({
    'data-center': center,
    darkMode,
    theme: {
      yoga: {
        colors: { white, dark, primary },
      },
    },
  }) => `
    font-family: 'Open Sans';
    padding: 50px;
    background-color: ${darkMode ? dark : white};
    transition: all 0.3s ease-in-out;

    ${YogaComponents.Col} {
      background-color: ${primary[1]};
      border: 1px solid;
    }

    > div {
      width: 100%;
      ${
        center === 'true'
          ? `
      align-items: center;
      display: flex;
      justify-content: center;
    `
          : ''
      }
    }

    @media (max-width: 900px) {
      padding: 20px;
    }
  `}
`;

const Usage = styled.div`
  ${({
    visible,
    theme: {
      yoga: {
        colors: { gray: grayPallete },
      },
    },
  }) => `
    background-color: ${grayPallete[0]};
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    display: ${visible ? 'block' : 'none'};
    padding: 1px;

    pre {
      border: 0;
    }
  `};
`;

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

const ReactLive = ({
  code,
  state,
  center,
  hasComponent,
  hasIcon,
  importsComponents,
  importsIcons,
  children,
}) => {
  const [codeVisible, setCodeVisible] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const sandbox = [importsComponents, importsIcons, code];

  const toggleCode = () => {
    setCodeVisible(!codeVisible);
  };

  return (
    <MDXContext.Consumer>
      {scope => (
        <LiveProvider
          code={code}
          scope={{ ...scope, useState, styled }}
          theme={githubTheme}
          noInline={state}
        >
          <Preview>
            <Toolbar>
              <ToolbarIconButton title="Open in CodeSandbox">
                <CodeSandboxButton code={sandbox} />
              </ToolbarIconButton>

              <ToolbarIconButton title="Show code" onClick={() => toggleCode()}>
                <CodeIcon />
              </ToolbarIconButton>

              <ToolbarIconButton
                title="Change background"
                onClick={() => setDarkMode(!darkMode)}
              >
                <Moon data-darkmode={darkMode} />
              </ToolbarIconButton>
            </Toolbar>

            <Component data-center={center} darkMode={darkMode}>
              <LivePreview />
            </Component>

            <Usage visible={codeVisible}>
              <PrismHighlight
                code={`${
                  JSON.parse(hasComponent)
                    ? ` import { ${importsComponents} } from '@gympass/yoga';`
                    : ''
                }
${
  JSON.parse(hasIcon)
    ? ` import { ${importsIcons} } from '@gympass/yoga-icons';`
    : ''
}`.trimRight()}
              />

              <PrismHighlight code={children} liveEditor />

              <StyledLiveError />
            </Usage>
          </Preview>
        </LiveProvider>
      )}
    </MDXContext.Consumer>
  );
};

export default ReactLive;
