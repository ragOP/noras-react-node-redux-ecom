import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
// import Cookies from "js-cookie";
import Login from './pages/Login';
import Homepage from './pages/Homepage';
import CreateAccount from "./pages/CreateAccount";
import Lamp from "./pages/Lamp";
import ProductPage from "./Components/ProductPage";
import ProductDetail from "./Components/ProductDetail";
import Travel from "./pages/Travel";
import Trips from "./Components/Trips";

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
            <Route path='/ProductPage' element={<ProductPage />} />
            <Route path='/ProductDetail' element={<ProductDetail />} />
            <Route path='/travel' element={<Travel />} />
            <Route path='/trips' element={<Trips />} />
            <Route
                path='/homepage'
                element={<ProtectedRoute component={Homepage} />}
            />
             <Route
                path='/lamp'
                element={<ProtectedRoute component={Lamp} />}
            />
            
           
        </Routes>
    );
}

export default AllRoutes;
