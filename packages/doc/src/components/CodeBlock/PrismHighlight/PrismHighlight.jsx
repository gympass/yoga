import React, { useContext } from 'react';
import { string, bool } from 'prop-types';
import Highlight, { defaultProps } from 'prism-react-renderer';
import githubTheme from 'prism-react-renderer/themes/github';
import styled from 'styled-components';
import { LiveEditor } from 'react-live';

import CodeBlockContext from '../CodeBlockContext';

const defaultPropsWithTheme = {
  ...defaultProps,
  theme: githubTheme,
};

const Pre = styled.pre`
  ${({
    bordered,
    theme: {
      yoga: {
        colors: { primary, elements },
      },
    },
  }) => `
    border-radius: 5px;
    font-size: 15px;
    margin: 0;
    padding: 18px;

    .token.string {
      color: ${primary} !important;
    }

    overflow: auto;
    ${bordered ? `border: 1px solid ${elements.lineAndBorders};` : ''}

    @media (max-width: 900px) {
      font-size: 12px;
    }
  `}
`;

const PrismHighlight = ({ code, liveEditor }) => {
  const highlightCode = code || useContext(CodeBlockContext).code;

  return (
    <Highlight {...defaultPropsWithTheme} code={highlightCode} language="jsx">
      {({ className, style, tokens, getLineProps, getTokenProps }) =>
        liveEditor ? (
          <Pre className={className} style={style}>
            <LiveEditor />
          </Pre>
        ) : (
          <Pre
            bordered
            className={className}
            style={{
              ...style,
            }}
          >
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </Pre>
        )
      }
    </Highlight>
  );
};

PrismHighlight.propTypes = {
  liveEditor: bool,
  code: string,
};

PrismHighlight.defaultProps = {
  liveEditor: false,
  code: undefined,
};

export default PrismHighlight;
