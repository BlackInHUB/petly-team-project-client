import defaultUserPhoto from '../../images/defaultUserPhoto.png'
import {ReactComponent as EditCamera} from '../../images/icons/userData/camera.svg'
import { ReactComponent as Pencil} from '../../images/icons/userData/pencil.svg'
import { UserDataContainer, 
    UserDataImgWrapper, UserDataImg, EditCameraWrapper, EditPhotoLabel, UserDataInputBtnWrapper,
    EditPhotoInput, UserDataFormItemWrapper, UserDataLabel, UserDataInput, UserDataBtn } from './UserData.styled'

export const UserData = () => {
    return (
        <>
        <UserDataContainer>
            <UserDataImgWrapper>
                <UserDataImg src={defaultUserPhoto} alt='User' />
                <form>
                    <EditCameraWrapper>
                        <EditPhotoLabel for="user_photo">
                            Edit photo
                        </EditPhotoLabel>
                        <EditCamera />
                    </EditCameraWrapper>
                    <EditPhotoInput  type="file" name='edit photo' id="user_photo"/>
                </form>
            </UserDataImgWrapper>
            <form>
                <UserDataFormItemWrapper>
                    <UserDataLabel for="user_name"> Name: </UserDataLabel>
                    <UserDataInputBtnWrapper>
                        <UserDataInput type="text" name='name' id="user_name"/>
                        <UserDataBtn type='button'><Pencil /></UserDataBtn>
                    </UserDataInputBtnWrapper>                 
                </UserDataFormItemWrapper>

                <UserDataFormItemWrapper>
                    <UserDataLabel for="user_email"> Email: </UserDataLabel>
                    <UserDataInputBtnWrapper>
                        <UserDataInput type="email" name='email' id="user_email" disabled/>
                        <UserDataBtn type='button'><Pencil /></UserDataBtn>   
                    </UserDataInputBtnWrapper>             
                </UserDataFormItemWrapper>

                <UserDataFormItemWrapper>
                    <UserDataLabel for="user_birthday"> Birthday: </UserDataLabel>
                    <UserDataInputBtnWrapper>
                        <UserDataInput type="date" name='birthday' id="user_birthday"/>
                        <UserDataBtn type='button'><Pencil /></UserDataBtn>
                    </UserDataInputBtnWrapper>          
                </UserDataFormItemWrapper>

                <UserDataFormItemWrapper>
                    <UserDataLabel for="user_phone"> Phone: </UserDataLabel>
                    <UserDataInputBtnWrapper>
                        <UserDataInput type="tel" name='phone' id="user_phone" />
                        <UserDataBtn type='button'><Pencil /></UserDataBtn>
                    </UserDataInputBtnWrapper>                
                </UserDataFormItemWrapper>

                <UserDataFormItemWrapper>
                    <UserDataLabel for="user_city"> City: </UserDataLabel>
                    <UserDataInputBtnWrapper>
                        <UserDataInput type="text" name='city' id="user_city" />
                        <UserDataBtn type='button'><Pencil /></UserDataBtn>
                    </UserDataInputBtnWrapper>                
                </UserDataFormItemWrapper>
            </form>
        </UserDataContainer>
        </>
    )
}