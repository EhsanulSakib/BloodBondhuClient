import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const AdminRouter = ({ children }) => {
    const { user, loading, isAdmin, adminLoading } = useContext(AuthContext)
    const location = useLocation()
    console.log({ user, isAdmin })

    if (loading || adminLoading) {
        return <div className="h-screen flex items-center justify-center z-10"><h1 className="loading loading-ring loading-lg text-red-400 text-5xl"></h1></div>
    }

    if (user && isAdmin) {
        return children
    }

    return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default AdminRouter;