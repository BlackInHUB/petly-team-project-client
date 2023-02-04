import { UserLink } from "./AppBarStyled";
import { FaUserCircle } from 'react-icons/fa';
import { useAuth } from "hooks/useAuth";

export const UserNav = ({onClick}) => {

const {user} = useAuth();

    return (
        <div>
            <UserLink to="/user" onClick={onClick}><FaUserCircle /> {`${user.name}`}</UserLink>
        </div>
    )
}

