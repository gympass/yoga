import React from 'react';
import { arrayOf, bool, node, oneOfType, string } from 'prop-types';
import styled from 'styled-components/native';
import { View } from 'react-native';
import Box from '../../Box';
import { Title } from './ActionRequirementStyles';
import Text from '../../Text';

const StyledActionRequirement = styled.View``;

function ActionRequirement(props) {
  const {
    title,
    description,
    children,
    checkable,
    illustration,
    list,
    titleAsTextDisplay,
  } = props;

  return (
    <StyledActionRequirement {...props}>
      {illustration && <Box>{illustration}</Box>}
      {titleAsTextDisplay ? (
        <Text.Display2>{title}</Text.Display2>
      ) : (
        <Title>{title}</Title>
      )}
      <Text mt="small" color="deep">
        {description}
      </Text>
      {list && (
        <Text mt="small" color="deep">
          <Box mt="xxxlarge">{list}</Box>
        </Text>
      )}
      {checkable && <Box mt="xxxlarge">{checkable}</Box>}
      <View>{children}</View>
    </StyledActionRequirement>
  );
}

ActionRequirement.propTypes = {
  title: oneOfType([arrayOf(node), node]).isRequired,
  children: oneOfType([arrayOf(node), node]),
  description: string.isRequired,
  checkable: oneOfType([arrayOf(node), node]),
  illustration: oneOfType([arrayOf(node), node]),
  list: oneOfType([arrayOf(node), node]),
  titleAsTextDisplay: bool,
};

ActionRequirement.defaultProps = {
  children: undefined,
  checkable: undefined,
  illustration: undefined,
  list: undefined,
  titleAsTextDisplay: false,
};

export default ActionRequirement;
