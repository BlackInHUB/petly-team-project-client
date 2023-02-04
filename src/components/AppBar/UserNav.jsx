import { UserLink } from "./AppBarStyled";
import { FaUserCircle } from 'react-icons/fa';
import { authSelectors } from "../../redux/auth/index";
import { useSelector } from 'react-redux';

export const UserNav = ({onClick}) => {

const user = useSelector(authSelectors.getUser);

    return (
        <div>
            <UserLink to="/user" onClick={onClick}><FaUserCircle /> {`${user.email}`}</UserLink>
        </div>
    )
}