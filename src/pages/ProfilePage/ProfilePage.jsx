import { PetsData } from 'components/PetsData/PetsData';
import { UserData } from 'components/UserData/UserData';
import { UserDataTitle } from 'components/UserDataTitle/UserDataTitle';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import LearnMoreModal from 'components/Notices/LearnMoreModal/LearnMoreModal';
import { ModalMessage } from 'components/ModalMessage/ModalMessage';

import { authOperations } from 'redux/auth';

import { createPortal } from 'react-dom';

import { useState, useEffect } from 'react';
import {
  UserDataContainer,
  UserPageWrapper,
  UserDataWrapper,
  NavBtn,
  MailIcon,
  NavBtnsContainer,
} from './ProfilePage.styled';

import { UserAboutWrapper, TopContainer } from 'pages/UserPage/UserPage.styled';
import { useAuth } from 'hooks/useAuth';
import Button from 'components/baseComponents/Button/Button';
import NoticeList from './NoticeList/NoticeList';

const ProfilePage = () => {
  const [option, setOption] = useState('Pets');
  const [learnMoreModal, setLearnMoreModal] = useState(false);
  const [createMessageModal, setCreateMessageModal] = useState(false);
  const [noticeId, setNoticeId] = useState(null);

  const modalRoot = document.querySelector('#modal-root');
  const params = useParams();
  const dispatch = useDispatch();
  const { profile } = useAuth();
  useEffect(() => {
    dispatch(authOperations.profile(params.id));
  }, [dispatch, params.id]);

  const learnMore = _id => {
    setLearnMoreModal(true);
    setNoticeId(_id);
  };

  return (
    <>
      <UserPageWrapper>
        <UserDataWrapper>
          <UserDataTitle title={profile?.user.name} />
          <UserDataContainer>
            <UserData user={profile?.user} />
          </UserDataContainer>
        </UserDataWrapper>
        <UserAboutWrapper>
          <TopContainer style={{ paddingBottom: '15px' }}>
            <NavBtnsContainer>
              <NavBtn
                active={option}
                name={'Pets'}
                onClick={() => setOption('Pets')}
              >
                Pets
              </NavBtn>
              <NavBtn
                active={option}
                name={'Notices'}
                onClick={() => setOption('Notices')}
              >
                Notices
              </NavBtn>
            </NavBtnsContainer>
            <Button
              onClick={() => setCreateMessageModal(true)}
              buttonStyle={'secondary'}
              style={{
                width: 'max-content',
                height: '50px',
                padding: '5px 15px',
              }}
            >
              <MailIcon />
            </Button>
          </TopContainer>
          {option === 'Pets' && <PetsData pets={profile?.pets} />}
          {option === 'Notices' && (
            <NoticeList notices={profile?.notices} learnMore={learnMore} />
          )}
        </UserAboutWrapper>
      </UserPageWrapper>

      {learnMoreModal &&
        createPortal(
          <LearnMoreModal
            width="704px"
            id={noticeId}
            setShow={setLearnMoreModal}
          />,
          modalRoot
        )}
      {createMessageModal &&
        createPortal(
          <ModalMessage
            name={profile?.user.name}
            id={profile?.user._id}
            setShow={setCreateMessageModal}
          />,
          modalRoot
        )}
    </>
  );
};

export default ProfilePage;
