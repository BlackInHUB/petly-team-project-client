import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { authOperations } from '../../../redux/auth'
// import { ReactComponent as Pencil} from '../../../images/icons/userData/pencil.svg'
// import { ReactComponent as CheckMark } from '../../../images/icons/userData/checkMark.svg'
import { UserDataItemWrapper, UserDataItemLabel, UserDataItemInputBtnWrapper,
    UserDataItemInput, UserDataItemBtn, PensilStyle, CheckMarkStyle } from './UserDataItem.styled'

export const UserDataItem = ({name, label, type, defaultValue}) => {
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState(defaultValue);
    const [active, setActive] = useState(false)
    


    const handleChange = (e) => {
        setInputValue(e.currentTarget.value)

        // const {name, value} = e.currentTarget
        // console.log('name', name)
        // console.log('value', value)
    }

    const handleClick = (e) => {
                e.preventDefault();
                setActive(true)
            if (active === true){
                if (name === 'name'){
                    dispatch(authOperations.update({username: inputValue}))
                }
                if (name === 'email'){
                    dispatch(authOperations.update({email: inputValue}))
                    // setActive(false)
                }
                else if (name === 'birthday'){
                    dispatch(authOperations.update({birthday: inputValue}))
                    // setActive(false)
                }
                else if (name === 'phone'){
                    dispatch(authOperations.update({phone: inputValue}))
                    // setActive(false)
                }
                else if (name === 'city'){
                    dispatch(authOperations.update({city: inputValue}))
                    // setActive(false)
                }
                setActive(false)
            }
        }

    return(
        <>
           <UserDataItemWrapper>
                    <UserDataItemLabel htmlFor={name}>{label}</UserDataItemLabel>
                    <UserDataItemInputBtnWrapper>
                        <UserDataItemInput value={inputValue} onChange={handleChange} disabled={!active} type={type} name={name} id={name}/> 
                        <UserDataItemBtn onClick={handleClick}>{!active ? <PensilStyle /> : <CheckMarkStyle />}</UserDataItemBtn>
                    </UserDataItemInputBtnWrapper>                 
            </UserDataItemWrapper>
        </>
    )
}



// import { ReactComponent as Pencil} from '../../images/icons/userData/pencil.svg'
// import { ReactComponent as CheckMark } from '../../images/icons/userData/checkMark.svg'
// import { UserDataItemWrapper, UserDataItemLabel, UserDataItemInputBtnWrapper,
//     UserDataItemInput, UserDataItemBtn } from './UserDataItem.styled'

// export const UserDataItem = ({name, type, value, active}) => {
//     return(
//         <>
//            <UserDataItemWrapper>
//                     <UserDataItemLabel htmlFor={name}>{name}</UserDataItemLabel>
//                     <UserDataItemInputBtnWrapper>
//                         <UserDataItemInput onChange={handleChange} disabled={!active} value={value} type={type} name={name} id={name}/> 
//                         <UserDataItemBtn onClick={handleClick}>{!active ? <Pencil /> : <CheckMark />}</UserDataItemBtn>
//                     </UserDataItemInputBtnWrapper>                 
//             </UserDataItemWrapper>
//         </>
//     )
// }