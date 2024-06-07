import { useContext } from "react";
import { ToastContainer } from 'react-toastify';
import { Outlet } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import Navbar from "../../component/navbar/Navbar";
import Footer from "../../component/footer/Footer";

const Root = () => {
    const { darkMode } = useContext(AuthContext)
    return (
        <div className={`text-base lg:text-xl 2xl:text-4xl ${darkMode ? 'bg-gray-800 text-slate-100' : 'bg-slate-100 text-gray-800'} font-raleway`}>
            <div className={` max-w-[3080px] m-auto min-h-screen font-semibold`} >
                <Navbar></Navbar>
                <Outlet></Outlet>
                <ToastContainer></ToastContainer>
                <Footer></Footer>
            </div >
        </div>

    );
};

export default Root;