import React from 'react';

import {
  PageWrapper,
  BackgroundMobileIconStyled,
  BackgroundTabletIconStyled,
  BackgroundPCIconStyled,
} from './style';

import RegisterForm from 'components/AuthForm/RegisterForm';

export default function RegisterPage() {
  const isMobile = window.matchMedia('only screen and (max-width: 767px)');
  const isTablet = window.matchMedia(
    'only screen and (max-width: 1279px) and (min-width: 768px)'
  );
  const isPC = window.matchMedia('only screen and (min-width: 1280px)');

  return (
    <>
      <PageWrapper>
        <RegisterForm />
      </PageWrapper>
      {isMobile.matches && <BackgroundMobileIconStyled />}
      {isTablet.matches && <BackgroundTabletIconStyled />}
      {isPC.matches && <BackgroundPCIconStyled />}
    </>
  );
}
