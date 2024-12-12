import React from 'react';
import userAuth from '../../CustoomHooks/userAuth';

const PrivateRoute = ({children}) => {
    const {user,loading} = userAuth
    if(loading){
        return <span className="loading loading-ball loading-lg"></span>
    }
    if (user){
        return children
    }
};

export default PrivateRoute;