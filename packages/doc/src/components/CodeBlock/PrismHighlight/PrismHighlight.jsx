import React from 'react';
import { string, bool } from 'prop-types';
import Highlight, { defaultProps } from 'prism-react-renderer';
import githubTheme from 'prism-react-renderer/themes/github';
import styled from 'styled-components';
import { LiveEditor } from 'react-live';

const defaultPropsWithTheme = {
  ...defaultProps,
  theme: githubTheme,
};

const Pre = styled.pre`
  ${({
    bordered,
    theme: {
      yoga: {
        colors: { primary: primaryPallete, gray: grayPallete },
      },
    },
  }) => `
    border-radius: 5px;
    font-size: 15px;
    margin: 0;
    padding: 18px;

    .token.string {
      color: ${primaryPallete[3]} !important;
    }

    overflow: auto;
    ${bordered ? `border: 1px solid ${grayPallete[3]};` : ''}

    @media (max-width: 900px) {
      font-size: 12px;
    }
  `}
`;

const PrismHighlight = ({ code, liveEditor }) => (
  <Highlight {...defaultPropsWithTheme} code={code} language="jsx">
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

PrismHighlight.propTypes = {
  code: string.isRequired,
  liveEditor: bool,
};

PrismHighlight.defaultProps = {
  liveEditor: false,
};

export default PrismHighlight;
