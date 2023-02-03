import { CommonLink } from "./AppBarStyled";

export const Nav = ({onClick}) => {
    return (
        <div className="nav">
            <CommonLink className='nav-modal' to="/news" onClick={onClick}>News</CommonLink>
            <CommonLink className='nav-modal' to="/notices" onClick={onClick}>Find Pet</CommonLink>
            <CommonLink className='nav-modal' to="/friends" onClick={onClick}>Our friends</CommonLink>
        </div>
    )
}
