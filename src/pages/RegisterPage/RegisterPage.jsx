import React, { useState, useEffect } from 'react';
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
  ButtonType2Styled,
  SpinnerStyled,
  PageWrapper,
  BackgroundMobileIconStyled,
  BackgroundTabletIconStyled,
  BackgroundPCIconStyled,
  FieldWrapper,
  Label,
} from './style';
import * as yup from 'yup';
import 'yup-phone';

const initialValues = {
  email: '',
  password: '',
  confirmPassword: '',
  name: '',
  city: '',
  phone: '',
};

// const phoneRegExp =
//   /^(((0|((\\+)?65([- ])?))|((\\((\\+)?65\\)([- ])?)))?[8-9]\\d{7})?$/;
// /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

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
  city: yup.string().required('No password provided'),
  phone: yup.string().phone().required('No mobile phone provided'),
});

export default function RegisterPage() {
  const [step, setStep] = useState(1);
  // const promisedState = newState =>
  //   new Promise(resolve => setStep(newState, resolve));
  useEffect(() => {
  }, [step]);
  const dispatch = useDispatch();

  const isError = useSelector(state => state.auth.isError);
  const onNext = (errors, touched) => {
    console.log(errors, touched);
    if (
      !errors.email &&
      !errors.password &&
      !errors.confirmPassword &&
      touched.email &&
      touched.password &&
      touched.confirmPassword
    )
      setStep(prevState => prevState + 1);
  };
  const onPrevious = () => {
    setStep(prevState => prevState - 1);
  };

  const onSubmit = async (values, { setSubmitting }) => {
    console.log(values);
    const { name, email, city, phone, password } = values;
    const data = { name, email, city, phone, password };
    try {
      await dispatch(authOperations.register(data));
    } catch (e) {
      console.log(e);
    } finally {
      setSubmitting(false);
    }
  };

  const isMobile = window.matchMedia('only screen and (max-width: 767px)');
  const isTablet = window.matchMedia(
    'only screen and (max-width: 1279px) and (min-width: 768px)'
  );
  const isPC = window.matchMedia('only screen and (min-width: 1280px)');

  return (
    <>
      <PageWrapper>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          {({ isSubmitting, errors, touched }) => (
            <FormStyled>
              <Header>Registration</Header>
              {step === 1 ? (
                <FieldsWrapper>
                  <FieldWrapper>
                    <FieldStyled id="email" name="email" required />
                    <Label htmlFor="email">Email</Label>
                    <Error>{touched.email ? errors.email : null}</Error>
                  </FieldWrapper>

                  <div>
                    <FieldStyled
                      id="password"
                      type="password"
                      name="password"
                      placeholder="Password"
                    />

                    <Error>{touched.password ? errors.password : null}</Error>
                  </div>
                  <div>
                    <FieldStyled
                      id="confirmPassword"
                      type="password"
                      name="confirmPassword"
                      placeholder="Confirm Password"
                    />

                    <Error>
                      {touched.confirmPassword ? errors.confirmPassword : null}
                    </Error>
                  </div>
                </FieldsWrapper>
              ) : (
                <FieldsWrapper>
                  <div>
                    <FieldStyled
                      id="name"
                      name="name"
                      placeholder="Name"
                      autoComplete="off"
                    />
                    <Error>{touched.name ? errors.name : null}</Error>
                  </div>
                  <div>
                    <FieldStyled
                      id="city"
                      name="city"
                      placeholder="City, region"
                      autoComplete="off"
                    />
                    <Error>{touched.city ? errors.city : null}</Error>
                  </div>
                  <div>
                    <FieldStyled
                      id="phone"
                      type="phone"
                      name="phone"
                      placeholder="Mobile phone"
                      autoComplete="off"
                    />

                    <Error>{touched.phone ? errors.phone : null}</Error>
                  </div>
                </FieldsWrapper>
              )}
              {step === 1 ? (
                <div>
                  <ButtonStyled
                    type="button"
                    onClick={() => onNext(errors, touched)}
                  >
                    Next
                  </ButtonStyled>
                </div>
              ) : (
                <FieldsWrapper>
                  <div>
                    <ButtonStyled type="submit" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <SpinnerStyled
                          icon="fa-solid fa-spinner"
                          size="1.5rem"
                        />
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
              )}
              <span>
                <BottomText>Already have an account? &nbsp;</BottomText>
                <NavLinkStyled to={'/login'} key={'home'} end>
                  Login
                </NavLinkStyled>
              </span>
            </FormStyled>
          )}
        </Formik>
      </PageWrapper>
      {isMobile.matches && <BackgroundMobileIconStyled />}
      {isTablet.matches && <BackgroundTabletIconStyled />}
      {isPC.matches && <BackgroundPCIconStyled />}
    </>
  );
}
