import React from 'react';
import {
  arrayOf,
  number,
  shape,
  bool,
  func,
  oneOfType,
  node,
} from 'prop-types';
import styled from 'styled-components';

import Text from '../../Text';
import Icon from '../../Icon';

const Container = styled.Text`
  max-width: 288px;
  text-align-vertical: center;
`;

const Wrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;

  ${({
    theme: {
      yoga: {
        spacing: { xxxsmall },
      },
    },
  }) => `
    margin-top: ${xxxsmall}px;
  `}
`;
const IconWrapper = styled.View`
  ${({
    theme: {
      yoga: {
        spacing: { small },
      },
    },
  }) => `
    width: ${small}px;
    height: ${small}px;
  `}
`;

const Separator = styled.View`
  ${({
    theme: {
      yoga: {
        spacing: { xxxsmall },
      },
    },
  }) => `
    width: ${xxxsmall}px;
    height: ${xxxsmall}px;
  `}
`;

const StyledText = styled(Text.Small)`
  ${({
    variant,
    theme: {
      yoga: {
        colors: { [variant]: color },
        spacing: { xxxsmall },
      },
    },
  }) => `
    color: ${color};
    margin-left: ${xxxsmall}px;
    margin-right: ${xxxsmall}px;
  `}
`;

const ResultDetails = ({ items, limit, dots, renderItem: Item }) => {
  const refinedList = limit !== 0 ? items.slice(0, limit) : items;

  return (
    <Wrapper>
      <Container numberOfLines={1}>
        {items &&
          refinedList.map(
            ({ icon: IconComponent, variant, ...props }, index) => {
              const isLastItem = index === refinedList.length - 1;
              const showNumbersOfItemsLeft = isLastItem && limit !== 0;
              const numberOfItemsLeft = items.length - limit;

              return (
                <>
                  {IconComponent && (
                    <IconWrapper>
                      <Icon
                        as={IconComponent}
                        fill={variant}
                        width={14}
                        height={14}
                        style={{ marginTop: 3 }}
                      />
                    </IconWrapper>
                  )}
                  <Item variant={variant} {...props} />

                  {!isLastItem &&
                    (dots ? (
                      <>
                        <Separator />
                        <StyledText variant={variant}>•</StyledText>
                        <Separator />
                      </>
                    ) : (
                      <Separator />
                    ))}

                  {showNumbersOfItemsLeft && (
                    <>
                      <Separator />
                      <StyledText variant={variant}>
                        + {numberOfItemsLeft.toString().padStart(2, '0')}
                      </StyledText>
                      <Separator />
                    </>
                  )}
                </>
              );
            },
          )}
      </Container>
    </Wrapper>
  );
};

ResultDetails.displayName = 'Result.Details';

ResultDetails.propTypes = {
  items: arrayOf(shape({})),
  limit: number,
  dots: bool,
  renderItem: oneOfType([node, func]),
};

ResultDetails.defaultProps = {
  items: [],
  limit: 0,
  dots: false,
  renderItem: Text.Small,
};

export default ResultDetails;
