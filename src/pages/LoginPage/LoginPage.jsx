import React, { useState, useEffect } from 'react';
import LoginForm from '../../components/AuthForm/LoginForm';
import { debounce } from 'utils/dobounce';

import {
  PageWrapper,
  BackgroundMobileIconStyled,
  BackgroundTabletIconStyled,
  BackgroundPCIconStyled,
} from './style';

export default function LoginPage() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    debounce(function handleResize() {
      setWindowWidth(window.innerWidth);
    }, 300);
  }, [windowWidth]);

  useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      setWindowWidth(window.innerWidth);
    }, 300);

    window.addEventListener('resize', debouncedHandleResize);

    return _ => {
      window.removeEventListener('resize', debouncedHandleResize);
    };
  });

  return (
    <>
      <PageWrapper onClick={e => e.stopPropagation()}>
        <LoginForm />
      </PageWrapper>
      {windowWidth <= 767 && <BackgroundMobileIconStyled />}
      {768 <= windowWidth && windowWidth <= 1279 && (
        <BackgroundTabletIconStyled />
      )}
      {windowWidth >= 1280 && <BackgroundPCIconStyled />}
    </>
  );
}
