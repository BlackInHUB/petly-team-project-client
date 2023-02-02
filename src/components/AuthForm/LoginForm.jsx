import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import authOperations from 'redux/auth/authOperations';
import { Formik } from 'formik';
import {
  FormStyled,
  FieldStyled,
  ButtonStyled,
  Header,
  Error,
  FieldsWrapper,
  NavLinkStyled,
  BottomText,
  SpinnerStyled,
} from './style';
import * as yup from 'yup';

const initialValues = { email: '', password: '' };

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
});

export default function LoginForm() {
  const dispatch = useDispatch();
  const isError = useSelector(state => state.auth.isError);
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const onSubmit = async (values, { setSubmitting }) => {
    console.log(values);

    try {
      await dispatch(authOperations.login(values));
      if (isLoggedIn) await dispatch(authOperations.fetchCurrentUser());
    } catch (e) {
      console.log(e.message);
      console.log('catch');
    } finally {
      console.log('finally');
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
        <FormStyled>
          <Header>Login</Header>
          <FieldsWrapper>
            <div>
              <FieldStyled id="email" name="email" placeholder="Email" />
              <Error>{touched.email ? errors.email : null}</Error>
            </div>

            <div>
              <FieldStyled
                id="password"
                type="password"
                name="password"
                placeholder="Password"
              />

              <Error>{touched.password ? errors.password : null}</Error>
            </div>
          </FieldsWrapper>
          <div>
            <ButtonStyled type="submit" disabled={isSubmitting}>
              {isSubmitting ? (
                <SpinnerStyled icon="fa-solid fa-spinner" size="1.5rem" />
              ) : (
                <span>Login</span>
              )}
            </ButtonStyled>
            <Error>{isError}</Error>
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
