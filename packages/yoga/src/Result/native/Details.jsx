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

const Wrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const IconWrapper = styled.View`
  ${({
    theme: {
      yoga: {
        spacing: { xxxsmall },
      },
    },
  }) => `
    margin-right: ${xxxsmall}px;
  `}
`;

const Separator = styled(Text)`
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
      {items &&
        refinedList.map(({ icon: IconComponent, variant, ...props }, index) => {
          const isLastItem = index === refinedList.length - 1;
          const showNumbersOfItemsLeft = isLastItem && limit !== 0;
          const numberOfItemsLeft = items.length - limit;

          return (
            <Wrapper>
              {IconComponent && (
                <IconWrapper>
                  <Icon
                    as={IconComponent}
                    fill={variant}
                    width={14}
                    height={14}
                  />
                </IconWrapper>
              )}
              <Item variant={variant} {...props} />

              {!isLastItem &&
                (dots ? (
                  <Separator variant={variant}>•</Separator>
                ) : (
                  <Separator />
                ))}

              {showNumbersOfItemsLeft && (
                <Separator variant={variant}>
                  + {numberOfItemsLeft.toString().padStart(2, '0')}
                </Separator>
              )}
            </Wrapper>
          );
        })}
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
