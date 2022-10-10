import React from 'react';
import { arrayOf, node, oneOfType, string } from 'prop-types';
import styled from 'styled-components';
import { media } from '@gympass/yoga-helpers';
import {
  Actions,
  Title,
  PrimaryButton,
  SecondaryButton,
} from './ActionRequirementStyles';
import Text from '../../Text';
import Box from '../../Box';

const StyledActionRequirement = styled.div`
  display: flex;
  height: 100%;
  ${media.xxs`
    flex-direction: column;
  `}
  ${media.lg`
    flex-direction: row-reverse;
  `}
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${media.xxs`
    width: auto;
    margin-right: 0;
  `}

  ${media.lg`
    width: 520px;
    margin-right: 120px;
  `}
`;

const BoxIllustration = styled(Box)`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function isChildFromComponent(child, component) {
  return child.type.displayName === component.displayName;
}

function ActionRequirement(props) {
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
      {illustration && <BoxIllustration>{illustration}</BoxIllustration>}

      <Content>
        <Title>{title}</Title>
        <Text mt="small" color="deep">
          {description}
        </Text>
        {list && (
          <Text mt="large" color="deep">
            <Box>{list}</Box>
          </Text>
        )}
        {checkable && <Box mt="xxlarge">{checkable}</Box>}
        <Actions mt="xlarge">
          {primaryButton}
          {secondaryButton}
        </Actions>
      </Content>
    </StyledActionRequirement>
  );
}

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
