import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth'
// import {ReactComponent as LogoutIcon} from '../../images/icons/logout/logout.svg'
import { LogoutBtn, LogoutBtnText, LogoutIconStyled  } from './Logout.styled'

export const Logout = () => {
    const dispatch = useDispatch();
    
    return(
        <>
        <LogoutBtn onClick={() => dispatch(authOperations.logout())}>
            <LogoutIconStyled  />
            <LogoutBtnText>Log Out</LogoutBtnText>
        </LogoutBtn>
        </>
    )
}