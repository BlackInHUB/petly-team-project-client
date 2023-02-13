import { Dropdown } from './Dropdown';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

export const DropdownGroup = ({ date, setState, setDateError, height }) => {
  const nowDay = new Date().getDate();
  const nowMonth = new Date().getMonth() + 1;
  const nowYear = new Date().getFullYear();

  const [year, setYear] = useState(
    date ? parseInt(date.slice(date.length - 4)) : nowYear
  );
  const [day, setDay] = useState(date ? parseInt(date.slice(0, 2)) : nowDay);
  const [month, setMonth] = useState(
    date ? parseInt(date.slice(3, 5)) : nowMonth
  );

  useEffect(() => {
    if (
      moment(
        `${year}${month.toString().padStart(2, '0')}${day
          .toString()
          .padStart(2, '0')}`,
        'YYYYMMDD'
      ).fromNow()[0] === 'i'
    ) {
      setDay(nowDay);
      setMonth(nowMonth);
    } else setDateError && setDateError(null);

    const data =
      day.toString().padStart(2, '0') +
      '.' +
      month.toString().padStart(2, '0') +
      '.' +
      year.toString();

    setState(data);
  }, [day, month, nowDay, nowMonth, setState, setDateError, year]);

  const numberOfYears = 30;
  const optionsYear = [];
  for (let i = 0; i < numberOfYears; i++) {
    optionsYear[i] = {
      value: nowYear - i,
      label: nowYear - i,
    };
  }
  const optionsMonth = [
    { value: 1, label: 'January' },
    { value: 2, label: 'February' },
    { value: 3, label: 'March' },
    { value: 4, label: 'April' },
    { value: 5, label: 'May' },
    { value: 6, label: 'June' },
    { value: 7, label: 'July' },
    { value: 8, label: 'August' },
    { value: 9, label: 'September' },
    { value: 10, label: 'October' },
    { value: 11, label: 'November' },
    { value: 11, label: 'December' },
  ];

  const optionsDay = [];
  for (let i = 0; i < 31; i++) {
    optionsDay[i] = {
      value: i + 1,
      label: i + 1,
    };
  }

  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        gap: '12px',
      }}
    >
      <Dropdown
        height={height}
        options={optionsYear}
        placeHolder={year}
        setValue={setYear}
      ></Dropdown>
      <Dropdown
        height={height}
        options={
          year === nowYear
            ? optionsMonth.filter((item, i) => i < nowMonth)
            : optionsMonth
        }
        placeHolder={optionsMonth[month - 1].label}
        setValue={setMonth}
      ></Dropdown>
      <Dropdown
        height={height}
        options={
          year === nowYear && month === nowMonth
            ? optionsDay.filter((item, i) => i < nowDay)
            : optionsDay.filter(
                (item, i) => i < new Date(year, month, 0).getDate()
              )
        }
        placeHolder={day}
        setValue={setDay}
      ></Dropdown>
    </div>
  );
};

DropdownGroup.propTypes = {
  date: PropTypes.string,
  setState: PropTypes.func.isRequired,
  setDateError: PropTypes.func,
  height: PropTypes.string,
};
