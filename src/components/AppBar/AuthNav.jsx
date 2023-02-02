import { UserLink } from "./AppBarStyled";

export const AuthNav = () => {
    return (
        <div>
            <UserLink to='/login'>Login</UserLink>
            <UserLink to='/register'>Registration</UserLink>
        </div>
    )
}