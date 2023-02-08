import { NoticesSearch } from 'components/Notices/NoticesSearch/NoticesSearch';
import { Loader } from 'components/Loader/Loader';
import { NoticesCategoriesNav } from 'components/Notices/NoticesCategoriesNav/NoticesCategoriesNav';
import { Suspense, useEffect } from 'react';
import { Outlet, useParams } from 'react-router';
import { Title } from 'components/baseComponents/Title/Title';
import { Box } from "./NoticesPage.styled";
import { noticesOperations } from 'redux/notices';
import { useDispatch } from 'react-redux';
import { AddPetButton } from 'components/AddPetButton/AddPetButton';
import PaddingWrapper from "../../components/baseComponents/PaddingWrapper/PaddingWrapper"

const NoticesPage = () => {
  const {categoryName: category} = useParams();
  const dispath = useDispatch();

  useEffect(() => {
    if(!category) {
      return;
    };

    dispath(noticesOperations.getAll(category));
  }, [category, dispath]);
  

  return (
    <PaddingWrapper>
      <div>
        <Title value={'Find your favorite pet'}/>
        <NoticesSearch category={category}/>
        <Box>
          <NoticesCategoriesNav/>
          <AddPetButton />
        </Box>
      </div>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </PaddingWrapper>
  );
};

export default NoticesPage;