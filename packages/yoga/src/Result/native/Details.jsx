import React from 'react';
import {
  arrayOf,
  number,
  shape,
  bool,
  func,
  oneOfType,
  node,
  string,
} from 'prop-types';
import styled from 'styled-components';

import Text from '../../Text';
import Icon from '../../Icon';

const Container = styled.Text`
  text-align-vertical: center;
  flex: 1;
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

const ResultDetails = ({
  items,
  limit,
  limitLabel,
  dots,
  renderItem: Item,
}) => {
  const refinedList = limit !== 0 ? items.slice(0, limit) : items;

  return (
    <Wrapper>
      <Container numberOfLines={1}>
        {items &&
          refinedList?.map(
            ({ icon: IconComponent, variant, ...props }, index) => {
              const isLastItem = index === refinedList.length - 1;
              const showNumbersOfItemsLeft =
                isLastItem && limit !== 0 && limit < items.length - 1;
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
                        {limitLabel !== '' && ` ${limitLabel}`}
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
  /** Items to render in the component.For example:
   * items = {[
            {
              children : "Children here"
              icon ={<Icon/>}
            }
        ]}
   * */
  items: arrayOf(shape({})),
  /** If has limit of items to show in component.Other with show with + 4 for example
   * */
  limit: number,
  /** If is necessary show a label after the limit.Example + 4 activities */
  limitLabel: string,
  /** If shows the dot separator between the itens */
  dots: bool,
  /** The component that is necessary to render the item of the list.
   * Can send like this
   * renderItem={({children,icon})=>(
          <Text.Small>
            {children}
          </Text.Small>
        )}
   or
   renderItem={Text.Small}
   * */
  renderItem: oneOfType([node, func]),
};

ResultDetails.defaultProps = {
  items: [],
  limit: 0,
  limitLabel: '',
  dots: false,
  renderItem: Text.Small,
};

export default ResultDetails;
