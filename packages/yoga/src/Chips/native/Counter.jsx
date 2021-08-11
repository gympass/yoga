import React from 'react';
import styled from 'styled-components';
import { number, oneOfType, string } from 'prop-types';

import { theme } from '../../Theme';
import Text from '../../Text';

const Wrapper = styled(Text.Medium)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  height: 16px;
  min-width: 16px;

  padding-right: 5px;
  padding-left: 5px;
  margin-left: ${theme.spacing.xxxsmall}px;

  color: ${theme.colors.white};
  font-size: ${theme.fontSizes.xsmall}px;
  line-height: ${theme.lineHeights.xsmall}px;

  border-radius: ${theme.radii.small}px;
  background-color: ${theme.colors.primary};

  overflow: hidden;
`;

const Counter = ({ value }) => (
  <Wrapper>{Number(value) > 999 ? '+999' : value}</Wrapper>
);

Counter.propTypes = {
  value: oneOfType([number, string]).isRequired,
};

export default Counter;
