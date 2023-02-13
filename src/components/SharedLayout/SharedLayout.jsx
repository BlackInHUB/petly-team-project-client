import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Loader } from '../Loader/Loader';
import { AppBar } from '../AppBar/AppBar';
import { SharedLayoutStyled } from './SharedLayoutStyled';
import ToTopBtn from 'components/ToTopBtn/ToTopBtn';

import PaddingWrapper from '../baseComponents/PaddingWrapper/PaddingWrapper';

export const SharedLayout = () => {
  return (
    <SharedLayoutStyled>
      <PaddingWrapper>
        <AppBar />
        <ToTopBtn />
      </PaddingWrapper>

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </SharedLayoutStyled>
  );
};
