import React, { useState } from 'react';
import styled from 'styled-components';
import { Icon, Text, Box } from '@gympass/yoga';
import { ChevronLeft, ChevronRight } from '@gympass/yoga-icons';
import { oneOf, func, instanceOf } from 'prop-types';
import Button from '../../Button';

const CalendarWrapper = styled.div`
  ${({
    theme: {
      yoga: { spacing },
    },
  }) => `
    padding: ${spacing.xsmall}px ${spacing.xsmall}px ${spacing.small}px ${spacing.xsmall}px;
  `}
`;

const MonthUnit = styled.div`
  ${({
    selected,
    inRange,
    theme: {
      yoga: { colors },
    },
  }) => `
    p {
        color: ${selected ? colors.white : colors.text.primary};
        z-index: 1;
    }
    width: 84px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background: ${inRange ? colors.clear : colors.white};
    position: relative;
    
    ${
      selected
        ? `&:before {
              content: '';
              position: absolute;
              background: ${colors.vibin};
              width: 68px;
              height: 36px;
              border-radius: 24px;
            };`
        : ``
    }
  `}
`;

const ApplyButton = styled(Button)`
  width: 68px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 24px;
`;

const CancelButton = styled(Button.Text)`
  width: 68px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 24px;
`;

const MonthWrapper = styled(Box)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0px 4px;
`;

const ButtonsWrapper = styled(Box)`
  padding-top: 16px;
  display: flex;
  flex-direction: row;
  justify-content: start;
  padding-left: 4px;
  gap: 8px;
`;

const months = {
  Jan: '0',
  Feb: '1',
  Mar: '2',
  Apr: '3',
  May: '4',
  Jun: '5',
  Jul: '6',
  Aug: '7',
  Sep: '8',
  Oct: '9',
  Nov: '10',
  Dec: '11',
};

function MonthCalendar({
  type,
  onSelectSingle,
  startDate,
  endDate,
  onSelectRange,
}) {
  const [selectedDate, setSelectedDate] = useState();
  const [year, setYear] = useState(new Date().getUTCFullYear());

  const incrementYear = () => {
    setYear(prevState => prevState + 1);
  };

  const decrementYear = () => {
    setYear(prevState => prevState - 1);
  };

  const onClick = month => {
    if (type === 'range') {
      const newSelectedDate = new Date(Date.UTC(year, months[month]));

      onSelectRange(newSelectedDate);
    } else {
      const newSelectedDate = new Date(Date.UTC(year, months[month]));

      setSelectedDate(newSelectedDate);
    }
  };

  const onApply = () => {
    onSelectSingle(selectedDate);
  };

  const onClear = () => {
    if (type === 'single') setSelectedDate();
  };

  const toUTCDate = date => {
    return new Date(
      Date.UTC(date.getUTCFullYear(), date.getUTCMonth()),
    ).getTime();
  };

  const inRange = month => {
    return (
      startDate &&
      toUTCDate(startDate) <=
        new Date(Date.UTC(year, months[month])).getTime() &&
      endDate &&
      toUTCDate(endDate) >= new Date(Date.UTC(year, months[month])).getTime()
    );
  };

  const isEqual = month =>
    (startDate &&
      toUTCDate(startDate) ===
        new Date(Date.UTC(year, months[month])).getTime()) ||
    (endDate &&
      toUTCDate(endDate) === new Date(Date.UTC(year, months[month])).getTime());

  const Months = () =>
    Object.keys(months).map(month => (
      <MonthUnit
        key={month}
        onClick={() => onClick(month)}
        inRange={type === 'range' && inRange(month)}
        selected={isEqual(month)}
      >
        <Text>{month.substring(0, 3)}</Text>
      </MonthUnit>
    ));

  return (
    <CalendarWrapper>
      <Box
        display="flex"
        justifyContent="space-between"
        m="xxsmall"
        mb="zero"
        pb="small"
      >
        <Icon
          style={{ cursor: 'pointer' }}
          as={ChevronLeft}
          width="large"
          height="large"
          onClick={decrementYear}
          fill="primary"
        />
        <Text style={{ alignSelf: 'center' }}>
          {new Intl.DateTimeFormat('en-US', {
            year: 'numeric',
          }).format(new Date(year, 0, 1, 0, 0, 0))}
        </Text>
        <Icon
          style={{ cursor: 'pointer' }}
          as={ChevronRight}
          width="large"
          height="large"
          onClick={incrementYear}
          fill="primary"
        />
      </Box>
      <MonthWrapper>
        <Months />
      </MonthWrapper>
      <ButtonsWrapper>
        <ApplyButton onClick={onApply}>Apply</ApplyButton>
        <CancelButton onClick={onClear}>Clear</CancelButton>
      </ButtonsWrapper>
    </CalendarWrapper>
  );
}

MonthCalendar.propTypes = {
  startDate: instanceOf(Date),
  endDate: instanceOf(Date),
  type: oneOf(['single', 'range']).isRequired,
  onSelectSingle: func,
  onSelectRange: func,
};

MonthCalendar.defaultProps = {
  startDate: undefined,
  endDate: undefined,
  onSelectSingle: undefined,
  onSelectRange: undefined,
};

export default MonthCalendar;
