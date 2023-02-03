import { UserLink } from "./AppBarStyled";

export const AuthNav = ({onClick}) => {
    return (
        <div>
            <UserLink to='/login' onClick={onClick}>Login</UserLink>
            <UserLink to='/register' onClick={onClick}>Registration</UserLink>
        </div>
    )
}