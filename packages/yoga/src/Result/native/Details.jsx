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
import Box from '../../Box';
import TinyTextIcon from './TinyTextIcon';

const Container = styled(Text.Body2)`
  flex: 1;
`;

const Separator = styled(Box).attrs({
  width: 'xxxsmall',
  height: 'xxxsmall',
})``;

const StyledText = styled(Text.Body2)`
  ${({
    theme: {
      yoga: {
        spacing: { xxxsmall },
      },
    },
  }) => `
    margin-left: ${xxxsmall}px;
    margin-right: ${xxxsmall}px;
  `}
`;

const ResultDetails = ({
  items,
  limit = undefined,
  limitLabel = '',
  dots = false,
  renderItem = Text.Body2,
}) => {
  const refinedList = limit !== 0 ? items.slice(0, limit) : items;
  const numberOfItemsLeft = items.length - limit;

  const Item = renderItem;

  return (
    <Box flexDirection="row" alignItems="center" mt="xxxsmall">
      <Container numberOfLines={1}>
        {refinedList?.map(
          ({ icon: IconComponent, variant, ...props }, index) => {
            const isLastItem = index === refinedList.length - 1;
            const showNumbersOfItemsLeft =
              isLastItem && limit !== 0 && limit < items.length;

            return (
              // eslint-disable-next-line react/no-array-index-key
              <React.Fragment key={index}>
                {IconComponent && (
                  <>
                    <TinyTextIcon as={IconComponent} fill={variant} />
                    <Separator />
                  </>
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
                      + {numberOfItemsLeft}
                      {!!limitLabel && ` ${limitLabel}`}
                    </StyledText>
                    <Separator />
                  </>
                )}
              </React.Fragment>
            );
          },
        )}
      </Container>
    </Box>
  );
};

ResultDetails.displayName = 'Result.Details';

ResultDetails.propTypes = {
  /** Props to be passed to each component at `renderItem` */
  items: arrayOf(shape({})).isRequired,
  /** If has limit of items to show in component.Other with show with + 4 for
   * example
   * */
  limit: number,
  /** If is necessary show a label after the limit.Example + 4 activities */
  limitLabel: string,
  /** If shows the dot separator between the itens */
  dots: bool,
  /** The component to render as the item of the list. */
  renderItem: oneOfType([node, func, shape({ render: func.isRequired })]),
};

export default ResultDetails;
