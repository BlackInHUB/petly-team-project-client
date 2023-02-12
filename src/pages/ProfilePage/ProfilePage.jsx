import { PetsData } from 'components/PetsData/PetsData';
import { UserData } from 'components/UserData/UserData';
import { UserDataTitle } from 'components/UserDataTitle/UserDataTitle';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import LearnMoreModal from 'components/Notices/LearnMoreModal/LearnMoreModal';
import { ModalMessage } from 'components/ModalMessage/ModalMessage';

import { authOperations } from 'redux/auth';

import { createPortal } from 'react-dom';

import { AiOutlineMessage } from 'react-icons/ai';

import { useState, useEffect } from 'react';
import {
  UserDataContainer,
  UserPageWrapper,
  UserDataWrapper,
  Div,
} from './ProfilePage.styled';
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
  //setUser(dispatch(authOperations.profile(params.id)));
  const { profile } = useAuth();
  useEffect(() => {
    dispatch(authOperations.profile(params.id));
  }, [dispatch, params.id]);

  const optionsChange = e => {
    const { value } = e.target;
    setOption(value);
  };

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
        <div style={{ width: '100%' }}>
          <Div>
            <div style={{ display: 'flex', gap: '12px' }}>
              <Button
                style={{ width: 'max-content', height: '35px' }}
                buttonStyle={option === 'Pets' ? 'primary' : 'secondary'}
                value="Pets"
                onClick={e => optionsChange(e)}
              >
                Pets
              </Button>
              <Button
                style={{ width: 'max-content', height: '35px' }}
                buttonStyle={option === 'Notices' ? 'primary' : 'secondary'}
                value="Notices"
                onClick={e => optionsChange(e)}
              >
                Notices
              </Button>
            </div>
            <Button
              onClick={() => setCreateMessageModal(true)}
              buttonStyle={'secondary'}
              style={{ width: 'max-content', height: '35px' }}
            >
              <AiOutlineMessage />
            </Button>
          </Div>
          {option === 'Pets' && <PetsData pets={profile?.pets} />}
          {option === 'Notices' && (
            <NoticeList notices={profile?.notices} learnMore={learnMore} />
          )}
        </div>
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
      </UserPageWrapper>
    </>
  );
};

export default ProfilePage;
