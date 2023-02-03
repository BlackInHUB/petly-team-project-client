import { CommonLink } from "./AppBarStyled";

export const Nav = ({onClick}) => {
    return (
        <div className="nav">
            <CommonLink to="/news" onClick={onClick}>News</CommonLink>
            <CommonLink to="/notices" onClick={onClick}>Find Pet</CommonLink>
            <CommonLink to="/friends" onClick={onClick}>Our friends</CommonLink>
        </div>
    )
}
