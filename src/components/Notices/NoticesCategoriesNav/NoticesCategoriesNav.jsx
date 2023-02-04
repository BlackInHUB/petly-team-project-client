import { NavLink } from "react-router-dom";

export const NoticesCategoriesNav = () => {
    return (
        <>
            <NavLink to='sell'>sell</NavLink>
            <NavLink to='lost-found'>lost-found</NavLink>
            <NavLink to='for-free'>for-free</NavLink>
        </>
    )
};
