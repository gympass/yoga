import React, { useState } from 'react';
import { node, number, oneOf, string } from 'prop-types';
import { Text } from '@gympass/yoga';

import { PopoverContainer, Title, Wrapper } from './styles';

function Popover({
  children,
  title,
  description,
  position,
  width,
  height,
  ...props
}) {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  function handleShowPopover() {
    setIsPopoverOpen(true);
  }

  function handleHidePopover() {
    setIsPopoverOpen(false);
  }

  return (
    <Wrapper {...props}>
      {isPopoverOpen && (
        <PopoverContainer
          position={position}
          width={width}
          height={height}
          role="tooltip"
        >
          {!!title && <Title color="white">{title}</Title>}
          <Text.Small m="zero" color="white">
            {description}
          </Text.Small>
        </PopoverContainer>
      )}

      <div onMouseEnter={handleShowPopover} onMouseLeave={handleHidePopover}>
        {children}
      </div>
    </Wrapper>
  );
}

Popover.propTypes = {
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
};

Popover.defaultProps = {
  title: undefined,
  position: 'bottom-center',
  width: 265,
  height: 116,
};

export default Popover;
