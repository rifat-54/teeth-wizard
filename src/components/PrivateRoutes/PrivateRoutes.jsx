import React, { useContext } from 'react';
import { authContex } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const{user,loading}=useContext(authContex)
    const location=useLocation()
    // console.log(location)
    if(loading){
        return <p>Loading ....</p>
    }
    if(!user){
        return <Navigate state={location.pathname} to={'/login'}></Navigate>
    }
    return children;
};

export default PrivateRoutes;