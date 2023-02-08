import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { authOperations } from '../../../redux/auth'
import { UserDataItemWrapper, UserDataItemLabel, UserDataItemInputBtnWrapper,
    UserDataItemInput, UserDataItemBtn, PensilStyle, CheckMarkStyle } from './UserDataItem.styled'

export const UserDataItem = ({name, label, type, defaultValue}) => {
    const dispatch = useDispatch();
    
    const [inputValue, setInputValue] = useState(defaultValue);
    const [active, setActive] = useState(false)

    const handleChange = (e) => {
        setInputValue(e.currentTarget.value)
    }

    const handleClick = (e) => {
                e.preventDefault();
                setActive(true)
            if (active === true){
                if (name === 'name'){
                    dispatch(authOperations.update({name: inputValue}))
                }
                if (name === 'email'){
                    dispatch(authOperations.update({email: inputValue}))
                }
                else if (name === 'birthday'){
                    dispatch(authOperations.update({birthday: inputValue}))
                }
                else if (name === 'phone'){
                    dispatch(authOperations.update({phone: inputValue}))
                }
                else if (name === 'city'){
                    dispatch(authOperations.update({city: inputValue}))
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
