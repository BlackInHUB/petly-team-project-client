import { NoticesSearch } from 'components/Notices/NoticesSearch/NoticesSearch';
import { Loader } from 'components/Loader/Loader';
import { NoticesCategoriesNav } from 'components/Notices/NoticesCategoriesNav/NoticesCategoriesNav';
import { AddNoticeButton } from 'components/Notices/AddNoticeButton/AddNoticeButton';
import { Suspense, useEffect } from 'react';
import { Outlet, useParams } from 'react-router';
import { Title } from 'components/baseComponents/Title/Title';
import { noticesOperations } from 'redux/notices';
import { useDispatch } from 'react-redux';


const NoticesPage = () => {
  const {categoryName} = useParams();
   const dispath = useDispatch();

   useEffect(() => {
      if(categoryName === '') {
         return;
      }
      dispath(noticesOperations.getAll(categoryName));
   }, [categoryName, dispath]);

  return (
    <>
      <div>
        <Title value={'Find your favorite pet'}/>
        <NoticesSearch category={categoryName}/>
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