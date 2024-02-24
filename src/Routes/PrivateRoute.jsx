import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const login = useSelector(state=>state.login);
    console.log(login,"private route")
    const isAuth = useSelector(state=>state.login.isAuth);
    return (
        isAuth ? children : <Navigate to='/login'/>
    )
}

export default PrivateRoute
