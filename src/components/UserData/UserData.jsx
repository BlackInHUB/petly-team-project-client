
// import { useSelector, useDispatch } from 'react-redux'
// import { useState } from 'react'
// import { authSelectors } from '../../redux/auth'
// import { authOperations } from '../../redux/auth'
// import defaultUserPhoto from '../../images/UserData/defaultUserPhoto.png'
// import { ReactComponent as EditCamera} from '../../images/icons/userData/camera.svg'
// import { ReactComponent as Pencil} from '../../images/icons/userData/pencil.svg'
// import { ReactComponent as CheckMark } from '../../images/icons/userData/checkMark.svg'
// import { UserDataContainer, 
//     UserDataImgWrapper, UserDataImg, EditCameraWrapper, EditPhotoLabel, UserDataInputBtnWrapper,
//     EditPhotoInput, UserDataFormItemWrapper, UserDataLabel, UserDataInput, UserDataBtn } from './UserData.styled'

// export const UserData = () => {
 
//     const dispatch = useDispatch();
//     const userName = useSelector(authSelectors.getUserName)
//     const userEmail = useSelector(authSelectors.getUserEmail)
//     const userBirthday = useSelector(authSelectors.getUserBirthday)
//     const userPhone = useSelector(authSelectors.getUserPhone)
//     const userCity = useSelector(authSelectors.getUserCity)
//     const userAvatarUrl = useSelector(authSelectors.getUserAvatarUrl)    

//     const user = useSelector(authSelectors.getUser)


//     const [active, setActive] = useState(false)
//     const [searchLine, setSearchLine] = useState(userName ?? '');
//     const [inputEmail, setInputEmail] = useState(userEmail ?? '');
//     const [inputPhone, setInputPhone] = useState(userPhone ?? '');

//     const changeAvatar = e => {
//         const data = new FormData()
//         data.append('avatar', e.target.files[0])
//         dispatch(authOperations.update(data))
//     }


//     const handleChange = (e) => {
//         const {name, value} = e.currentTarget
//         setSearchLine(e.currentTarget.value)
//         console.log('name', name)
//         console.log('value', value)
//     }; 

//     const handleChangeEmail = (e) => {
//         const {name, value} = e.currentTarget
//         setInputEmail(e.currentTarget.value)
//         console.log('name', name)
//         console.log('value', value)
//     }; 

//     const handleChangePhone = (e) => {
//         const {name, value} = e.currentTarget
//         setInputPhone(e.currentTarget.value)
//         console.log('name', name)
//         console.log('value', value)
//     }; 


//     const handleClick = (e) => {
//         e.preventDefault();
//         setActive(true)
//     if (active === true){
//         // const data = {
//         //     name: searchLine,
//         //   };
       
//         // console.log("data", data)
//         dispatch(authOperations.update({username: searchLine}))
//         setActive(false)
//     }
//     }

//     const handleClickEmail = (e) => {
//         e.preventDefault();
//         setActive(true)
//     if (active === true){
//         // const data = {
//         //     name: searchLine,
//         //   };
       
//         // console.log("data", data)
//         dispatch(authOperations.update({email: inputEmail}))
//         setActive(false)
//     }
//     }

//     const handleClickPhone = (e) => {
//         e.preventDefault();
//         setActive(true)
//     if (active === true){
//         // const data = {
//         //     name: searchLine,
//         //   };
       
//         // console.log("data", data)
//         dispatch(authOperations.update({phone: inputPhone}))
//         setActive(false)
//     }
//     }
    
//     return (
//         <>
//         <UserDataContainer>
//             <UserDataImgWrapper>
//                 <UserDataImg src={userAvatarUrl ? userAvatarUrl : defaultUserPhoto} alt='User' />
//                 {/* <UserDataImg src={userAvatarUrl} alt='User' /> */}
//                 <form>
//                     <EditCameraWrapper>
//                         <EditPhotoLabel htmlFor="user_photo">
//                             Edit photo
//                         </EditPhotoLabel>
//                         <EditCamera />
//                     </EditCameraWrapper>
//                     <EditPhotoInput  type="file" name='edit photo' id="user_photo" onChange={changeAvatar}/>
//                 </form>
//             </UserDataImgWrapper>


//             <form>
//                 {/* <UserDataFormItemWrapper>
//                     <UserDataLabel htmlFor="user_name"> Name: </UserDataLabel>
//                     <UserDataInputBtnWrapper>
//                         <UserDataInput onChange={handleChange} disabled={!active} defaultValue={user.username} type="text" name='name' id="user_name"/> 
//                         <UserDataBtn onClick={handleClick}>{!active ? <Pencil /> : <CheckMark />}</UserDataBtn>
//                     </UserDataInputBtnWrapper>                 
//                 </UserDataFormItemWrapper> */}

//                 <UserDataFormItemWrapper>
//                     <UserDataLabel htmlFor="user_email"> Email: </UserDataLabel>
//                     <UserDataInputBtnWrapper>
//                         <UserDataInput onChange={handleChangeEmail} disabled={!active} defaultValue={userEmail} type="email" name='email' id="user_email"/>
//                         <UserDataBtn onClick={handleClickEmail}>{!active ? <Pencil /> : <CheckMark />}</UserDataBtn>   
//                     </UserDataInputBtnWrapper>             
//                 </UserDataFormItemWrapper>

//                 <UserDataFormItemWrapper>
//                     <UserDataLabel htmlFor="user_birthday"> Birthday: </UserDataLabel>
//                     <UserDataInputBtnWrapper>
//                         <UserDataInput defaultValue={userBirthday || '01.01.1900'} type="text" name='birthday' id="user_birthday"/>
//                         <UserDataBtn type='button'><Pencil /></UserDataBtn>
//                     </UserDataInputBtnWrapper>          
//                 </UserDataFormItemWrapper>

//                 <UserDataFormItemWrapper>
//                     <UserDataLabel htmlFor="user_phone"> Phone: </UserDataLabel>
//                     <UserDataInputBtnWrapper>
//                         <UserDataInput onChange={handleChangePhone} disabled={!active} defaultValue={userPhone} type="tel" name='phone' id="user_phone" />
//                         <UserDataBtn onClick={handleClickPhone}>{!active ? <Pencil /> : <CheckMark />}</UserDataBtn>
//                     </UserDataInputBtnWrapper>                
//                 </UserDataFormItemWrapper>

//                 <UserDataFormItemWrapper>
//                     <UserDataLabel htmlFor="user_city"> City: </UserDataLabel>
//                     <UserDataInputBtnWrapper>
//                         <UserDataInput defaultValue={userCity} type="text" name='city' id="user_city" />
//                         <UserDataBtn type='button'><Pencil /></UserDataBtn>
//                     </UserDataInputBtnWrapper>                
//                 </UserDataFormItemWrapper>
//             </form>
//         </UserDataContainer>
//         </>
//     )
// }







import { useDispatch } from 'react-redux'
import { authOperations } from '../../redux/auth'
import defaultUserPhoto from '../../images/UserData/defaultUserPhoto.png'
import { ReactComponent as EditCamera} from '../../images/icons/userData/camera.svg'
import { UserDataItem } from './UserDataItem/UserDataItem'
import { UserDataContainer, 
    UserDataImgWrapper, UserDataImg, EditCameraWrapper, EditPhotoLabel,
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

            </UserDataContainer>
        </>
    )
}