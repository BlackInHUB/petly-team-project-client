import { Dropdown } from './Dropdown';
import { useState, useEffect } from 'react';

export const DropdownGroup = props => {
  const nowDay = new Date().getDate();
  const nowMonth = new Date().getMonth() + 1;
  const nowYear = new Date().getFullYear();

  const [year, setYear] = useState(
    props.date ? props.date.slice(props.date.length - 4) : nowYear
  );
  const [day, setDay] = useState(props.date ? props.date.slice(1, 2) : nowDay);
  const [month, setMonth] = useState(
    props.date ? props.date.slice(4, 5) : nowMonth
  );

  useEffect(() => {
    const data =
      day.toString().padStart(2, '0') +
      '.' +
      month.toString().padStart(2, '0') +
      '.' +
      year.toString();
    props.setState(data);
  }, [day, month, props, year]);

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
        options={optionsYear}
        placeHolder={year}
        setValue={setYear}
      ></Dropdown>
      {/* <span>{year}</span> */}
      <Dropdown
        options={optionsMonth}
        placeHolder={optionsMonth[month - 1].label}
        setValue={setMonth}
      ></Dropdown>
      {/* <span>{month}</span> */}
      <Dropdown
        options={optionsDay}
        placeHolder={day}
        setValue={setDay}
      ></Dropdown>
      {/* <span>{day}</span> */}
    </div>
  );
};
