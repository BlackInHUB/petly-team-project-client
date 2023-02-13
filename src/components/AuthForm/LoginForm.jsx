import React from 'react';
import { useDispatch } from 'react-redux';
import authOperations from 'redux/auth/authOperations';
import { Formik } from 'formik';
import { FormStyled, Header, Error, NavLinkStyled, BottomText } from './style';

import Button from '../baseComponents/Button/Button';
import ButtonSpinner from 'components/baseComponents/ButtonSpinner/ButtonSpinner';
import Input from 'components/baseComponents/Input/Input';
import FieldsWrapper from 'components/baseComponents/FieldsWrapper/FieldsWrapper';

import * as yup from 'yup';
import { useAuth } from '../../hooks/useAuth';

const initialValues = { email: '', password: '', showPassword: false };

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
});

export default function LoginForm() {
  const dispatch = useDispatch();
  const { isError, isLoggedIn } = useAuth();

  const onSubmit = async (values, { setSubmitting }) => {
    try {
      await dispatch(authOperations.login(values));
      if (isLoggedIn) await dispatch(authOperations.fetchCurrentUser());
    } catch (e) {
      console.log(e.message);
      console.log('catch');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ isSubmitting, errors, touched }) => (
        <FormStyled noValidate>
          <Header>Login</Header>
          <FieldsWrapper>
            <Input name="email" text="Email">
              {touched.email && errors.email && <Error>{errors.email}</Error>}
            </Input>

            <Input name="password" password={true} text="Password">
              {touched.password && errors.password && (
                <Error>{errors.password}</Error>
              )}
            </Input>
          </FieldsWrapper>
          <div>
            <Button type="submit" buttonStyle="primary" disabled={isSubmitting}>
              {isError && <Error>{isError}</Error>}
              {isSubmitting ? <ButtonSpinner /> : <span>Login</span>}
            </Button>
          </div>
          <span>
            <BottomText>Don't have an account? &nbsp;</BottomText>
            <NavLinkStyled
              to={'/register'}
              key={'home'}
              onClick={() => {
                dispatch(authOperations.eraseErrors());
              }}
              end
            >
              Register
            </NavLinkStyled>
          </span>
        </FormStyled>
      )}
    </Formik>
  );
}
