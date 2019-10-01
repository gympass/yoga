import React from 'react';
import styled from 'styled-components';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { MDXContext } from '@mdx-js/react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import githubTheme from 'prism-react-renderer/themes/github';

const BORDER_COLOR = '#e2dddd';

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
  border: 1px solid ${BORDER_COLOR};
  border-radius: 5px;

  textarea {
    outline: none;
  }
`;

const Component = styled.div`
  padding: 20px;
`;

const Usage = styled.div`
  background-color: rgb(246, 248, 250);
  border-top: 1px solid ${BORDER_COLOR};
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  padding: 1px;

  pre {
    border: 0;
  }
`;

const CodeBlock = ({ children, reactLive }) => {
  const normalizedCodeExample = children.trim();
  return reactLive ? (
    <MDXContext.Consumer>
      {scope => (
        <LiveProvider
          code={normalizedCodeExample}
          scope={scope}
          theme={githubTheme}
        >
          <Preview>
            <Component>
              <LivePreview />
            </Component>

            <Usage>
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

export default CodeBlock;
