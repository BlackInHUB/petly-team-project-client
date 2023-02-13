import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/useAuth';
import authOperations from 'redux/auth/authOperations';
import { Formik } from 'formik';

import Button from '../baseComponents/Button/Button';
import ButtonSpinner from '../baseComponents/ButtonSpinner/ButtonSpinner';
import Input from 'components/baseComponents/Input/Input';
import FieldsWrapper from '../baseComponents/FieldsWrapper/FieldsWrapper';

//import { MobPhoneInput } from '../baseComponents/PhoneInput/style';
import PhoneInput from 'components/baseComponents/PhoneInput/PhoneInput';

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
};

const validationSchema = yup.object({
  email: yup
    .string()
    .matches(
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      'Invalid email format'
    ),
  password: yup
    .string()
    .min(7, 'should be 7 chars minimum')
    .max(32, 'should be 32 chars maximum')
    .matches(
      /^[a-zA-Z0-9!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]*$/,
      'letters, numbers, symbols'
    ),
  confirmPassword: yup.string().when('password', {
    is: val => (val && val.length > 0 ? true : false),
    then: yup.string().oneOf([yup.ref('password')], 'Passwords vary'),
  }),
  name: yup.string(),
  city: yup
    .string()
    .matches(
      /^\s*([A-ZёЁЇїІіЄєҐґА-Я][a-zа-я]+,\s?)?[A-ZёЁЇїІіЄєҐґА-Я][a-zа-я]+\s*$/,
      'put City, Region or only City'
    ),
});

export default function RegisterForm() {
  const [step, setStep] = useState(1);
  const [nextError, setNextError] = useState(null);
  const [submitError, setSubmitError] = useState(null);

  const [phoneNumber, setPhoneNumber] = useState('');
  const [isPhoneValid, setPhoneIsValid] = useState(null);

  const formikRef = React.createRef();

  useEffect(() => {}, [step]);

  const dispatch = useDispatch();

  const { isError } = useAuth();

  const onNext = (errors, values) => {
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

  const handleSubmit = async (e, errors, values, setSubmitting) => {
    e.preventDefault();
    const phone = `+${phoneNumber}`;
    const data = {
      email: values.email,
      password: values.password,
      name: values.name,
      city: values.city,
      phone: phone,
    };

    try {
      setSubmitting(true);
      if (
        !errors.name &&
        !errors.city &&
        !isPhoneValid &&
        values.name &&
        values.city &&
        phone
      ) {
        setSubmitError(null);
        await dispatch(authOperations.register(data));
      } else {
        setSubmitError('Enter all data');
      }
    } catch (e) {
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        innerRef={formikRef}
      >
        {({ setSubmitting, isSubmitting, errors, touched, values }) => (
          <FormStyled
            onSubmit={e => handleSubmit(e, errors, values, setSubmitting)}
            noValidate
          >
            <Header>Registration</Header>

            <FieldsWrapper visible={step === 1 ? true : false}>
              <Input name="email" text="Email">
                {touched.email && errors.email && <Error>{errors.email}</Error>}
              </Input>

              <Input name="password" password={true} text="Password">
                {touched.password && errors.password && (
                  <Error>{errors.password}</Error>
                )}
              </Input>

              <Input
                name="confirmPassword"
                password={true}
                text="Confirm Password"
              >
                {touched.confirmPassword && errors.confirmPassword && (
                  <Error>{errors.confirmPassword}</Error>
                )}
              </Input>
            </FieldsWrapper>

            <FieldsWrapper visible={step === 2 ? true : false}>
              <Input name="name" text="Name">
                {touched.name && errors.name && <Error>{errors.name}</Error>}
              </Input>
              <Input name="city" text="City, region">
                {touched.city && errors.city && <Error>{errors.city}</Error>}
              </Input>

              <PhoneInput
                phoneNumber={phoneNumber}
                setPhoneNumber={setPhoneNumber}
                isPhoneValid={isPhoneValid}
                setPhoneIsValid={setPhoneIsValid}
              />
            </FieldsWrapper>

            <FieldsWrapper visible={step === 1 ? true : false}>
              <Button onClick={() => onNext(errors, values)}>
                Next {nextError && <Error>{nextError}</Error>}
              </Button>
            </FieldsWrapper>

            <FieldsWrapper visible={step === 2 ? true : false}>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? <ButtonSpinner /> : <span>Register</span>}
                {submitError && <Error>{submitError}</Error>}
                {!submitError && isError && <Error>{isError}</Error>}
              </Button>

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
