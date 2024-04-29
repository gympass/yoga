import React, { useState, useEffect } from 'react';
import { bool, node, number, oneOf, string } from 'prop-types';

import { Text } from '../..';
import { useCombinedRefs } from '../../hooks';

import { PopoverContainer, PopoverButton, Wrapper } from './styles';

const Popover = React.forwardRef(
  (
    {
      children,
      title,
      description,
      position,
      width,
      height,
      zIndex,
      a11yId,
      hover,
      ...props
    },
    forwardedRef,
  ) => {
    const ref = useCombinedRefs(forwardedRef);
    const [isPopoverOpen, setIsPopoverOpen] = useState(false);

    useEffect(() => {
      const handleClickOutside = event => {
        if (ref.current && !ref.current.contains(event.target)) {
          setIsPopoverOpen(false);
        }
      };

      document.addEventListener('click', handleClickOutside, true);

      return () => {
        document.removeEventListener('click', handleClickOutside, true);
      };
    }, [setIsPopoverOpen]);

    const handleShowPopover = () => {
      setIsPopoverOpen(true);
    };

    const handleHidePopover = () => {
      setIsPopoverOpen(false);
    };

    const toggleOpenPopover = event => {
      event.preventDefault();
      setIsPopoverOpen(current => !current);
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
              <Text.Body2 bold mb="xxxsmall" color="white">
                {title}
              </Text.Body2>
            )}
            <Text.Body2 m="zero" color="white">
              {description}
            </Text.Body2>
          </PopoverContainer>
        )}

        <PopoverButton
          {...(a11yId && { 'aria-describedby': a11yId })}
          ref={ref}
          onMouseEnter={hover ? handleShowPopover : undefined}
          onMouseLeave={hover ? handleHidePopover : undefined}
          onClick={!hover ? toggleOpenPopover : event => event.preventDefault()}
        >
          {children}
        </PopoverButton>
      </Wrapper>
    );
  },
);

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
  hover: bool,
};

Popover.defaultProps = {
  a11yId: undefined,
  title: undefined,
  position: 'bottom-center',
  width: 265,
  height: 200,
  zIndex: 1,
  hover: false,
};

export default Popover;
