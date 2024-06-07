import React, { useContext } from 'react';
import Drawer from '../../component/drawer/Drawer';
import Navbar from '../../component/navbar/Navbar';
import { AuthContext } from '../../provider/AuthProvider';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
    const { darkMode } = useContext(AuthContext)
    return (
        <div className={`text-base lg:text-xl 2xl:text-4xl ${darkMode ? 'bg-gray-800 text-slate-100' : 'bg-slate-100 text-gray-800'} font-raleway`}>
            <div className={` max-w-[3080px] m-auto min-h-screen font-semibold`} >
                <Navbar></Navbar>
                <div className='flex w-full'>
                    <Drawer></Drawer>
                    <div className='w-full'>
                        <h2 className='flex-1 text-center mt-3 text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl'>অ্যাডমিন ড্যাশবোর্ড</h2>
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;