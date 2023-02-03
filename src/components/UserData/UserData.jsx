

import { useDispatch } from 'react-redux'
import { authOperations } from '../../redux/auth'
import defaultUserPhoto from '../../images/UserData/defaultUserPhoto.png'
import { ReactComponent as EditCamera} from '../../images/icons/userData/camera.svg'
import { UserDataItem } from './UserDataItem/UserDataItem'
import { UserDataTitle } from 'components/UserDataTitle/UserDataTitle'
import { UserDataContainer, UserDataCommonContainer,
    UserDataImgWrapper, UserDataImg, EditCameraWrapper, EditPhotoLabel,
    EditPhotoInput, UserDataList } from './UserData.styled'
import { useAuth } from 'hooks/useAuth'
export const UserData = () => {
    const dispatch = useDispatch();   
    const { user } = useAuth()
   
    const changeAvatar = e => {
        const data = new FormData()
        data.append('avatar', e.target.files[0])
        dispatch(authOperations.update(data))
    }
    
    return (
        <>
        <UserDataContainer>
            <UserDataTitle title='My information:'/>
            <UserDataCommonContainer>
            <UserDataImgWrapper>
                <UserDataImg src={user.avatarUrl ? user.avatarUrl : defaultUserPhoto} alt='User' />
                <form>
                    <EditCameraWrapper>
                        <EditPhotoLabel htmlFor="user_photo">
                            Edit photo
                        </EditPhotoLabel>
                        <EditCamera />
                    </EditCameraWrapper>
                    <EditPhotoInput  type="file" name='edit photo' id="user_photo" onChange={changeAvatar}/>
                </form>
            </UserDataImgWrapper>

            <UserDataList>
                <UserDataItem label={'Name:'} defaultValue={user.username} type="text" name='name' />

                <UserDataItem label={'Email:'} defaultValue={user.email} type="email" name='email' />

                <UserDataItem label={'Birthday:'} defaultValue={user.birthday || "01.01.1900"} type="text" name='birthday' />

                <UserDataItem label={'Phone:'} defaultValue={user.phone} type="tel" name='phone' />

                <UserDataItem label={'City:'} defaultValue={user.city} type="text" name='city' />
            </UserDataList>
            </UserDataCommonContainer>

            </UserDataContainer>
        </>
    )
}