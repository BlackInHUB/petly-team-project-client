import { NoticesSearch } from 'components/Notices/NoticesSearch/NoticesSearch';
import { Loader } from 'components/Loader/Loader';
import { NoticesCategoriesNav } from 'components/Notices/NoticesCategoriesNav/NoticesCategoriesNav';
import { Suspense, useState } from 'react';
import { Outlet, useParams } from 'react-router';
import { Title } from 'components/baseComponents/Title/Title';
import { Box } from "./NoticesPage.styled";
import { AddPetButton } from 'components/AddPetButton/AddPetButton';
import PaddingWrapper from "../../components/baseComponents/PaddingWrapper/PaddingWrapper";
import ModalAddNotice from 'components/Notices/ModalAddNotice/ModalAddNotice';
import LearnMoreModal from 'components/Notices/LearnMoreModal/LearnMoreModal';
import { createPortal } from 'react-dom';
import { useAuth } from 'hooks/useAuth';
import useNotices from 'hooks/useNotices';
const modalRoot = document.querySelector('#modal-root');

const NoticesPage = () => {
  const {categoryName: category} = useParams();
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [isInfoOpen, setIsInfoOpen] = useState({open: false, id: null});
  const {isLoggedIn} = useAuth();
  const {isLoading} = useNotices();

  const handleAddModalOpen = () => {
    setIsAddOpen(!isAddOpen);
  };

  const handleInfoOpen = (id) => {
    setIsInfoOpen({open: !isInfoOpen.open, id});
  };
  
  return (
    <>
    <PaddingWrapper>
      <div>
        <Title value={'Find your favorite pet'}/>
        <NoticesSearch category={category}/>
        <Box>
          <NoticesCategoriesNav/>
          <AddPetButton onOpenAddsPet={handleAddModalOpen}/>
        </Box>
      </div>
      <Suspense fallback={<Loader />}>
        <Outlet context={{handleInfoOpen, category}}/>
      </Suspense>
    </PaddingWrapper>
    {isAddOpen && isLoggedIn &&
    createPortal(
    <ModalAddNotice
    width="608px"
    paddings="40px 80px"
    setShow={handleAddModalOpen}
    />,
    modalRoot
    )
    }
    {isInfoOpen.open &&
    createPortal(
      <LearnMoreModal
      id={isInfoOpen.id}
      setShow={handleInfoOpen}
      />,
      modalRoot
    )
    }
    {isLoading &&
    createPortal(
      <Loader />,
      modalRoot
    )
    }
    </>
  );
};

export default NoticesPage;