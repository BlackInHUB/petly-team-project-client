import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { authOperations } from '../../../redux/auth'
import { UserDataItemWrapper, UserDataItemLabel, UserDataItemInputBtnWrapper,
    UserDataItemInput, UserDataItemBtn, PensilStyle, CheckMarkStyle } from './UserDataItem.styled'

export const UserDataItem = ({name, label, type, defaultValue, active, setActive}) => {
    const dispatch = useDispatch();
    
    const [inputValue, setInputValue] = useState(defaultValue);

    const handleChange = (e) => {
        const {name, value} = (e.currentTarget)
        
            if (name === 'name'){
                setInputValue(value)
            }
            if (name === 'email'){
                setInputValue(value)
                
            }
            else if (name === 'birthday'){
                setInputValue(value)
            }
            else if (name === 'phone'){
                setInputValue(value)
            }
            else if (name === 'city'){
                setInputValue(value)
            }
    }

    const handleSubmit = (name) => {
        setActive('')
        dispatch(authOperations.update({[name]: inputValue}))
    }    

    const activeHandleClick = (name) => {
        setActive(name)
    }

    return(
        <>
        <UserDataItemWrapper>
                 <UserDataItemLabel htmlFor={name}>{label}</UserDataItemLabel>
                 <UserDataItemInputBtnWrapper>
                     <UserDataItemInput value={inputValue} onChange={handleChange} active={active === name} disabled={active !== name} type={type} name={name} id={name}/> 

                    {active === name ? 
                        <UserDataItemBtn onClick={() => handleSubmit(name)}><CheckMarkStyle /></UserDataItemBtn> :
                        <UserDataItemBtn onClick={() => activeHandleClick(name)}><PensilStyle /></UserDataItemBtn>
                    }
                    
                 </UserDataItemInputBtnWrapper>                 
         </UserDataItemWrapper>
     </>
    )
}