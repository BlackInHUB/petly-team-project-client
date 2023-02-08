import { NoticesSearch } from 'components/Notices/NoticesSearch/NoticesSearch';
import { Loader } from 'components/Loader/Loader';
import { NoticesCategoriesNav } from 'components/Notices/NoticesCategoriesNav/NoticesCategoriesNav';
import { Suspense, useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router';
import { Title } from 'components/baseComponents/Title/Title';
import { Box } from "./NoticesPage.styled";
import { noticesOperations } from 'redux/notices';
import { useDispatch } from 'react-redux';
import { AddPetButton } from 'components/AddPetButton/AddPetButton';
import PaddingWrapper from "../../components/baseComponents/PaddingWrapper/PaddingWrapper";
import ModalAddNotice from 'components/Notices/ModalAddNotice/ModalAddNotice';
import { createPortal } from 'react-dom';
import { useAuth } from 'hooks/useAuth';
const modalRoot = document.querySelector('#modal-root');

const NoticesPage = () => {
  const {categoryName: category} = useParams();
  const dispath = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const {isLoggedIn, user} = useAuth();

  useEffect(() => {
    if(!category) {
      return;
    };

    if(user) {
      dispath(noticesOperations.getFavorites(user._id));
      dispath(noticesOperations.getOwn(user._id));
    };

    dispath(noticesOperations.getAll(category));
  }, [category, dispath, user]);

  const handleModalShown = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <>
    <PaddingWrapper>
      <div>
        <Title value={'Find your favorite pet'}/>
        <NoticesSearch category={category}/>
        <Box>
          <NoticesCategoriesNav/>
          <AddPetButton onOpenAddsPet={handleModalShown}/>
        </Box>
      </div>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </PaddingWrapper>
    {isOpen && isLoggedIn &&
    createPortal(
    <ModalAddNotice
    width="608px"
    paddings="40px 80px"
    setShow={handleModalShown}
    />,
    modalRoot
    )
    }
    </>
  );
};

export default NoticesPage;