import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Loader } from '../Loader/Loader';
import { AppBar } from '../AppBar/AppBar';
import { SharedLayoutStyled } from './SharedLayoutStyled';

import PaddingWrapper from '../baseComponents/PaddingWrapper/PaddingWrapper';

export const SharedLayout = () => {
  return (
    <SharedLayoutStyled>
      <PaddingWrapper>
        <AppBar />
      </PaddingWrapper>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </SharedLayoutStyled>
  );
};
