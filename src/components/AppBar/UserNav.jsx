import { useSelector } from 'react-redux';
import { UserLink } from "./AppBarStyled";
import { FaUserCircle } from 'react-icons/fa';

export const UserNav = () => {

    return (
        <div>
            <UserLink to="/user">User Page</UserLink>
            <p><FaUserCircle /></p>
        </div>
    )
}

