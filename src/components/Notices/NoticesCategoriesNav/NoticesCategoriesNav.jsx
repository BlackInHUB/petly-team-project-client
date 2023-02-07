import { NavLink } from "react-router-dom";
import { NoticesCategoriesNavWrapper } from "./NoticesCategoriesNav.Styled";
import { useAuth } from 'hooks/useAuth';

export const NoticesCategoriesNav = () => {
    const { isLoggedIn } = useAuth();
    
    return (
        <NoticesCategoriesNavWrapper>
            <NavLink to='sell'>sell</NavLink>
            <NavLink to='lost-found'>lost-found</NavLink>
            <NavLink to='for-free'>for-free</NavLink>
            {isLoggedIn && <NavLink to='favorite-ads'>favorite ads</NavLink>}
            {isLoggedIn && <NavLink to='my-ads'>my ads</NavLink>}
        </NoticesCategoriesNavWrapper>
    )
};
