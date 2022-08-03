/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown } from '@gympass/yoga-icons';
import { Text } from '@gympass/yoga';
import styled, { css } from 'styled-components';
import { bool, oneOf, func, instanceOf, string } from 'prop-types';
import { theme } from '../../Theme';
import Calendar from './Calendar';

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
  vertical-align: top;
  width: ${props =>
    props.fullWidth
      ? '100%'
      : css`
          ${theme.components.input.width}px
        `};
`;

const getSelectorBorderColor = (open, error, disabled, colors, input) => {
  if (error) {
    return colors.feedback.attention[1];
  }
  if (disabled) {
    return colors.elements.backgroundAndDisabled;
  }
  if (open) {
    return colors.deep;
  }

  return input.border.color.default;
};

const Selector = styled.div`
  ${({
    open,
    error,
    disabled,
    theme: {
      yoga: { components, colors, spacing },
    },
  }) => `
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    box-sizing: border-box;
    height: ${components.input.height}px;
    width: 100%;
    padding: ${spacing.small}px;
    background-color: ${colors.white};
    border-radius: ${components.input.border.radius}px;
    border-width: ${components.input.border.width}px;
    border-style: solid;
    border-color: ${getSelectorBorderColor(
      open,
      error,
      disabled,
      colors,
      components.input,
    )}
    color: ${components.input.font.color.focus};
  `}
`;

const Input = styled(Text.Small)`
  ${({
    disabled,
    theme: {
      yoga: { colors },
    },
  }) => `
    width: 100%;
    padding: 0;
    border: none;
    cursor: pointer;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: ${!disabled ? colors.text.primary : colors.text.disabled}
  `}
`;

const InputPlaceholder = styled(Text.Small)`
  ${({
    disabled,
    theme: {
      yoga: { colors },
    },
  }) => `
    color: ${!disabled ? colors.text.secondary : colors.text.disabled}
  `}
`;

const TButton = styled.button`
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: flex-end;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
`;

const Panel = styled.div`
  ${({
    theme: {
      yoga: { components, colors, radii, elevations },
    },
  }) => `
  position: absolute;
  background-color: ${colors.white};
  box-shadow: ${elevations.large};
  z-index: 1;
  width: ${components.input.width}px;
  left: 0;
  border-radius: ${radii.small}px;
  `}
`;

const ArrowIcon = styled(({ _isopen, _disabled, ...props }) => (
  <ChevronDown width={20} height={20} {...props} />
))`
  ${({
    isopen,
    disabled,
    theme: {
      yoga: { colors, spacing },
    },
  }) => `
    fill: ${disabled ? colors.text.disabled : colors.primary};
    transform: rotate(${isopen === 'true' ? '180deg' : '0'});
    margin-right: ${spacing.xxsmall}px;
  `}
`;

const ErrorWrapper = styled(Text.Small)`
  ${({
    theme: {
      yoga: { colors, components },
    },
  }) => `
    margin-top: ${components.input.helper.margin.top}px;
    font-size: ${components.input.helper.font.size}px;
    color: ${colors.feedback.attention[1]}
  `}
`;

export const toUTC = date => {
  return new Date(
    date.getUTCFullYear(),
    date.getUTCMonth(),
    date.getUTCDate(),
    date.getUTCHours(),
    date.getUTCMinutes(),
    date.getUTCSeconds(),
  );
};

const Datepicker = ({
  fullWidth,
  type,
  placeholder,
  startDate,
  endDate,
  onSelectSingle,
  disabled,
  onSelectRange,
  disablePastDates,
  disableFutureDates,
  error,
}) => {
  const [open, setOpen] = useState(false.toString());
  const [startD, setStartDate] = useState(startDate);
  const [endD, setEndDate] = useState(endDate);
  const ref = useRef(null);

  const onDocClick = event => {
    const clickedDatepicker = ref.current.contains(event.target);

    if (!clickedDatepicker) {
      setOpen(false.toString());
    }
  };

  useEffect(() => {
    document.addEventListener('click', onDocClick);
    return () => {
      document.removeEventListener('click', onDocClick);
    };
  }, []);

  useEffect(() => {
    if (type === 'single' && onSelectSingle) {
      onSelectSingle(startD);
    } else if (type === 'range' && onSelectRange) {
      onSelectRange(startD, endD);
    }
  }, [startD, endD]);

  const onDateSingleSelect = startLocal => {
    setStartDate(startLocal);
  };

  const onDateRangeSelect = selectedDate => {
    if (!endD) {
      if (!startD) {
        setStartDate(selectedDate);
      } else if (selectedDate < startD) {
        setStartDate(selectedDate);
        setEndDate(undefined);
      } else setEndDate(selectedDate);
    } else {
      setStartDate(selectedDate);
      setEndDate(undefined);
    }
  };

  const renderInput = () => {
    if (!startD && !endD) {
      return (
        <InputPlaceholder disabled={disabled}>
          {placeholder ?? `Select Date`}
        </InputPlaceholder>
      );
    }

    return (
      startD && (
        <Input disabled={disabled}>
          {new Intl.DateTimeFormat('en-US', {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
          }).format(toUTC(startD))}
          {endD &&
            ` - ${new Intl.DateTimeFormat('en-US', {
              year: 'numeric',
              month: 'numeric',
              day: 'numeric',
            }).format(toUTC(endD))}`}
        </Input>
      )
    );
  };

  return (
    <Wrapper fullWidth={fullWidth} ref={ref}>
      <Selector open={open === 'true'} disabled={disabled} error={error}>
        {renderInput()}
        <TButton
          onClick={() => {
            if (!disabled) {
              setOpen((open !== 'true').toString());
            }
          }}
        >
          {/* svg only recognizes lowercase isopen */}
          <ArrowIcon isopen={open.toString()} disabled={disabled} />
        </TButton>
      </Selector>
      {error && <ErrorWrapper>{error}</ErrorWrapper>}
      {open === 'true' && (
        <Panel tabIndex={-1}>
          <Calendar
            type={type}
            startDate={startD}
            endDate={endD}
            onSelectSingle={onDateSingleSelect}
            onSelectRange={onDateRangeSelect}
            disablePastDates={disablePastDates}
            disableFutureDates={disableFutureDates}
          />
        </Panel>
      )}
    </Wrapper>
  );
};

Datepicker.propTypes = {
  fullWidth: bool,
  type: oneOf(['single', 'range']).isRequired,
  placeholder: string,
  startDate: instanceOf(Date),
  endDate: instanceOf(Date),
  disabled: bool,
  onSelectSingle: func,
  onSelectRange: func,
  disablePastDates: bool,
  disableFutureDates: bool,
  error: string,
};

Datepicker.defaultProps = {
  fullWidth: false,
  placeholder: undefined,
  startDate: undefined,
  endDate: undefined,
  disabled: false,
  onSelectSingle: null,
  onSelectRange: null,
  disablePastDates: false,
  disableFutureDates: false,
  error: undefined,
};

export default Datepicker;