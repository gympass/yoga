import { arrayOf, node, oneOf, oneOfType, string, bool } from 'prop-types';
import React from 'react';

import { Attention, Delayed, Information, Success } from '@gympass/yoga-icons';
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
  Caption,
} from './StyledFeedback';

const ICON_SIZE = 64;
const VARIANT_ICONS = {
  success: {
    as: Success,
  },
  informative: {
    as: Information,
  },
  attention: {
    as: Attention,
  },
  delayed: {
    as: Delayed,
  },
};

function isChildFromComponent(child, component) {
  return child.type.displayName === component.displayName;
}

function Feedback({ variant, title, description, children, center, ...props }) {
  const iconProps = VARIANT_ICONS[variant];
  let primaryButton;
  let secondaryButton;
  let captionElement;
  let titleElement = <Title>{title}</Title>;

  function defineCompoundComponents() {
    React.Children.forEach(children, child => {
      if (isChildFromComponent(child, PrimaryButton)) primaryButton = child;
      if (isChildFromComponent(child, SecondaryButton)) secondaryButton = child;
      if (isChildFromComponent(child, Title)) titleElement = child;
      if (isChildFromComponent(child, Caption)) captionElement = child;
    });
  }

  defineCompoundComponents();

  return (
    <Box
      display="flex"
      alignItems="flex-end"
      bg="white"
      width="100%"
      {...(center && {
        ph: 'medium',
        pv: 'xxlarge',
        minHeight: '100%',
      })}
    >
      <Content {...props}>
        <Icon
          {...iconProps}
          size={ICON_SIZE}
          mb="large"
          data-testid={`feedback-icon-${variant}`}
        />
        <TextContainer>
          {titleElement}
          <Text.Body1 mt="small" color="deep" as="h1">
            {description}
          </Text.Body1>
        </TextContainer>

        {captionElement ? <Box mt="medium">{captionElement}</Box> : null}

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
  /** Center the component vertically */
  center: bool,
};

Feedback.defaultProps = {
  title: undefined,
  children: undefined,
  center: true,
};

export default Feedback;
