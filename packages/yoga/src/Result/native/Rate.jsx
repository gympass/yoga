import React from 'react';
import styled from 'styled-components';
import { string } from 'prop-types';
import { StarFilled } from '@gympass/yoga-icons';
import Icon from '../../Icon';
import Text from '../../Text';

const Content = styled.View`
  display: flex;
  flex-direction: row;
  margin-left: 10px;
  align-items: center;
`;

const RateValue = styled(Text.Overline)`
  ${({
    theme: {
      yoga: {
        spacing: { xxxsmall },
      },
    },
  }) => {
    return `
      margin-left: ${xxxsmall}px;
    `;
  }}
`;

const Rate = ({ rate }) => (
  <Content>
    <Icon as={StarFilled} fill="deep" width="xsmall" height="xsmall" />
    <RateValue variant="deep">{rate}</RateValue>
  </Content>
);

Rate.propTypes = {
  rate: string.isRequired,
};

export default Rate;
