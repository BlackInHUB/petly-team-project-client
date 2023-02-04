import { NoticesSearch } from 'components/Notices/NoticesSearch/NoticesSearch';
import { Loader } from 'components/Loader/Loader';
import { NoticesCategoriesNav } from 'components/Notices/NoticesCategoriesNav/NoticesCategoriesNav';
import { AddNoticeButton } from 'components/Notices/AddNoticeButton/AddNoticeButton';
import { Suspense} from 'react';
import { Outlet } from 'react-router';

const NoticesPage = () => {
  return (
    <>
      <div>
        <h1>Find your favorite pet</h1>
        <NoticesSearch/>
        <div>
          <NoticesCategoriesNav/>
          <AddNoticeButton/>
        </div>
      </div>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default NoticesPage;