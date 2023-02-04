import { UserLink } from "./AppBarStyled";
// import { FaUserCircle } from 'react-icons/fa';
import { useAuth } from "hooks/useAuth";

export const UserNav = ({onClick}) => {

const {user} = useAuth();

    return (
        <div>
            <UserLink to="/user" onClick={onClick}> <img src={user.avatarUrl} alt="&#129399" width="28" height="28" /> {`${user.name}`}</UserLink>
        </div>
    )
}

