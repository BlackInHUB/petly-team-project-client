import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/useAuth';
import authOperations from 'redux/auth/authOperations';
import { Formik } from 'formik';

import Button from '../baseComponents/Button/Button';
import ButtonSpinner from '../baseComponents/ButtonSpinner/ButtonSpinner';
import Input from 'components/baseComponents/Input/Input';
import FieldsWrapper from '../baseComponents/FieldsWrapper/FieldsWrapper';

import { MobPhoneInput } from '../baseComponents/PhoneInput/style';

import {
  FormStyled,
  Header,
  Error,
  NavLinkStyled,
  BottomText,
  //PhoneInputStyled,
} from './style';
import * as yup from 'yup';

const initialValues = {
  email: '',
  password: '',
  confirmPassword: '',
  name: '',
  city: '',
  phone: '',
};

const phoneRegExp = /^\+\d{7,15}$/;

const validationSchema = yup.object({
  email: yup
    .string()
    .matches(
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      'Invalid email format'
    )
    .required('Required'),
  password: yup
    .string()
    .min(7, 'Password is too short - should be 7 chars minimum.')
    .max(32, 'Password is too long - should be 32 chars maximum.')
    .matches(
      /^[a-zA-Z0-9!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]*$/,
      'Password can only contain Latin letters, and without spaces.'
    )
    .required('No password provided'),
  confirmPassword: yup.string().when('password', {
    is: val => (val && val.length > 0 ? true : false),
    then: yup
      .string()
      .oneOf([yup.ref('password')], 'Both password need to be the same'),
  }),
  name: yup.string().required('Required'),
  city: yup
    .string()
    .matches(
      /^\s*([A-ZёЁЇїІіЄєҐґА-Я][a-zа-я]+,\s?)?[A-ZёЁЇїІіЄєҐґА-Я][a-zа-я]+\s*$/,
      'put City, Region or only City'
    )
    .required('Required'),
});

export default function RegisterForm() {
  const [step, setStep] = useState(1);
  const [nextError, setNextError] = useState(null);

  const [phoneNumber, setPhoneNumber] = useState('');
  const [isPhoneValid, setPhoneIsValid] = useState(null);

  useEffect(() => {}, [step]);

  const dispatch = useDispatch();

  const { isError } = useAuth();

  const onNext = (errors, values) => {
    console.log(values);
    if (!values.email || !values.password || !values.confirmPassword) {
      setNextError('Please, enter all data');
    }
    if (
      !errors.email &&
      !errors.password &&
      !errors.confirmPassword &&
      values.email &&
      values.password &&
      values.confirmPassword
    ) {
      setStep(prevState => prevState + 1);
      setNextError(null);
      dispatch(authOperations.eraseErrors());
    }
  };

  const onPrevious = () => {
    setStep(prevState => prevState - 1);

    dispatch(authOperations.eraseErrors());
  };

  const phoneValidation = () => {
    return phoneRegExp.test(`+${phoneNumber}`);
  };

  const onBlurPhone = () => {
    phoneValidation()
      ? setPhoneIsValid(null)
      : setPhoneIsValid('incorrect phone number');
  };

  const onSubmit = async (values, { setSubmitting }) => {
    const { name, email, city, password } = values;
    const phone = `+${phoneNumber}`;
    const data = { name, email, city, phone, password };

    try {
      if (phoneValidation()) {
        setPhoneIsValid(null);
        await dispatch(authOperations.register(data));
      } else setPhoneIsValid('incorrect phone number');
    } catch (e) {
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ isSubmitting, errors, touched, values }) => (
          <FormStyled>
            <Header>Registration</Header>

            <FieldsWrapper visible={step === 1 ? true : false}>
              <Input name="email" text="Email">
                <Error>{touched.email ? errors.email : null}</Error>
              </Input>
              <div>
                <Input name="password" password={true} text="Password" />
                <Error>{touched.password ? errors.password : null}</Error>
              </div>
              <div>
                <Input
                  name="confirmPassword"
                  password={true}
                  text="Confirm Password"
                />
                <Error>
                  {touched.confirmPassword ? errors.confirmPassword : null}
                </Error>
              </div>
            </FieldsWrapper>

            <FieldsWrapper visible={step === 2 ? true : false}>
              <Input name="name" text="Name">
                <Error>{touched.name ? errors.name : null}</Error>
              </Input>
              <Input name="city" text="City, region">
                <Error>{touched.city ? errors.city : null}</Error>
              </Input>
              <div>
                <MobPhoneInput
                  inputProps={{
                    id: 'phone',
                  }}
                  onBlur={() => onBlurPhone()}
                  countryCodeEditable={false}
                  name="phone"
                  autoComplete="off"
                  country={'ua'}
                  placeholder="Mobile phone"
                  value={phoneNumber}
                  onChange={value => {
                    setPhoneNumber(value);
                  }}
                />

                {isPhoneValid ? <Error>{isPhoneValid}</Error> : null}
              </div>
            </FieldsWrapper>

            <FieldsWrapper visible={step === 1 ? true : false}>
              <Button onClick={() => onNext(errors, values)}>Next</Button>
              <Error>{nextError}</Error>
            </FieldsWrapper>

            <FieldsWrapper visible={step === 2 ? true : false}>
              <div>
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? <ButtonSpinner /> : <span>Register</span>}
                </Button>
                <Error>{isError}</Error>
              </div>
              <div>
                <Button
                  buttonStyle="secondary"
                  disabled={isSubmitting}
                  onClick={onPrevious}
                >
                  Back
                </Button>
              </div>
            </FieldsWrapper>

            <span>
              <BottomText>Already have an account? &nbsp;</BottomText>
              <NavLinkStyled
                to={'/login'}
                key={'home'}
                onClick={() => {
                  dispatch(authOperations.eraseErrors());
                }}
                end
              >
                Login
              </NavLinkStyled>
            </span>
          </FormStyled>
        )}
      </Formik>
    </>
  );
}
