import { PetsData } from 'components/PetsData/PetsData';
import { UserData } from 'components/UserData/UserData';
import { UserDataTitle } from 'components/UserDataTitle/UserDataTitle';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import { useEffect } from 'react';
import {
  UserDataContainer,
  UserPageWrapper,
  UserDataWrapper,
} from './ProfilePage.styled';
import { useAuth } from 'hooks/useAuth';

const ProfilePage = () => {
  //const [user, setUser] = useState(null);

  const params = useParams();
  const dispatch = useDispatch();
  //setUser(dispatch(authOperations.profile(params.id)));
  const { profile } = useAuth();
  useEffect(() => {
    dispatch(authOperations.profile(params.id));
  }, [dispatch, params.id]);

  return (
    <>
      <UserPageWrapper>
        <UserDataWrapper>
          <UserDataTitle title={profile?.user.name} />
          <UserDataContainer>
            <UserData />
          </UserDataContainer>
        </UserDataWrapper>
        <PetsData />
      </UserPageWrapper>
    </>
  );
};

export default ProfilePage;
