import { arrayOf, bool, func, shape, string } from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { ArrowLeft } from '@gympass/yoga-icons';
import Box from '../../Box';
import Text from '../../Text';
import Button from '../../Button';
import Icon from '../../Icon';
import TitleContainer from './TitleContainer';

const HeadingContainer = styled(Box)`
  ${({
    theme: {
      yoga: {
        components: { heading },
      },
    },
  }) => `
    padding: ${heading.paddingTop}px ${heading.paddingRight}px ${heading.paddingBottom}px ${heading.paddingLeft}px;
`}
`;

const SubContainer = styled(Box)``;
const RightIconContainer = styled(Box)``;

const RightIcon = styled(Button.Link)`
  ${({
    isFirst,
    theme: {
      yoga: {
        components: { heading },
      },
    },
  }) => `
  padding-left: ${isFirst ? heading.rightIcons.paddingLeft : 0}px;
`}
`;
const PageTitle = styled(Text.Small)``;

const Heading = props => {
  const {
    backButton,
    pageTitle,
    rightIcons,
    title,
    subtitle,
    avatar,
    smallAvatar,
  } = props;

  return (
    <HeadingContainer w="100%">
      <SubContainer
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
      >
        {backButton && (
          <Button.Link onPress={backButton.onPress}>
            <Icon
              as={ArrowLeft}
              width="medium"
              height="medium"
              fill="primary"
            />
          </Button.Link>
        )}
        <PageTitle>{pageTitle}</PageTitle>
        <RightIconContainer flexDirection="row">
          {rightIcons &&
            rightIcons.map((rightIcon, index) => (
              <RightIcon
                onPress={rightIcon.onPress}
                isFirst={index === 0}
                key={rightIcon.key}
              >
                <Icon
                  as={rightIcon.icon}
                  width="medium"
                  height="medium"
                  fill="primary"
                />
              </RightIcon>
            ))}
        </RightIconContainer>
      </SubContainer>
      {title && (
        <TitleContainer
          title={title}
          subtitle={subtitle}
          avatar={avatar}
          smallAvatar={smallAvatar}
        />
      )}
    </HeadingContainer>
  );
};

Heading.propTypes = {
  /** Add a back button to header */
  backButton: shape({
    onPress: func,
  }),
  /** Add a array with icons on right of header */
  rightIcons: arrayOf(
    shape({
      icon: func,
      onPress: func,
      key: string,
    }),
  ),
  /** Add a page title in header */
  pageTitle: string,
  /** Add a extra title in heading */
  title: string,
  /** Add a subtitle */
  subtitle: string,
  /** Add a avatar image */
  avatar: string,
  /** Change between a small or a large avatar */
  smallAvatar: bool,
};

Heading.defaultProps = {
  backButton: null,
  rightIcons: [],
  pageTitle: null,
  title: null,
  subtitle: null,
  avatar: null,
  smallAvatar: false,
};

export default Heading;
