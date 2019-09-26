import React from 'react';
import styled from 'styled-components';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { MDXContext } from '@mdx-js/react';
import Highlight, { defaultProps } from 'prism-react-renderer';

const Pre = styled.pre`
  padding: 10px;
`;

const CodeBlock = ({ children, reactLive }) => {
  const normalizedCodeExample = children.trim();
  return reactLive ? (
    <MDXContext.Consumer>
      {scope => (
        <LiveProvider code={normalizedCodeExample} scope={scope}>
          <Highlight {...defaultProps} code={children}>
            {({ className, style }) => (
              <pre className={className} style={style}>
                <LiveEditor />
              </pre>
            )}
          </Highlight>
          <LiveError />
          <LivePreview />
        </LiveProvider>
      )}
    </MDXContext.Consumer>
  ) : (
    <Highlight {...defaultProps} code={normalizedCodeExample} language="jsx">
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
