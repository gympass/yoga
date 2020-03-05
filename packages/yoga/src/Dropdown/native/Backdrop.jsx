import React, { useEffect, useState } from 'react';
import styled, { withTheme } from 'styled-components';
import { node, string, func, bool } from 'prop-types';
import {
  Animated,
  Dimensions,
  TouchableWithoutFeedback,
  Easing,
} from 'react-native';

import { Text } from '@gympass/yoga';

const { width, height } = Dimensions.get('screen');

const BackdropStyled = styled.View`
  position: absolute;
  z-index: 1;
  flex: 1;

  width: 100%;
  height: 100%;
`;

const ClosableArea = styled(Animated.View)`
  ${({
    theme: {
      yoga: { colors },
    },
  }) => `
    position: relative;
    width: 100%;
    height: 100%;

    background-color: ${colors.dark};
  `}
`;

const ContentWrapper = styled(Animated.View)`
  position: absolute;
  justify-content: flex-end;
  bottom: 0;
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
    width: ${width}px;
    min-height: 275px;

    background-color: ${dropdown.backdrop.content.backgroundColor};
    border-top-left-radius: ${dropdown.backdrop.content.border.radius.topLeft}px;
    border-top-right-radius: ${dropdown.backdrop.content.border.radius.topRight}px;
  `}
`;

const Title = styled(Text.H4)`
  width: 100%;
  padding: 20px 0;

  text-align: center;
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
    new Animated.Value(-dropdown.backdrop.content.minHeight),
  );

  const animate = (animation, toValue) =>
    Animated.timing(animation, {
      toValue,
      duration: transition.duration[0],
      easing: Easing.out(Easing.ease),
    }).start(() => !visible && toggleIsOpen(false));

  useEffect(() => {
    if (visible) toggleIsOpen(true);
    animate(backgroundAnimation, visible ? 0.5 : 0);
    animate(contentAnimation, visible ? 320 : height);
  }, [visible]);

  return (
    isOpen && (
      <BackdropStyled {...props}>
        <TouchableWithoutFeedback onPress={() => onClose()}>
          <ClosableArea style={{ opacity: backgroundAnimation }} />
        </TouchableWithoutFeedback>
        <ContentWrapper style={{ top: contentAnimation }}>
          <Content>
            {title && <Title>{title}</Title>}
            {children}
          </Content>
        </ContentWrapper>
      </BackdropStyled>
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
