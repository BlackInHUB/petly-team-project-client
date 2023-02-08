import { NavLink } from "react-router-dom"

export const NoticeUserNav = () => {
    return (
        <>
            <NavLink to='favorite-ads'>favorite ads</NavLink>
            <NavLink to='my-ads'>my ads</NavLink>
        </>
    )
}