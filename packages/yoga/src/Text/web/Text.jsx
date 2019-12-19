import React from 'react';
import { oneOf } from 'prop-types';
import styled from 'styled-components';

const StyledText = styled.span`
  ${({
    level,
    theme: {
      yoga: {
        components: {
          text: { [level]: heading = {} },
        },
      },
    },
  }) => `
    margin: 0;
    padding: 0;

    font-size: ${heading.fontsize}px;
    line-height: ${heading.lineHeight}px;
    font-weight: ${heading.fontWeight};
  `}
`;

const Text = ({ as, ...rest }) => (
  <StyledText
    level={as}
    as={['small', 'tiny'].includes(as) ? 'p' : as}
    {...rest}
  />
);

Text.propTypes = {
  as: oneOf(['h1', 'h2', 'h3', 'h4', 'p', 'small', 'tiny']).isRequired,
};

Text.displayName = 'Text';

export default Text;
