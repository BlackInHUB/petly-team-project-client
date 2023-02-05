import { NoticesSearch } from 'components/Notices/NoticesSearch/NoticesSearch';
import { Loader } from 'components/Loader/Loader';
import { NoticesCategoriesNav } from 'components/Notices/NoticesCategoriesNav/NoticesCategoriesNav';
import { AddPetButton } from 'components/AddPetButton/AddPetButton';
import {Title, Box} from "./NoticesPage.styled"
import { Suspense} from 'react';
import { Outlet } from 'react-router';

const NoticesPage = () => {
  return (
    <>
      <div>
        <Title>Find your favorite pet</Title>
        <NoticesSearch/>
        <Box>
          <NoticesCategoriesNav/>
          <AddPetButton/>
        </Box>
      </div>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default NoticesPage;