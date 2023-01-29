import React from 'react';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/selectors';
import { AuthNav } from "./AuthNav";
import { UserNav } from "./UserNav";
import { AppBarWrapper, CommonLink } from "./AppBarStyled";

export const AppBar = () => {

    const isLoggedIn = useSelector(getIsLoggedIn);

    return (
        <AppBarWrapper>
            <img src="../../images/petly_logo.png" alt="PETLY" />
            <CommonLink to="/" end>Home</CommonLink>
            <CommonLink to="/news">News</CommonLink>
            <CommonLink to="/notices">Find Pet</CommonLink>
            <CommonLink to="/friends">Our friends</CommonLink>
            <div>
                {isLoggedIn ? <UserNav /> : <AuthNav /> }
            </div>
        </AppBarWrapper>
    );
}