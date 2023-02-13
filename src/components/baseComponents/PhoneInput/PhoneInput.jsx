import React from 'react';
import PropTypes from 'prop-types';

import { PhoneInputStyled, FieldWrapper, DecorativeDiv } from './style';

import { Error } from 'components/AuthForm/style';

const PhoneInput = ({
  phoneNumber,
  setPhoneNumber,
  isPhoneValid,
  setPhoneIsValid,
}) => {
  const phoneRegExp = /^\+\d{12,15}$/;

  const phoneValidation = value => {
    return phoneRegExp.test(`+${value}`);
  };

  const onBlurPhone = () => {
    phoneValidation(phoneNumber)
      ? setPhoneIsValid(null)
      : setPhoneIsValid('incorrect phone number');
  };
  return (
    <FieldWrapper>
      <PhoneInputStyled
        inputProps={{
          id: 'phone',
        }}
        onBlur={onBlurPhone}
        countryCodeEditable={false}
        name="phone"
        autoComplete="off"
        country={'ua'}
        placeholder="Mobile phone"
        value={phoneNumber}
        onChange={value => {
          setPhoneNumber(value);
          if (phoneValidation(value)) {
            setPhoneIsValid(null);
          }
        }}
      />
      <DecorativeDiv>{'Phone'}</DecorativeDiv>
      {isPhoneValid && <Error>{isPhoneValid}</Error>}
    </FieldWrapper>
  );
};

PhoneInput.propTypes = {
  phoneNumber: PropTypes.string.isRequired,
  setPhoneNumber: PropTypes.func.isRequired,
  isPhoneValid: PropTypes.string,
  setPhoneIsValid: PropTypes.func.isRequired,
};

export default PhoneInput;
