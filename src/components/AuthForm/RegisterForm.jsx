import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/useAuth';
import authOperations from 'redux/auth/authOperations';
import { Formik } from 'formik';

import FieldsWrapper from '../baseComponents/FieldsWrapper/FieldsWrapper';
import {
  FormStyled,
  FieldStyled,
  ButtonStyled,
  Header,
  Error,
  NavLinkStyled,
  BottomText,
  ButtonType2Styled,
  SpinnerStyled,
  FieldWrapper,
  Label,
} from './style';
import * as yup from 'yup';

import PhoneInput from 'react-phone-input-2';
import './material.css';

const initialValues = {
  email: '',
  password: '',
  confirmPassword: '',
  name: '',
  city: '',
  phone: '',
};

const phoneRegExp = /^(\+\d{1,3}[- ]?)?\d{10}$/;

const validationSchema = yup.object({
  email: yup.string().email('Invalid email format').required('Required'),
  password: yup
    .string()
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(
      /^[a-zA-Z0-9!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]*$/,
      'Password can only contain Latin letters.'
    )
    .required('No password provided'),
  confirmPassword: yup.string().when('password', {
    is: val => (val && val.length > 0 ? true : false),
    then: yup
      .string()
      .oneOf([yup.ref('password')], 'Both password need to be the same'),
  }),
  name: yup.string().required('Required'),
  city: yup.string().required('Required'),
});

export default function RegisterForm() {
  const [step, setStep] = useState(1);
  const [nextError, setNextError] = useState(null);

  const [phoneNumber, setPhoneNumber] = useState('');
  const [isPhoneValid, setPhoneIsValid] = useState(null);

  useEffect(() => {
  }, [step]);

  const dispatch = useDispatch();

  const {isError} = useAuth();

  const onNext = (errors, touched) => {
    if (!touched.email || !touched.password || !touched.confirmPassword) {
      setNextError('Fill all data');
    }
    if (
      !errors.email &&
      !errors.password &&
      !errors.confirmPassword &&
      touched.email &&
      touched.password &&
      touched.confirmPassword
    ) {
      setStep(prevState => prevState + 1);
      setNextError(null);
    }
  };

  const onPrevious = () => {
    setStep(prevState => prevState - 1);
  };

  const phoneValidation = () => {
    return phoneRegExp.test(`+${phoneNumber}`);
  };

  const onSubmit = (values, { setSubmitting }) => {
    const { name, email, city, password } = values;
    const phone = `+${phoneNumber}`;
    const data = { name, email, city, phone, password };

    if (phoneValidation()) {
      setPhoneIsValid(null);

      dispatch(authOperations.register(data));

    } else setPhoneIsValid('incorrect phone number');
    setSubmitting(false);
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ isSubmitting, errors, touched }) => (
          <FormStyled>
            <Header>Registration</Header>

            <FieldsWrapper visible={step === 1 ? true : false}>
              <FieldWrapper>
                <FieldStyled id="email" name="email" required />
                <Label htmlFor="email">Email</Label>
                <Error>{touched.email ? errors.email : null}</Error>
              </FieldWrapper>

              <FieldWrapper>
                <FieldStyled
                  id="password"
                  type="password"
                  name="password"
                  autoComplete="new-password"
                  required
                />
                <Label htmlFor="password">Password</Label>
                <Error>{touched.password ? errors.password : null}</Error>
              </FieldWrapper>
              <FieldWrapper>
                <FieldStyled
                  id="confirmPassword"
                  type="password"
                  name="confirmPassword"
                  autoComplete="new-password"
                  required
                />
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Error>
                  {touched.confirmPassword ? errors.confirmPassword : null}
                </Error>
              </FieldWrapper>
            </FieldsWrapper>

            <FieldsWrapper visible={step === 2 ? true : false}>
              <FieldWrapper>
                <FieldStyled
                  id="name"
                  name="name"
                  autoComplete="off"
                  required
                />
                <Label htmlFor="name">Name</Label>
                <Error>{touched.name ? errors.name : null}</Error>
              </FieldWrapper>
              <FieldWrapper>
                <FieldStyled
                  id="city"
                  name="city"
                  autoComplete="off"
                  required
                />
                <Label htmlFor="city">City, region</Label>
                <Error>{touched.city ? errors.city : null}</Error>
              </FieldWrapper>
              <div>
                <PhoneInput
                  inputProps={{
                    id: 'phone',
                  }}
                  name="phone"
                  autoComplete="off"
                  country={'ua'}
                  placeholder="Mobile phone"
                  value={phoneNumber}
                  onChange={value => setPhoneNumber(value)}
                />

                {isPhoneValid ? <Error>{isPhoneValid}</Error> : null}
              </div>
            </FieldsWrapper>

            <FieldsWrapper visible={step === 1 ? true : false}>
              <ButtonStyled
                type="button"
                onClick={() => onNext(errors, touched)}
              >
                Next
              </ButtonStyled>
              <Error>{nextError}</Error>
            </FieldsWrapper>

            <FieldsWrapper visible={step === 2 ? true : false}>
              <div>
                <ButtonStyled type="submit" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <SpinnerStyled icon="fa-solid fa-spinner" size="1.5rem" />
                  ) : (
                    <span>Register</span>
                  )}
                </ButtonStyled>
                <Error>{isError}</Error>
              </div>
              <div>
                <ButtonType2Styled
                  type="button"
                  disabled={isSubmitting}
                  onClick={onPrevious}
                >
                  Back
                </ButtonType2Styled>
              </div>
            </FieldsWrapper>

            <span>
              <BottomText>Already have an account? &nbsp;</BottomText>
              <NavLinkStyled
                to={'/login'}
                key={'home'}
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
