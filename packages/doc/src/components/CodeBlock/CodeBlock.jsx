import React, { useState } from 'react';
import styled from 'styled-components';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { MDXContext } from '@mdx-js/react';
import { node, string, bool } from 'prop-types';
import Highlight, { defaultProps } from 'prism-react-renderer';
import githubTheme from 'prism-react-renderer/themes/github';
import { hexToRgb } from '@gympass/yoga-common';

import CodeIcon from '../../images/code.svg';
import { CodeSandboxButton } from '..';

const defaultPropsWithTheme = {
  ...defaultProps,
  theme: githubTheme,
};

const StyledLiveError = styled(LiveError)`
  color: #ff4249;
  background-color: #fff0f0;
  padding: 15px 15px 4px;
  margin: 0;
  border-top: 1px solid #ffc8c8;
`;

const Pre = styled.pre`
  padding: 18px;
  font-size: 15px;
  margin: 0;
  border: 1px solid #e2dddd;
  border-radius: 5px;
`;

const Preview = styled.div`
  border-radius: 5px;
  border: 1px solid #e2dddd;
  overflow: hidden;
  textarea {
    outline: none;
  }
  background-color: white;
`;

const Component = styled.div`
  font-family: 'Open Sans';
  padding: 20px;

  padding: 50px 20px;

  ${({ center }) =>
    center === 'true' &&
    `
    display: flex;
    justify-content: center;
    align-items: center;
  `}
`;

const Usage = styled.div`
  background-color: rgb(246, 248, 250);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  padding: 1px;
  display: ${({ visible }) => (visible ? 'block' : 'none')};

  pre {
    border: 0;
  }
`;

const Toolbar = styled.div`
  height: 50px;
  background-color: ${hexToRgb('#f5f5fa', 0.5)};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ToolbarIconButton = styled.button`
  outline: none;
  cursor: pointer;
  width: 36px;
  height: 36px;
  border: 0;
  background-color: transparent;
  margin-right: 10px;

  svg {
    width: 100%;
    height: 100%;
    path {
      fill: #999;
    }
  }

  &:hover {
    svg {
      path {
        fill: #f78d82;
      }
    }
  }
`;

const CodeBlock = ({ children, reactLive, center }) => {
  const [codeVisible, setCodeVisible] = useState(false);
  const normalizedCodeExample = children.trim();
  const importsRegex = /(?<=\<)([A-Z][A-Za-z]+)\s*\/?(?=\>?)/g;
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
            </Toolbar>

            <Component center={center}>
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
