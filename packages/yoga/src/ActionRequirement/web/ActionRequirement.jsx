import React from 'react';
import { arrayOf, node, oneOfType, string } from 'prop-types';
import styled from 'styled-components';
import {
  Actions,
  Title,
  PrimaryButton,
  SecondaryButton,
} from './ActionRequirementStyles';
import Text from '../../Text';
import Box from '../../Box';

const StyledActionRequirement = styled.div``;

function isChildFromComponent(child, component) {
  return child.type.displayName === component.displayName;
}

const ActionRequirement = props => {
  const { title, description, children, checkable, illustration, list } = props;

  let primaryButton;
  let secondaryButton;

  function defineCompoundComponents() {
    React.Children.forEach(children, child => {
      if (isChildFromComponent(child, PrimaryButton)) primaryButton = child;
      if (isChildFromComponent(child, SecondaryButton)) secondaryButton = child;
    });
  }

  defineCompoundComponents();
  return (
    <StyledActionRequirement {...props}>
      {illustration && <Box>{illustration}</Box>}
      <Title>{title}</Title>
      <Text mt="small" color="deep">
        {description}
      </Text>
      <Text mt="small" color="deep">
        {list && <Box mt="xxxlarge">{list}</Box>}
      </Text>
      {checkable && <Box mt="xxxlarge">{checkable}</Box>}
      <Actions mt="xlarge">
        {primaryButton}
        {secondaryButton}
      </Actions>
    </StyledActionRequirement>
  );
};

ActionRequirement.propTypes = {
  title: string.isRequired,
  children: oneOfType([arrayOf(node), node]),
  description: string.isRequired,
  checkable: oneOfType([arrayOf(node), node]),
  illustration: oneOfType([arrayOf(node), node]),
  list: oneOfType([arrayOf(node), node]),
};

ActionRequirement.defaultProps = {
  children: undefined,
  checkable: undefined,
  illustration: undefined,
  list: undefined,
};

export default ActionRequirement;
