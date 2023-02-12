import { PetsData } from 'components/PetsData/PetsData';
import { UserData } from 'components/UserData/UserData';
import { UserDataTitle } from 'components/UserDataTitle/UserDataTitle';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import LearnMoreModal from 'components/Notices/LearnMoreModal/LearnMoreModal';

import { authOperations } from 'redux/auth';

import { createPortal } from 'react-dom';

import { AiOutlineMessage } from 'react-icons/ai';

import { useState, useEffect } from 'react';
import {
  UserDataContainer,
  UserPageWrapper,
  UserDataWrapper,
} from './ProfilePage.styled';
import { useAuth } from 'hooks/useAuth';
import Button from 'components/baseComponents/Button/Button';
import NoticeList from './NoticeList/NoticeList';

const ProfilePage = () => {
  const [option, setOption] = useState('Pets');
  const [learnMoreModal, setLearnMoreModal] = useState(false);
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
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '20px 0',
            }}
          >
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
              buttonStyle={'secondary'}
              style={{ width: 'max-content', height: '35px' }}
            >
              <AiOutlineMessage />
            </Button>
          </div>
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
      </UserPageWrapper>
    </>
  );
};

export default ProfilePage;
