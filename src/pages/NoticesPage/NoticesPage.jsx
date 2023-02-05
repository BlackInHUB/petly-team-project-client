import { NoticesSearch } from 'components/Notices/NoticesSearch/NoticesSearch';
import { Loader } from 'components/Loader/Loader';
import { NoticesCategoriesNav } from 'components/Notices/NoticesCategoriesNav/NoticesCategoriesNav';
import { AddNoticeButton } from 'components/Notices/AddNoticeButton/AddNoticeButton';
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
          <AddNoticeButton/>
        </Box>
      </div>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default NoticesPage;