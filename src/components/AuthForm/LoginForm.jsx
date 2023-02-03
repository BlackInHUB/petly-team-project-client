import React from 'react';
import { useDispatch } from 'react-redux';
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
import { useAuth } from 'hooks/useAuth';

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
  const {isError, isLoading} = useAuth();

  const onSubmit = (values) => {
    dispatch(authOperations.login(values));
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ errors, touched }) => (
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
            <ButtonStyled type="submit">
              {isLoading ? (
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
