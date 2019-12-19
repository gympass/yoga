import React from 'react';
import { oneOf } from 'prop-types';
import styled, { css } from 'styled-components';

const StyledText = styled.Text`
  ${({
    level,
    theme: {
      yoga: {
        components: { text },
      },
    },
  }) => css`
    margin: 0;
    padding: 0;

    font-size: ${text.size[level]}px;
    line-height: ${text.height[level]}px;
    font-weight: ${text.weight[level]};
  `}
`;

const semantic = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  p: 'p',
  small: 'p',
  tiny: 'p',
};

const Text = ({ level, ...rest }) => (
  <StyledText level={level} as={semantic[`${level}`]} {...rest} />
);

Text.propTypes = {
  level: oneOf(['h1', 'h2', 'h3', 'h4', 'p', 'small', 'tiny']).isRequired,
};

Text.displayName = 'Text';

export default Text;
