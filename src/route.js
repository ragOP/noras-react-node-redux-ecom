import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
// import Cookies from "js-cookie";
import Login from './pages/Login';
import Homepage from './pages/Homepage';
import CreateAccount from "./pages/CreateAccount";

// import Error from "../pages/common/error/index";


function ProtectedRoute({ component: Component, ...rest }) {
    // const isAuthenticated = Cookies.get("token");
    const isAuthenticated = true;

    if (!isAuthenticated) {
        return <Navigate to="/auth/login" replace />;
    }

    return <Component {...rest} />;
}

function AllRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/auth/login' element={<Login />} />
            <Route path='/CreateAccount' element={<CreateAccount/>}/>
            <Route
                path='/homepage'
                element={<ProtectedRoute component={Homepage} />}
            />
           
        </Routes>
    );
}

export default AllRoutes;
