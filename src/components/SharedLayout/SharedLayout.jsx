import { Outlet } from 'react-router-dom';
import { Suspense } from "react";
import { Loader } from '../Loader/Loader';
import { AppBar }  from '../AppBar/AppBar';

export const SharedLayout = () => {
    return (
        <div>
            <AppBar />
            <Suspense fallback={<Loader />}>
                <Outlet />
            </Suspense>
        </div>
    );
};
