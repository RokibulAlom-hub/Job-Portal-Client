import React from 'react';
import userAuth from '../../CustoomHooks/userAuth';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const location = useLocation();
    console.log(location);
    
    const {user,loading} = userAuth();
    if(loading){
        return <span className="loading loading-ball loading-lg"></span>
    }
    if (user){
        return children
    }
    return <Navigate to="/Login" state={location.pathname}></Navigate>
};

export default PrivateRoute;