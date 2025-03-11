import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ChevronLeft, ChevronRight } from '@gympass/yoga-icons';
import { oneOf, func, instanceOf, bool, string } from 'prop-types';
import _ from 'lodash';
import { Icon, Text, Box } from '../..';

const CalendarWrapper = styled.div`
  ${({
    theme: {
      yoga: { spacing },
    },
  }) => `
    padding: ${spacing.xsmall}px ${spacing.xsmall}px ${spacing.small}px ${spacing.xsmall}px;
  `}
`;

const DaysWrapper = styled.div`
  ${({
    theme: {
      yoga: { spacing },
    },
  }) => `
    display: flex;
    justify-content: space-between;
    margin: ${spacing.xxsmall}px ${spacing.zero}px ${spacing.xsmall}px ${spacing.zero}px;
  `}
`;

const Day = styled(Text.Overline)`
  ${({
    theme: {
      yoga: { colors },
    },
  }) => `
    width: 40px;
    color: ${colors.elements.selectionAndIcons};
    text-align: center;
  `}
`;

const Month = styled(Text.Body2)`
  ${({
    theme: {
      yoga: { colors, v3theme },
    },
  }) => `
    color: ${v3theme ? colors.primary : colors.text.primary};
    align-self: center;
  `}
`;

const getDayFieldColor = (selected, disabled, colors, aux) => {
  if (selected && !disabled) {
    return colors.white;
  }
  if (disabled) {
    return colors.text.disabled;
  }
  const currentDate = new Date();
  const { val, year, month } = aux;

  if (
    // if current date
    new Date(Date.UTC(year, month, val)).getTime() ===
    new Date(
      Date.UTC(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        currentDate.getDate(),
      ),
    ).getTime()
  ) {
    return colors.primary;
  }

  return colors.stamina;
};

const toUTCTime = date =>
  Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());

const isSameDate = (firstDate, secondDate) =>
  firstDate.getUTCDate() === secondDate.getUTCDate() &&
  firstDate.getUTCMonth() === secondDate.getUTCMonth() &&
  firstDate.getUTCFullYear() === secondDate.getUTCFullYear();

const getDayFieldRadius = (aux, radii) => {
  const { val, startDate, endDate, year, month } = aux;
  const currentDate = new Date(Date.UTC(year, month, val))?.getTime();

  if (currentDate === toUTCTime(startDate) && endDate) {
    return `${radii.circle}px ${radii.sharp}px ${radii.sharp}px ${radii.circle}px`;
  }
  if (currentDate === toUTCTime(endDate) && startDate) {
    return `${radii.sharp}px ${radii.circle}px ${radii.circle}px ${radii.sharp}px`;
  }

  return `${radii.sharp}px`;
};

const DayField = styled.div`
  ${({
    selected,
    inRange,
    disabled,
    aux,
    theme: {
      yoga: {
        colors,
        radii,
        spacing,
        components: { datepicker },
      },
    },
  }) => `
    p {
        color: ${getDayFieldColor(selected, disabled, colors, aux)};
        z-index: 1;
        position: absolute;
    }
    width: ${datepicker.width.day}px;
    height: ${datepicker.width.day}px;
    padding: ${spacing.zero}px 21.3px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${inRange ? colors.elements.lineAndBorders : colors.white};
    position: relative;
    cursor: pointer;
    ${
      selected && inRange
        ? `border-radius: ${getDayFieldRadius(aux, radii)};`
        : ``
    }
    ${
      selected && !disabled
        ? `&:before {
            content: '';
            position: absolute;
            background: ${colors.primary};
            width: ${datepicker.width.day}px;
            height: ${datepicker.width.day}px;
            border-radius: ${radii.circle}px;
        };`
        : ``
    }
    ${
      !disabled
        ? `&:hover {
            &:before {
              content: '';
              position: absolute;
              border: 1px solid ${colors.secondary};
              width: ${datepicker.width.day}px;
              height: ${datepicker.width.day}px;
              border-radius: ${radii.circle}px;
            }
          };`
        : ``
    }
`}
`;

const Row = styled.div`
  ${({
    theme: {
      yoga: { radii, spacing },
    },
  }) => `
    display: flex;
    div:first-child {
        border-radius: ${radii.regular}px 0 0 ${radii.regular}px;
    }
    div:last-child {
        border-radius: 0 ${radii.regular}px ${radii.regular}px 0;
    }
    padding: ${spacing.xxxsmall}px 0px;
`}
`;

function Calendar({
  type,
  startDate,
  endDate,
  onSelectSingle = null,
  onSelectRange = null,
  disablePastDates = false,
  disableFutureDates = false,
  disablePastFrom,
  disableFutureFrom,
  locale = 'pt-br',
}) {
  const [month, setMonth] = useState(new Date().getUTCMonth());
  const [year, setYear] = useState(new Date().getUTCFullYear());

  useEffect(() => {
    if (endDate) {
      setMonth(endDate.getUTCMonth());
      setYear(endDate.getUTCFullYear());
    } else if (startDate) {
      setMonth(startDate.getUTCMonth());
      setYear(startDate.getUTCFullYear());
    }
  }, [startDate, endDate]);

  const getDayOfWeek = day => {
    return new Date(Date.UTC(year, month, day)).getUTCDay();
  };

  const getDaysInMonth = () => {
    return new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
  };

  const getDaysInMonthBefore = () => {
    return new Date(Date.UTC(year, month, 0)).getUTCDate();
  };

  const toUTCTimeByDay = day => {
    return Date.UTC(year, month, day);
  };

  const isEqual = day => {
    const utcDate = new Date(toUTCTimeByDay(day));

    return (
      (startDate && isSameDate(startDate, utcDate)) ||
      (endDate && isSameDate(endDate, utcDate))
    );
  };

  const inRange = day => {
    return (
      startDate &&
      toUTCTime(startDate) <= toUTCTimeByDay(day) &&
      endDate &&
      endDate.getTime() >= toUTCTimeByDay(day)
    );
  };

  const isDisabled = day => {
    const local = Date.UTC(year, month, day);
    const now = new Date();
    const nowUTC = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate());

    const pastDatesDisabled =
      (disablePastDates && local < nowUTC) ||
      (disablePastFrom && local < toUTCTime(disablePastFrom));

    const futureDateDisabled =
      (disableFutureDates && local > nowUTC) ||
      (disableFutureFrom && local > toUTCTime(disableFutureFrom));

    return pastDatesDisabled || futureDateDisabled;
  };

  const onClick = day => {
    const selectedDate = new Date(Date.UTC(year, month, day));

    if (isDisabled(day)) return;

    if (type === 'single') {
      onSelectSingle(selectedDate);
    } else if (type === 'range') {
      onSelectRange(selectedDate);
    }
  };

  const getFirstWeek = () => {
    const day = getDayOfWeek(1);
    let week = _.range(1, 7 - day + 1);
    const lastDayBefore = getDaysInMonthBefore();
    const daysBefore = [];

    for (let i = lastDayBefore - (day - 1); i <= lastDayBefore; i += 1) {
      daysBefore.push(i);
    }
    week = _.concat(daysBefore, week);
    return week.map(val => {
      return (
        <DayField
          key={val}
          disabled={val > 7 || isDisabled(val)}
          selected={isEqual(val)}
          onClick={() => val <= 7 && onClick(val)}
          inRange={type === 'range' && val <= 7 && inRange(val)}
          aux={{ val, startDate, endDate, year, month }}
        >
          <Text.Body2 bold={isEqual(val)}>{val}</Text.Body2>
        </DayField>
      );
    });
  };

  const getMiddleWeeks = () => {
    const day = getDayOfWeek(1);
    let firstDay = 7 - day + 1;
    const weeks = [];

    while (firstDay + 7 <= getDaysInMonth()) {
      weeks.push(_.range(firstDay, firstDay + 7));
      firstDay += 7;
    }
    return weeks.map((week, i) => {
      const days = week.map(val => {
        return (
          <DayField
            selected={isEqual(val)}
            onClick={() => onClick(val)}
            inRange={type === 'range' && inRange(val)}
            key={val}
            disabled={isDisabled(val)}
            aux={{ val, startDate, endDate, year, month }}
          >
            <Text.Body2 bold={isEqual(val)}>{val}</Text.Body2>
          </DayField>
        );
      });

      /* eslint-disable-next-line react/no-array-index-key */
      return <Row key={i}>{days}</Row>;
    });
  };

  const getLastWeek = () => {
    const lastDay = getDaysInMonth();
    const day = getDayOfWeek(lastDay);
    let week = _.range(lastDay - day, lastDay + 1);

    week = _.concat(week, _.range(1, 7 - day));
    return week.map(val => {
      return (
        <DayField
          key={val}
          disabled={val < 7 || isDisabled(val)}
          selected={isEqual(val)}
          onClick={() => val > 7 && onClick(val)}
          inRange={type === 'range' && val > 7 && inRange(val)}
          aux={{ val, startDate, endDate, year, month }}
        >
          <Text.Body2 bold={isEqual(val)}>{val}</Text.Body2>
        </DayField>
      );
    });
  };

  const getDays = () => {
    return (
      <>
        <Row>{getFirstWeek()}</Row>
        {getMiddleWeeks()}
        <Row>{getLastWeek()}</Row>
      </>
    );
  };

  const getLocale = () => {
    return Intl.DateTimeFormat.supportedLocalesOf(locale).length > 0
      ? locale
      : 'en-US';
  };

  const weekDays = Array.from({ length: 7 }, (__, i) =>
    new Intl.DateTimeFormat(getLocale(), { weekday: 'short', timeZone: 'UTC' })
      .format(new Date(Date.UTC(2024, 0, 7 + i)))
      .charAt(0),
  );

  const prior = () => {
    let local = month - 1;

    if (local < 0) {
      local = 11;
      setYear(year - 1);
    }
    setMonth(local);
  };

  const next = () => {
    let local = month + 1;

    if (local > 11) {
      local = 0;
      setYear(year + 1);
    }
    setMonth(local);
  };

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
          onClick={prior}
          fill="primary"
          data-testid="previous-month-arrow"
        />
        <Month bold>
          {new Intl.DateTimeFormat(getLocale(), {
            month: 'long',
            year: 'numeric',
          }).format(new Date(year, month, 1, 0, 0, 0))}
        </Month>
        <Icon
          style={{ cursor: 'pointer' }}
          as={ChevronRight}
          width="large"
          height="large"
          onClick={next}
          fill="primary"
          data-testid="next-month-arrow"
        />
      </Box>
      <DaysWrapper>
        {weekDays.map(weekDay => (
          <Day>{weekDay.toLocaleUpperCase()}</Day>
        ))}
      </DaysWrapper>
      <Box>{getDays()}</Box>
    </CalendarWrapper>
  );
}

Calendar.propTypes = {
  type: oneOf(['single', 'range']).isRequired,
  startDate: instanceOf(Date),
  endDate: instanceOf(Date),
  onSelectSingle: func,
  onSelectRange: func,
  disablePastDates: bool,
  disableFutureDates: bool,
  disablePastFrom: instanceOf(Date),
  disableFutureFrom: instanceOf(Date),
  locale: string,
};

export default Calendar;
