import {ReactComponent as LogoutIcon} from '../../images/icons/logout/logout.svg'
import { LogoutBtn, LogoutBtnText } from './Logout.styled'

export const Logout = () => {
    return(
        <>
        <LogoutBtn>
            <LogoutIcon />
            <LogoutBtnText>Log Out</LogoutBtnText>
        </LogoutBtn>
        </>
    )
}