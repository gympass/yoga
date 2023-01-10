import { arrayOf, node, oneOf, oneOfType, string } from 'prop-types';
import React from 'react';

import { CheckedFull, AlertCircle, AlertTriangle } from '@gympass/yoga-icons';
import Icon from '../../Icon';
import Box from '../../Box';
import Text from '../../Text';
import {
  Actions,
  Content,
  Title,
  PrimaryButton,
  SecondaryButton,
  TextContainer,
} from './StyledFeedback';

const ICON_SIZE = 64;
const VARIANT_ICONS = {
  success: {
    as: CheckedFull,
    fill: 'hope',
  },
  informative: {
    as: AlertCircle,
    fill: 'relax',
  },
  attention: {
    as: AlertTriangle,
    fill: 'brandingVerve',
  },
};

function isChildFromComponent(child, component) {
  return child.type.displayName === component.displayName;
}

function Feedback({ variant, title, description, testId, children }) {
  const iconProps = VARIANT_ICONS[variant];
  let primaryButton;
  let secondaryButton;
  let titleElement = <Title>{title}</Title>;

  function defineCompoundComponents() {
    React.Children.forEach(children, child => {
      if (isChildFromComponent(child, PrimaryButton)) primaryButton = child;
      if (isChildFromComponent(child, SecondaryButton)) secondaryButton = child;
      if (isChildFromComponent(child, Title)) titleElement = child;
    });
  }

  defineCompoundComponents();

  return (
    <Box
      ph="medium"
      pv="xxlarge"
      minHeight="100%"
      width="100%"
      display="flex"
      alignItems="flex-end"
      bg="white"
    >
      <Content data-testid={testId}>
        <Icon
          {...iconProps}
          size={ICON_SIZE}
          mb="large"
          testId="feedback-icon"
        />
        <TextContainer>
          {titleElement}
          <Text mt="small" color="deep">
            {description}
          </Text>
        </TextContainer>
        <Actions mt="xxxlarge">
          {primaryButton}
          {secondaryButton}
        </Actions>
      </Content>
    </Box>
  );
}

Feedback.propTypes = {
  variant: oneOf(Object.keys(VARIANT_ICONS)).isRequired,
  title: string,
  description: string.isRequired,
  children: oneOfType([arrayOf(node), node]),
  testId: string,
};

Feedback.defaultProps = {
  title: undefined,
  children: undefined,
  testId: undefined,
};

export default Feedback;
