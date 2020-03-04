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

  width: ${width};
  height: ${height};
  flex: 1;
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

    background: ${colors.dark};
  `}
`;

const ContentWrapper = styled(Animated.View)`
  position: absolute;
  justify-content: flex-end;
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

    width: ${width};
    min-height: ${dropdown.backdrop.content.minHeight}px;

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
  const [isRendered, setIsRendered] = useState(visible);
  const [backgroundAnimation] = useState(new Animated.Value(0));
  const [contentAnimation] = useState(
    new Animated.Value(-dropdown.backdrop.content.minHeight),
  );

  const animate = (animation, toValue) =>
    Animated.timing(animation, {
      toValue,
      duration: transition.duration[1],
      easing: Easing.out(Easing.ease),
    }).start(() => !visible && setIsRendered(false));

  useEffect(() => {
    if (visible) setIsRendered(true);
    animate(backgroundAnimation, visible ? 0.5 : 0);
    animate(
      contentAnimation,
      visible ? 70 : -dropdown.backdrop.content.minHeight,
    );
  }, [visible]);

  return (
    isRendered && (
      <BackdropStyled {...props}>
        <TouchableWithoutFeedback onPress={() => onClose()}>
          <ClosableArea style={{ opacity: backgroundAnimation }} />
        </TouchableWithoutFeedback>
        <ContentWrapper style={{ bottom: contentAnimation }}>
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
