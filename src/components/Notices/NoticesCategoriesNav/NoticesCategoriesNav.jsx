import { NavLink } from "react-router-dom";
import { NoticesCategoriesNavWrapper } from "./NoticesCategoriesNav.Styled";
import { useAuth } from 'hooks/useAuth';
import {NoticeUserNav} from "../NoticeUserNav/NoticeUserNav"

export const NoticesCategoriesNav = () => {
    const { isLoggedIn } = useAuth();
    
    return (
        <NoticesCategoriesNavWrapper>
            <NavLink to='sell'>sell</NavLink>
            <NavLink to='lost-found'>lost-found</NavLink>
            <NavLink to='for-free'>for-free</NavLink>
            {isLoggedIn && <NoticeUserNav />}
        </NoticesCategoriesNavWrapper>
    )
};
