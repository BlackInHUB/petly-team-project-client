import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { authOperations } from '../../redux/auth'
import defaultUserPhoto from '../../images/UserData/defaultUserPhoto.png'
import { UserDataItem } from './UserDataItem/UserDataItem'
import { UserDataContainer, 
    UserDataImgWrapper, EditCameraForm, UserDataImg, EditCameraWrapper, EditCameraStyle, EditPhotoLabel,
    EditPhotoInput, UserDataList } from './UserData.styled'
import { useAuth } from 'hooks/useAuth'

export const UserData = () => {
    const [active, setActive] = useState('')
    const dispatch = useDispatch();   
    const {user} = useAuth();
   
    const changeAvatar = e => {
        const data = new FormData()
        data.append('avatar', e.target.files[0])
        dispatch(authOperations.update(data))
    }

    const patternName=/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/
    const patternEmail=/^\S+@\S+\.\S+$/
    // const patternDate=/\d{4}-\d{2}-\d{2}/
    const patternPhone=/^\+\d{7,15}$/
    const patternCity=/^\s*([A-ZА-Я][a-zа-я]+,\s?)?[A-ZА-Я][a-zа-я]+\s*$/

    return (
        <>
        <UserDataContainer>
            <UserDataImgWrapper>
                <UserDataImg src={user.avatarUrl ? user.avatarUrl : defaultUserPhoto} alt='User' />
                <EditCameraForm>
                    <EditCameraWrapper>
                        <EditPhotoLabel htmlFor="user_photo">
                            <EditCameraStyle />
                            <span>Edit photo</span>
                        </EditPhotoLabel>
                    </EditCameraWrapper>
                    <EditPhotoInput  type="file" name='edit photo' id="user_photo" onChange={changeAvatar}/>
                </EditCameraForm>
            </UserDataImgWrapper>

            <UserDataList>
                <UserDataItem   label={'Name:'} 
                                defaultValue={user.name} 
                                type="text" 
                                name='name'
                                active={active}
                                setActive={setActive}
                                pattern={patternName}
                                title="Name may contain only letters."
                                id="name" />

                <UserDataItem   label={'Email:'}
                                defaultValue={user.email}   
                                type="email" 
                                name='email' 
                                active={active}
                                setActive={setActive}
                                pattern={patternEmail}
                                title="Email no valid"
                                id="email"/>

                <UserDataItem   label={'Birthday:'} 
                                defaultValue={user.birthday || "01.01.1900"} 
                                type="text" 
                                name='birthday'
                                active={active}
                                setActive={setActive}
                                // pattern={patternDate}
                                title="Date may contain only format 0000-00-00"
                                id="birthday" />

                <UserDataItem   label={'Phone:'}    
                                defaultValue={user.phone} 
                                type="tel" 
                                name='phone'
                                active={active}
                                setActive={setActive}
                                pattern={patternPhone}
                                title="Phone may be formated +0000000000"
                                id="phone"  />

                <UserDataItem   label={'City:'} 
                                defaultValue={user.city} 
                                type="text" 
                                name='city'
                                active={active}
                                setActive={setActive}
                                pattern={patternCity}
                                title="City, Region"
                                id="city" />
            </UserDataList>

            </UserDataContainer>
        </>
    )
}