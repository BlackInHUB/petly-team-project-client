import React from 'react';
import LoginForm from '../../components/AuthForm/LoginForm';

import {
  PageWrapper,
  BackgroundMobileIconStyled,
  BackgroundTabletIconStyled,
  BackgroundPCIconStyled,
} from './style';

export default function LoginPage() {
  const isMobile = window.matchMedia('only screen and (max-width: 767px)');
  const isTablet = window.matchMedia(
    'only screen and (max-width: 1279px) and (min-width: 768px)'
  );
  const isPC = window.matchMedia('only screen and (min-width: 1280px)');

  return (
    <>
      <PageWrapper onClick={e => e.stopPropagation()}>
        <LoginForm />
      </PageWrapper>
      {isMobile.matches && <BackgroundMobileIconStyled />}
      {isTablet.matches && <BackgroundTabletIconStyled />}
      {isPC.matches && <BackgroundPCIconStyled />}
    </>
  );
}
