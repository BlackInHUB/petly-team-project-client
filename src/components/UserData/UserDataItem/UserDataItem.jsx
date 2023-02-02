import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { authOperations } from '../../../redux/auth'
import { ReactComponent as Pencil} from '../../../images/icons/userData/pencil.svg'
import { ReactComponent as CheckMark } from '../../../images/icons/userData/checkMark.svg'
import { UserDataItemWrapper, UserDataItemLabel, UserDataItemInputBtnWrapper,
    UserDataItemInput, UserDataItemBtn } from './UserDataItem.styled'

export const UserDataItem = ({name, type, defaultValue}) => {
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState(defaultValue);
    const [active, setActive] = useState(false)
    


    const handleChange = (e) => {
        const {name, value} = e.currentTarget
        setInputValue(e.currentTarget.value)
        console.log('name', name)
        console.log('value', value)


        // if (name === 'name'){
        //     setInputValue(value)
        // }
        // if (name === 'email'){
        //     setInputValue(value)
        // }
        // if (name === 'birthday'){
        //     setInputValue(value)
        // }
        // if (name === 'phone'){
        //     setInputValue(value)
        // }
        // if (name === 'city'){
        //     setInputValue(value)
        // }
    };

    // const handleClick = () => {
    //     setActive(true)
    // if (active === true){
    //     const data = {
    //         name: inputValue,
    //       };
       
    //     console.log("data", data)
    //     dispatch(authOperations.update({name, data}))
    //     setActive(false)
    // }
    // }

    const handleClick = (e) => {
                e.preventDefault();
                setActive(true)
            if (active === true){
                // const data = {
                //     name: searchLine,
                //   };
               
                // console.log("data", data)
                // dispatch(authOperations.update({[name]: inputValue}))
                // if (name === 'name'){
                //     dispatch(authOperations.update({username: inputValue}))
                // }
                if (name === 'email'){
                    dispatch(authOperations.update({email: inputValue}))
                    setActive(false)
                }
                else if (name === 'birthday'){
                    dispatch(authOperations.update({birthday: inputValue}))
                    setActive(false)
                }
                else if (name === 'phone'){
                    dispatch(authOperations.update({phone: inputValue}))
                    setActive(false)
                }
                else if (name === 'city'){
                    dispatch(authOperations.update({city: inputValue}))
                    setActive(false)
                }


                // setActive(false)
            }
        }

    return(
        <>
           <UserDataItemWrapper>
                    <UserDataItemLabel htmlFor={name}>{name}</UserDataItemLabel>
                    <UserDataItemInputBtnWrapper>
                        <UserDataItemInput value={inputValue} onChange={handleChange} disabled={!active} type={type} name={name} id={name}/> 
                        <UserDataItemBtn onClick={handleClick}>{!active ? <Pencil /> : <CheckMark />}</UserDataItemBtn>
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