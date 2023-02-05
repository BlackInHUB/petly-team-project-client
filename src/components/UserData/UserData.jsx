import { useDispatch } from 'react-redux'
import { authOperations } from '../../redux/auth'
import defaultUserPhoto from '../../images/UserData/defaultUserPhoto.png'
import { ReactComponent as EditCamera} from '../../images/icons/userData/camera.svg'
import { UserDataItem } from './UserDataItem/UserDataItem'
import { UserDataContainer, 
    UserDataImgWrapper, EditCameraForm, UserDataImg, EditCameraWrapper, EditPhotoLabel,
    EditPhotoInput, UserDataList } from './UserData.styled'
import { useAuth } from 'hooks/useAuth'

export const UserData = () => {
    const dispatch = useDispatch();   
    const {user} = useAuth();

    console.log(user);
   
    const changeAvatar = e => {
        const data = new FormData()
        data.append('avatar', e.target.files[0])
        dispatch(authOperations.update(data))
    }
    
    return (
        <>
        <UserDataContainer>
            <UserDataImgWrapper>
                <UserDataImg src={user.avatarUrl ? user.avatarUrl : defaultUserPhoto} alt='User' />
                <EditCameraForm>
                    <EditCameraWrapper>
                        <EditPhotoLabel htmlFor="user_photo">
                            Edit photo
                        </EditPhotoLabel>
                        <EditCamera />
                    </EditCameraWrapper>
                    <EditPhotoInput  type="file" name='edit photo' id="user_photo" onChange={changeAvatar}/>
                </EditCameraForm>
            </UserDataImgWrapper>

            <UserDataList>
                <UserDataItem label={'Name:'} defaultValue={user.name} type="text" name='name' />

                <UserDataItem label={'Email:'} defaultValue={user.email} type="email" name='email' />

                <UserDataItem label={'Birthday:'} defaultValue={user.birthday || "01.01.1900"} type="text" name='birthday' />

                <UserDataItem label={'Phone:'} defaultValue={user.phone} type="tel" name='phone' />

                <UserDataItem label={'City:'} defaultValue={user.city} type="text" name='city' />
            </UserDataList>

            </UserDataContainer>
        </>
    )
}