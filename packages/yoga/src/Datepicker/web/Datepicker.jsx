/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Booking, BookingFilled } from '@gympass/yoga-icons';
import { Text } from '@gympass/yoga';
import styled, { css } from 'styled-components';
import { bool, oneOf, func, instanceOf, string } from 'prop-types';
import moment from 'moment';
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
  return new Date(
    date.getUTCFullYear(),
    date.getUTCMonth(),
    date.getUTCDate(),
    date.getUTCHours(),
    date.getUTCMinutes(),
    date.getUTCSeconds(),
  );
};

function Datepicker({
  fullWidth,
  type,
  placeholder,
  startDate: initialDate,
  endDate,
  onSelectSingle,
  disabled,
  onSelectRange,
  disablePastDates,
  disableFutureDates,
  error,
  onOpen,
}) {
  const [open, setOpen] = useState();
  const [startDate, setStartDate] = useState(initialDate);
  const [endD, setEndDate] = useState(endDate);
  const ref = useRef(null);
  const [inputFilled, setInputFilled] = useState(false);

  const triggerOnOpen = useCallback(() => {
    if (onOpen) onOpen(open === 'true');
  }, [open]);

  const onBlur = () => {
    setOpen(false.toString());
    triggerOnOpen();
  };

  useEffect(() => {
    if (type === 'single' && onSelectSingle) {
      onSelectSingle(startDate);
      setOpen(false.toString());
    } else if (type === 'range' && onSelectRange) {
      onSelectRange(startDate, endD);
    }
    setInputFilled(!!startDate);
  }, [startDate, endD]);

  const onDateSingleSelect = startLocal => {
    setStartDate(startLocal);
  };

  useEffect(() => {
    if (open === 'true') ref.current.focus();
  }, [open]);

  const onDateRangeSelect = selectedDate => {
    if (!endD) {
      if (!startDate) {
        setStartDate(selectedDate);
      } else if (selectedDate < startDate) {
        setStartDate(selectedDate);
        setEndDate(undefined);
      } else setEndDate(selectedDate);
    } else {
      setStartDate(selectedDate);
      setEndDate(undefined);
    }
  };

  const renderInput = () => {
    if (!startDate && !endD) {
      return (
        <InputPlaceholder disabled={disabled}>
          {placeholder ?? `Select Date`}
        </InputPlaceholder>
      );
    }

    const dateFormat = 'MMM D, YYYY';

    return (
      startDate && (
        <Input disabled={disabled}>
          {moment(startDate).format(dateFormat)}
          {endD && ` - ${moment(endD).format(dateFormat)}`}
        </Input>
      )
    );
  };

  return (
    <Wrapper fullWidth={fullWidth} tabIndex="0">
      <Selector open={open === 'true'} disabled={disabled} error={error}>
        {renderInput()}
        <TButton
          onClick={() => {
            if (!disabled) {
              setOpen((open !== 'true').toString());
            }
            triggerOnOpen();
          }}
        >
          {/* svg only recognizes lowercase isopen */}
          <CalendarIcon disabled={disabled} inputFilled={inputFilled} />
        </TButton>
      </Selector>
      {error && <ErrorWrapper>{error}</ErrorWrapper>}
      {open === 'true' && (
        <Panel tabIndex={-1} ref={ref} onBlur={onBlur}>
          <Calendar
            type={type}
            startDate={startDate}
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
  disablePastDates: bool,
  disableFutureDates: bool,
  error: string,
  onOpen: func,
};

Datepicker.defaultProps = {
  fullWidth: false,
  placeholder: undefined,
  startDate: undefined,
  endDate: undefined,
  disabled: false,
  onSelectSingle: undefined,
  onSelectRange: undefined,
  disablePastDates: false,
  disableFutureDates: false,
  error: undefined,
  onOpen: undefined,
};

export default Datepicker;
