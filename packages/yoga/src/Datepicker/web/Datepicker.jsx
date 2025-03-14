/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Booking, BookingFilled } from '@gympass/yoga-icons';
import styled, { css } from 'styled-components';
import { bool, oneOf, func, instanceOf, string } from 'prop-types';
import { Text } from '../..';
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

const getSelectorBorderColor = (open, error, disabled, inputFilled, colors) => {
  if (error) {
    return colors.feedback.attention[1];
  }
  if (disabled) {
    return colors.elements.backgroundAndDisabled;
  }
  if (open || inputFilled) {
    return colors.secondary;
  }

  return colors.elements.lineAndBorders;
};

const Selector = styled.div`
  ${({
    open,
    error,
    disabled,
    inputFilled,
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
      inputFilled,
      colors,
    )};
    &:hover {
      border-color: ${colors.secondary};
    }
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
      yoga: { components, colors, radii, borders, spacing },
    },
  }) => `
    position: absolute;
    background-color: ${colors.white};
    border: ${borders.small}px solid ${colors.elements.lineAndBorders};
    z-index: 1;
    width: ${components.input.width}px;
    left: 0;
    border-radius: ${radii.regular}px;
    margin-top: ${spacing.xxsmall}px;
  `}
`;

const CalendarIcon = styled(({ _disabled, inputFilled, ...props }) =>
  !inputFilled ? (
    <Booking width={20} height={20} {...props} />
  ) : (
    <BookingFilled width={20} height={20} {...props} />
  ),
)`
  ${({
    disabled,
    theme: {
      yoga: { colors, spacing },
    },
  }) => `
    fill: ${disabled ? colors.text.disabled : colors.text.primary};
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
    color: ${colors.feedback.attention[1]};
    position: absolute;
  `}
`;

export const toUTC = date => {
  return new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
};

function Datepicker({
  fullWidth = false,
  type,
  placeholder,
  startDate,
  endDate,
  onSelectSingle,
  disabled = false,
  onSelectRange,
  customOnSelectRange,
  disablePastDates = false,
  disableFutureDates = false,
  disablePastFrom,
  disableFutureFrom,
  error,
  onOpen,
  displayEndDateOnly = false,
  locale,
  ...props
}) {
  const [open, setOpen] = useState();
  const [startDateLocal, setStartDateLocal] = useState(startDate);
  const [endDateLocal, setEndDateLocal] = useState(endDate);
  const ref = useRef(null);
  const [inputFilled, setInputFilled] = useState(false);

  const triggerOnOpen = useCallback(() => {
    if (onOpen) onOpen(open === 'true');
  }, [open]);

  const onBlur = () => {
    setOpen(false.toString());
    triggerOnOpen();
  };

  const checkInputFilled = () => {
    if (type === 'range') {
      if (!customOnSelectRange)
        setInputFilled(!!(startDateLocal && endDateLocal));
      else {
        setInputFilled(startDateLocal && endDateLocal);
      }
    } else {
      setInputFilled(startDate);
    }
  };

  useEffect(() => {
    checkInputFilled();
  }, [startDate, startDateLocal, endDateLocal]);

  useEffect(() => {
    setStartDateLocal(startDate);
    setEndDateLocal(endDate);

    if (type === 'single' && startDate) {
      setOpen(false.toString());
    }
    if ((startDate || endDate) && onSelectRange)
      onSelectRange(startDate, endDate);
    if (displayEndDateOnly && !endDate) setInputFilled(false);
  }, [startDate, endDate, type]);

  const onDateSingleSelect = startLocal => {
    onSelectSingle(startLocal);
  };

  useEffect(() => {
    if (open === 'true') ref.current.focus();
  }, [open]);

  const onDateRangeSelect = selectedDate => {
    if (customOnSelectRange) {
      customOnSelectRange(selectedDate);
      return;
    }

    const onSelectRangeCallback = (start, end) => {
      if (onSelectRange) {
        onSelectRange(start, end);
      }
    };

    if (
      !startDateLocal ||
      (startDateLocal > selectedDate && !endDateLocal) ||
      endDateLocal
    ) {
      setStartDateLocal(selectedDate);
      if (endDateLocal) setEndDateLocal(undefined);
      onSelectRangeCallback(selectedDate, undefined);
    } else {
      setEndDateLocal(selectedDate);
      onSelectRangeCallback(startDateLocal, selectedDate);
    }
  };

  const renderInput = (start, end) => {
    if ((!start && !end) || (displayEndDateOnly && !end)) {
      return (
        <InputPlaceholder disabled={disabled}>
          {placeholder ?? `Select Date`}
        </InputPlaceholder>
      );
    }

    const formattedDate = date => {
      let month = new Intl.DateTimeFormat(locale, {
        month: 'short',
        timeZone: 'UTC',
      }).format(date);

      month = month[0].charAt(0).toUpperCase() + month.slice(1, 3);
      const day = date.getUTCDate();
      const year = date.getUTCFullYear();

      return `${month} ${day}, ${year}`;
    };

    if (displayEndDateOnly)
      return <Input disabled={disabled}>{end && formattedDate(end)}</Input>;

    return (
      start && (
        <Input disabled={disabled}>
          {formattedDate(start)}
          {end && ` - ${formattedDate(end)}`}
        </Input>
      )
    );
  };

  return (
    <Wrapper fullWidth={fullWidth} tabIndex="0" {...props}>
      <Selector
        open={open === 'true'}
        disabled={disabled}
        error={error}
        inputFilled={inputFilled}
      >
        {renderInput(
          type === 'range' && !customOnSelectRange ? startDateLocal : startDate,
          type === 'range' && !customOnSelectRange ? endDateLocal : endDate,
        )}
        <TButton
          onClick={() => {
            if (!disabled) {
              setOpen((open !== 'true').toString());
            }
            triggerOnOpen();
          }}
        >
          <CalendarIcon disabled={disabled} inputFilled={inputFilled} />
        </TButton>
      </Selector>
      {error && <ErrorWrapper>{error}</ErrorWrapper>}
      {open === 'true' && (
        <Panel tabIndex={-1} ref={ref} onBlur={onBlur}>
          <Calendar
            type={type}
            startDate={startDateLocal}
            endDate={endDateLocal}
            onSelectSingle={onDateSingleSelect}
            onSelectRange={onDateRangeSelect}
            disablePastDates={disablePastDates}
            disableFutureDates={disableFutureDates}
            disablePastFrom={disablePastFrom}
            disableFutureFrom={disableFutureFrom}
            locale={locale}
          />
        </Panel>
      )}
    </Wrapper>
  );
}

Datepicker.propTypes = {
  fullWidth: bool,
  type: oneOf(['single', 'range']).isRequired,
  placeholder: string,
  startDate: instanceOf(Date),
  endDate: instanceOf(Date),
  disabled: bool,
  onSelectSingle: func,
  onSelectRange: func,
  customOnSelectRange: func,
  disablePastDates: bool,
  disableFutureDates: bool,
  disablePastFrom: instanceOf(Date),
  disableFutureFrom: instanceOf(Date),
  error: string,
  onOpen: func,
  displayEndDateOnly: bool,
  locale: string,
};

export default Datepicker;
