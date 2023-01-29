import { getUser } from 'redux/selectors';
import { useSelector } from 'react-redux';
import { UserLink } from "./AppBarStyled";
import { FaUserCircle } from 'react-icons/fa';

export const UserNav = () => {

    const data = useSelector(getUser);

    return (
        <div>
            <UserLink to="/user">User Page</UserLink>
            <p><FaUserCircle />{`${data.name}`}</p>
        </div>
    )
}

