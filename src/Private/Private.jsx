import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate } from 'react-router-dom';
import Loading from '../Components/Loadingt';

const Private = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    if (loading) {
        return<Loading></Loading>
    }
    if (!user||user?.role!=='admin') {
        return <Navigate to={'/'} replace={true}></Navigate>
    }
    return children
};

export default Private;