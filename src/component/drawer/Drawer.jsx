import React, { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { RiArchiveDrawerFill } from "react-icons/ri";
import { NavLink } from 'react-router-dom';
const Drawer = () => {
    const { darkMode, setDarkMode } = useContext(AuthContext)
    return (
        <div className={`relative h-screen`}>
            <div className={`drawer lg:drawer-open `}>
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-start justify-start">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-2" className="btn drawer-button text-xl lg:hidden bg-transparent border-none hover:bg-transparent "> <RiArchiveDrawerFill /></label>

                </div>
                <div className={`drawer-side z-10 top-16`}>
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay bg-black"></label>
                    <ul className={`menu p-4 w-72 min-h-full text-lg lg:text-xl gap-4 bg-gradient-to-r text-white from-red-800 to-red-400 z-10`}>
                        <NavLink className="border ml-4 mt-4 p-2 border-white hover:bg-white hover:text-gray-800" to='/dashboard/all-user'><button className=' rounded-sm'>ব্যবহারকারীদের লিস্ট</button></NavLink>
                        <NavLink className="border ml-4 mt-4 p-2 border-white hover:bg-white hover:text-gray-800" to='/dashboard/explore'><button className=' rounded-sm'>সকল পোস্ট</button></NavLink>
                    </ul>

                </div>
            </div>
        </div >
    );
};

export default Drawer;