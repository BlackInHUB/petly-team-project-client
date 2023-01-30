import React from 'react';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/selectors';
import { AuthNav } from "./AuthNav";
import { UserNav } from "./UserNav";
import { AppBarWrapper, CommonLink } from "./AppBarStyled";
import Logo from '../../images/petly_logo.svg';

export const AppBar = () => {

    const isLoggedIn = useSelector(getIsLoggedIn);

    return (
        <AppBarWrapper>
            <img src={Logo} alt="PETLY_logo" width="94px" height="32px"/>
            <CommonLink to="/news">News</CommonLink>
            <CommonLink to="/notices">Find Pet</CommonLink>
            <CommonLink to="/friends">Our friends</CommonLink>
            <div>
                {isLoggedIn ? <UserNav /> : <AuthNav /> }
            </div>
        </AppBarWrapper>
    );
}
