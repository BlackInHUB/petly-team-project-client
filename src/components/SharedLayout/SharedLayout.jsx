import { Outlet } from 'react-router-dom';
import { Suspense } from "react";
import { Loader } from '../Loader/Loader';
import { AppBar } from '../AppBar/AppBar';
import { SharedLayoutStyled } from "./SharedLayoutStyled"

export const SharedLayout = () => {
    return (
        <SharedLayoutStyled>
            <AppBar />
            <Suspense fallback={<Loader />}>
                <Outlet />
            </Suspense>
        </SharedLayoutStyled>
    );
};
