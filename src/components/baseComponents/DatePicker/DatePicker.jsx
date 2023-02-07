import PropTypes from 'prop-types';

import { DatePickerStyled } from './style';

const DatePicker = props => {
  return (
    <DatePickerStyled
      selected={props.birthdayDate}
      onSelect={date => props.setBirthdayDate(date)}
      dateFormat="yyyy-MM-dd"
      id="petBirthday"
      name="birthday"
      onChange={date => props.setBirthdayDate(date)}
      onKeyDown={e => {
        e.preventDefault();
      }}
    ></DatePickerStyled>
  );
};

DatePicker.propTypes = {
  birthdayDate: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.instanceOf(Date),
  ]),
  setBirthdayDate: PropTypes.func.isRequired,
};

export default DatePicker;
