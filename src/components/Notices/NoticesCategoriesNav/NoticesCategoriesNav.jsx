import { NavLink } from "react-router-dom";
import {NoticesCategoriesNavWrapper} from "./NoticesCategoriesNav.Styled"

export const NoticesCategoriesNav = () => {
    return (
        <NoticesCategoriesNavWrapper>
            <NavLink to='sell'>sell</NavLink>
            <NavLink to='lost-found'>lost-found</NavLink>
            <NavLink to='for-free'>for-free</NavLink>
        </NoticesCategoriesNavWrapper>
    )
};
