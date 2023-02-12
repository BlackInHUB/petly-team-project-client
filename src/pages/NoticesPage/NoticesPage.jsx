import { NoticesSearch } from 'components/Notices/NoticesSearch/NoticesSearch';
import { Loader } from 'components/Loader/Loader';
import { NoticesCategoriesNav } from 'components/Notices/NoticesCategoriesNav/NoticesCategoriesNav';
import { Suspense, useState, useEffect } from 'react';
import { Outlet } from 'react-router';
import { Title } from 'components/baseComponents/Title/Title';
import { Box, PageBox } from './NoticesPage.styled';
import { AddNoticeButton } from 'components/Notices/AddNoticeButton/AddNoticeButton';
import PaddingWrapper from '../../components/baseComponents/PaddingWrapper/PaddingWrapper';
import ModalAddNotice from 'components/Notices/ModalAddNotice/ModalAddNotice';
import LearnMoreModal from 'components/Notices/LearnMoreModal/LearnMoreModal';
import { createPortal } from 'react-dom';
import { useAuth } from 'hooks/useAuth';
import useNotices from 'hooks/useNotices';
import Notiflix from 'notiflix/build/notiflix-notify-aio';

const modalRoot = document.querySelector('#modal-root');

const NoticesPage = () => {
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [isInfoOpen, setIsInfoOpen] = useState({ open: false, id: null });
  const { isLoggedIn } = useAuth();
  const { isLoading } = useNotices();

  useEffect(() => {
    if (!isAddOpen || !isInfoOpen.open) document.body.style.overflow = '';
  }, [isAddOpen, isInfoOpen]);

  const handleAddModalOpen = () => {
    isLoggedIn
      ? setIsAddOpen(!isAddOpen)
      : Notiflix.Notify.failure(`You must log in to add a Notice`, {
          timeout: 3000,
        });
  };

  const handleInfoOpen = id => {
    setIsInfoOpen({ open: !isInfoOpen.open, id });
  };

  return (
    <PageBox>
      <PaddingWrapper>
        <div>
          <Title value={'Find your favorite pet'} />
          <NoticesSearch />
          <Box>
            <NoticesCategoriesNav />
            <AddNoticeButton onOpenAddsPet={handleAddModalOpen} />
          </Box>
        </div>
        <Suspense fallback={<Loader />}>
          <Outlet context={{ handleInfoOpen }} />
        </Suspense>
      </PaddingWrapper>
      {isAddOpen &&
        isLoggedIn &&
        createPortal(
          <ModalAddNotice
            width="608px"
            paddings="40px 80px"
            setShow={handleAddModalOpen}
          />,
          modalRoot
        )}
      {isInfoOpen.open &&
        createPortal(
          <LearnMoreModal
            width="704px"
            id={isInfoOpen.id}
            setShow={handleInfoOpen}
          />,
          modalRoot
        )}
      {isLoading && createPortal(<Loader />, modalRoot)}
    </PageBox>
  );
};

export default NoticesPage;
