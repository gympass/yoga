import React, { useState } from 'react';
import { node, number, oneOf, string } from 'prop-types';
import { Text } from '@gympass/yoga';

import { PopoverContainer, PopoverButton, Wrapper } from './styles';

function Popover({
  children,
  title,
  description,
  position,
  width,
  height,
  zIndex,
  a11yId,
  ...props
}) {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const handleShowPopover = () => {
    setIsPopoverOpen(true);
  };

  const handleHidePopover = () => {
    setIsPopoverOpen(false);
  };

  return (
    <Wrapper {...props}>
      {isPopoverOpen && (
        <PopoverContainer
          {...(a11yId && { id: a11yId })}
          position={position}
          width={width}
          height={height}
          role="tooltip"
          $zIndex={zIndex}
        >
          {!!title && (
            <Text.Small mb="xxxsmall" fw="medium" color="white">
              {title}
            </Text.Small>
          )}
          <Text.Small m="zero" color="white">
            {description}
          </Text.Small>
        </PopoverContainer>
      )}

      <PopoverButton
        {...(a11yId && { 'aria-describedby': a11yId })}
        onMouseEnter={handleShowPopover}
        onMouseLeave={handleHidePopover}
        onTouchStart={handleShowPopover}
        onTouchEnd={handleHidePopover}
        onClick={event => event.preventDefault()}
        onKeyDown={event => {
          if (event.key === 'Enter') {
            setIsPopoverOpen(current => !current);
          }
        }}
      >
        {children}
      </PopoverButton>
    </Wrapper>
  );
}

Popover.propTypes = {
  a11yId: string,
  children: node.isRequired,
  title: string,
  description: string.isRequired,
  /** Position of the popover relative to the children. Accepted values: bottom-[start|center|end], left-[start|center|end], top-[start|center|end] or right-[start|center|end] */
  position: oneOf([
    'bottom-start',
    'bottom-center',
    'bottom-end',
    'left-start',
    'left-center',
    'left-end',
    'top-start',
    'top-center',
    'top-end',
    'right-start',
    'right-center',
    'right-end',
  ]),
  width: number,
  height: number,
  zIndex: number,
};

Popover.defaultProps = {
  a11yId: undefined,
  title: undefined,
  position: 'bottom-center',
  width: 265,
  height: 200,
  zIndex: 1,
};

export default Popover;
