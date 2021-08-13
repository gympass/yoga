import React, { useEffect, useState } from 'react';
import styled, { withTheme } from 'styled-components';
import { node, string, func, bool } from 'prop-types';
import {
  Animated,
  TouchableWithoutFeedback,
  Easing,
  Modal,
} from 'react-native';

import { Text } from '../..';

const ClosableArea = styled(Animated.View)`
  ${({
    theme: {
      yoga: { colors },
    },
  }) => `
    position: relative;
    width: 100%;
    height: 100%;

    background-color: ${colors.text.primary};
  `}
`;

const ContentWrapper = styled(Animated.View)`
  position: absolute;
  justify-content: flex-end;

  width: 100%;
`;

const Content = styled.View`
  ${({
    theme: {
      yoga: {
        components: { dropdown },
      },
    },
  }) => `
    justify-content: center;
    width: 100%;

    background-color: ${dropdown.backdrop.content.backgroundColor};
    border-top-left-radius: ${dropdown.backdrop.content.border.radius.topLeft}px;
    border-top-right-radius: ${dropdown.backdrop.content.border.radius.topRight}px;
  `}
`;

const Title = styled(Text.Bold)`
  ${({
    theme: {
      yoga: {
        components: { dropdown },
      },
    },
  }) => `
    width: 100%;
    padding:
      ${dropdown.backdrop.content.title.padding.top}px
      ${dropdown.backdrop.content.title.padding.right}px
      ${dropdown.backdrop.content.title.padding.bottom}px
      ${dropdown.backdrop.content.title.padding.left}px;

    font-size: ${dropdown.backdrop.content.title.font.size}px;

    text-align: center;
  `}
`;

const Backdrop = ({
  visible,
  title,
  children,
  onClose,
  theme: {
    yoga: {
      transition,
      components: { dropdown },
    },
  },
  ...props
}) => {
  const [isOpen, toggleIsOpen] = useState(visible);
  const [backgroundAnimation] = useState(new Animated.Value(0));
  const [contentAnimation] = useState(
    new Animated.Value(-dropdown.backdrop.content.height),
  );

  const animate = (animation, toValue) =>
    Animated.timing(animation, {
      toValue,
      duration: transition.duration[0],
      easing: Easing.out(Easing.ease),
      useNativeDriver: false,
    }).start(() => !visible && toggleIsOpen(false));

  useEffect(() => {
    if (visible) toggleIsOpen(true);
    animate(backgroundAnimation, visible ? 0.5 : 0);
    animate(contentAnimation, visible ? 0 : -dropdown.backdrop.content.height);
  }, [visible]);

  return (
    isOpen && (
      <Modal {...props} transparent animationType="none">
        <TouchableWithoutFeedback onPress={onClose}>
          <ClosableArea style={{ opacity: backgroundAnimation }} />
        </TouchableWithoutFeedback>
        <ContentWrapper style={{ bottom: contentAnimation }}>
          <Content>
            {title && <Title>{title}</Title>}
            {children}
          </Content>
        </ContentWrapper>
      </Modal>
    )
  );
};

Backdrop.propTypes = {
  visible: bool,
  title: string,
  children: node.isRequired,
  onClose: func,
};

Backdrop.defaultProps = {
  visible: false,
  title: null,
  onClose: () => {},
};

export default withTheme(Backdrop);
