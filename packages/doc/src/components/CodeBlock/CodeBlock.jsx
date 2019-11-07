import React, { useState } from 'react';
import styled from 'styled-components';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { MDXContext } from '@mdx-js/react';
import { node, string } from 'prop-types';
import Highlight, { defaultProps } from 'prism-react-renderer';
import { hexToRgb } from '@gympass/yoga-common';
import githubTheme from 'prism-react-renderer/themes/github';

import { CodeSandboxButton } from '..';
import CodeIcon from '../../images/code.svg';
import MoonVector from '../../images/moon.svg';

const defaultPropsWithTheme = {
  ...defaultProps,
  theme: githubTheme,
};

const StyledLiveError = styled(LiveError)`
  background-color: #fff0f0;
  color: #ff4249;
  margin: 0;
  padding: 15px 15px 4px;
`;

const Pre = styled.pre`
  ${({
    theme: {
      colors: { primary: primaryPallete },
    },
  }) => `
    border-radius: 5px;
    font-size: 15px;
    margin: 0;
    padding: 18px;

    .token.string {
      color: ${primaryPallete[3]} !important;
    }
  `}
`;

const Preview = styled.div`
  ${({
    theme: {
      colors: { gray: grayPallete },
    },
  }) => `
    background-color: ${grayPallete[0]};
    border-radius: 5px;
    border: 1px solid ${grayPallete[2]};
    overflow: hidden;

    textarea {
      outline: none;
    }
  `};
`;

const Component = styled.div`
  ${({
    darkMode,
    center,
    theme: {
      colors: { white, dark },
    },
  }) => `
    font-family: 'Open Sans';
    padding: 20px;
    padding: 50px 20px;
    background-color: ${darkMode ? dark : white};
    transition: all 0.3s ease-in-out;

    ${
      center
        ? `
      align-items: center;
      display: flex;
      justify-content: center;
    `
        : ''
    }
  `}
`;

const Usage = styled.div`
  ${({
    visible,
    theme: {
      colors: { gray: grayPallete },
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
      colors: { gray: grayPallete },
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
      colors: { primary: primaryPallete, gray: grayPallete },
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
        fill: ${grayPallete[3]};
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

const CodeBlock = ({ children, reactLive, center }) => {
  const [codeVisible, setCodeVisible] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const normalizedCodeExample = children.trim();
  const importsRegex = /(?<=<)([A-Z][A-Za-z]+)(?<=\s*)\/?(?=>?)/g;
  const imports = [...new Set(normalizedCodeExample.match(importsRegex))].join(
    ', ',
  );

  const toggleCode = () => {
    setCodeVisible(!codeVisible);
  };

  const code = [imports, normalizedCodeExample];

  return reactLive ? (
    <MDXContext.Consumer>
      {scope => (
        <LiveProvider
          code={normalizedCodeExample}
          scope={scope}
          theme={githubTheme}
        >
          <Preview>
            <Toolbar>
              <ToolbarIconButton title="Open in CodeSandbox">
                <CodeSandboxButton code={code} />
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

            <Component center={center} darkMode={darkMode}>
              <LivePreview />
            </Component>

            <Usage visible={codeVisible}>
              <Highlight
                {...defaultPropsWithTheme}
                code={` import { ${imports} } from '@gympass/yoga';`}
                language="jsx"
              >
                {({
                  className,
                  style,
                  tokens,
                  getLineProps,
                  getTokenProps,
                }) => (
                  <Pre className={className} style={style}>
                    {tokens.map((line, i) => (
                      <div {...getLineProps({ line, key: i })}>
                        {line.map((token, key) => (
                          <span {...getTokenProps({ token, key })} />
                        ))}
                      </div>
                    ))}
                  </Pre>
                )}
              </Highlight>

              <Highlight
                {...defaultPropsWithTheme}
                code={children}
                language="jsx"
              >
                {({ className, style }) => (
                  <Pre className={className} style={style}>
                    <LiveEditor />
                  </Pre>
                )}
              </Highlight>

              <StyledLiveError />
            </Usage>
          </Preview>
        </LiveProvider>
      )}
    </MDXContext.Consumer>
  ) : (
    <Highlight
      {...defaultPropsWithTheme}
      code={normalizedCodeExample}
      language="jsx"
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Pre className={className} style={style}>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </Pre>
      )}
    </Highlight>
  );
};

CodeBlock.propTypes = {
  children: node.isRequired,
  reactLive: string,
  center: string,
};

CodeBlock.defaultProps = {
  reactLive: undefined,
  center: 'false',
};

export default CodeBlock;
