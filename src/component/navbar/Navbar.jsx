import { Link, NavLink, useNavigate } from "react-router-dom";
import { RiMenu2Line } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { useContext, useState, useRef, useEffect } from "react";
import logo from '/logo.png'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MdDarkMode, MdLightMode, MdOutlineLogout } from "react-icons/md";
import { AuthContext } from "../../provider/AuthProvider";
import MainPage from "../../pages/mainpage/MainPage";
import DropDown from "../dropdown/DropDown";
import { IoMdNotifications } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { BASE_URL } from '../../constVariables/constVariable';
import { FaChevronDown } from "react-icons/fa";

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const { isAdmin, user, logOut, darkMode, setDarkMode } = useContext(AuthContext)
    const notify = () => toast.error("User Signed Out!");
    const navigate = useNavigate()
    const [lud, Setlud] = useState(false)

    const dropdownRef = useRef(null);
    const [userdata, Setuserdata] = useState({});
    const [mail, setmail] = useState("");

    const [isPostDropdownOpen, setIsPostDropdownOpen] = useState(false);
    const [isServiceDropdownOpen, setIsServiceDropdownOpen] = useState(false);
    const postDropdownRef = useRef(null);
    const serviceDropdownRef = useRef(null);

    const handleClickOutside = (event) => {
        if (postDropdownRef.current && !postDropdownRef.current.contains(event.target)) {
            setIsPostDropdownOpen(false);
        }
        if (serviceDropdownRef.current && !serviceDropdownRef.current.contains(event.target)) {
            setIsServiceDropdownOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);


    const handleSignOut = () => {
        logOut()
            .then(result => {
                navigate('/')
            })
            .then(notify)
            .catch()
    }

    const links = <>
        <ul className={`xl:flex flex-row gap-2 duration-300 top-16 md:top-[65px] absolute ${darkMode ? 'bg-gray-800' : 'bg-slate-100'} xl:static ${open ? 'left-0' : '-left-80'} p-10 xl:p-0 shadow-lg xl:shadow-none no-underline xl:gap-6 text-base lg:text-lg z-50 font-bold`}>
            <li className="pb-1 xl:pb-0"><NavLink className={'focus:border-b-2 '} to='/'>হোম</NavLink></li>
            {
                user ?
                    <li className="pb-1 xl:pb-0"><NavLink className={'focus:border-b-2'} to='/donor-register'>ডোনার রেজিস্ট্রেশন</NavLink></li>
                    :
                    ""
            }

            {
                user ?
                    <li className="pb-1 xl:pb-0"><NavLink className={'focus:border-b-2'} to='/topdonor'>সর্বোচ্চ রক্তদাতা</NavLink></li>
                    :
                    ""
            }
            {user && (
                <li ref={postDropdownRef} className="relative -mt-1">
                    <button
                        onClick={() => setIsPostDropdownOpen(!isPostDropdownOpen)}
                        className="m-1 bg-transparent cursor-pointer flex items-center"
                    >
                        <FaChevronDown />পোস্ট
                    </button>
                    {isPostDropdownOpen && (
                        <ul className="absolute p-2 shadow menu dropdown-content bg-red-100 text-black z-[50] rounded-box w-52">
                            <li className="text-base lg:text-lg">
                                <Link to='/explore'>সকল পোস্ট</Link>
                            </li>
                            <li className="text-base lg:text-lg">
                                <Link to='/createpost'>পোস্ট করুন</Link>
                            </li>
                        </ul>
                    )}
                </li>
            )}
            {user && (
                <li ref={serviceDropdownRef} className="relative -mt-1">
                    <button
                        onClick={() => setIsServiceDropdownOpen(!isServiceDropdownOpen)}
                        className="m-1 bg-transparent cursor-pointer flex items-center"
                    >
                        <FaChevronDown />জরুরি সেবা
                    </button>
                    {isServiceDropdownOpen && (
                        <ul className="absolute p-2 shadow menu dropdown-content bg-red-100 text-black z-[50] rounded-box w-52">
                            <li className="text-base lg:text-lg">
                                <Link to={`/responsebox/${user.email}`}>পোস্ট রেসপন্স</Link>
                            </li>
                            <li className="text-base lg:text-lg">
                                <Link to={`/requ/${user.email}`}>জরুরি রিকোয়েস্ট</Link>
                            </li>
                        </ul>
                    )}
                </li>
            )}

            {
                isAdmin ?
                    <NavLink to='/dashboard' className={'focus:border-b-2 '}>ড্যাশবোর্ড</NavLink>
                    :
                    ""
            }

            {/* {
                user ?
                    <li>
                        <details  className="dropdown -mt-1 cursor-pointer">
                            <summary className="m-1 bg-transparent">পোস্ট</summary>
                            <ul className="p-2 shadow menu dropdown-content bg-red-100 text-black z-[50] rounded-box w-52">
                                <li className="text-base lg:text-lg"><Link to='/explore'>সকল পোস্ট</Link></li>
                                <li className="text-base lg:text-lg"><Link to='/createpost'>পোস্ট করুন</Link></li>
                            </ul>
                        </details>
                    </li>
                    :
                    ""
            }
                     
                {
                user ?
                    <li>
                        <details  className="dropdown -mt-1 cursor-pointer">
                            <summary  className="m-1 bg-transparent">জরুরি সেবা</summary>
                            <ul className="p-2 shadow menu dropdown-content bg-red-100 text-black z-[50] rounded-box w-52">
                                <li className="text-base lg:text-lg"><Link to={`/responsebox/${user.email}`}>পোস্ট রেসপন্স</Link></li>
                              
                                <li className="text-base lg:text-lg"><Link to={`/requ/${user.email}`}>জরুরি রিকোয়েস্ট</Link></li>
                               
                            </ul>
                        </details>
                    </li>
                    :
                    ""
            } */}

            {
                user ?
                    <li className="mt-8 lg:mt-0 rounded-md lg:hidden focus:border-b-2" onClick={handleSignOut}>Sign Out</li>
                    :
                    <li className="mt-8 lg:mt-0 rounded-md lg:hidden">
                        <NavLink to='/login' className={'focus:border-b-2 '}>লগইন</NavLink>
                    </li>
            }
            {
                user ?
                    ""
                    :
                    <li className="lg:hidden"><NavLink className={'focus:border-b-2 '} to='/register'>রেজিস্টার</NavLink></li>
            }


        </ul>
    </>


    return (
        <nav className="flex items-center px-2 xl:px-4 py-2 xl:py-4 justify-between m-auto text-xl font-medium ">
            <div className="flex items-center xl:hidden">
                <div className="xl:hidden" onClick={() => setOpen(!open)}>
                    {
                        open == true ? <IoMdClose className="text-2xl " /> : <RiMenu2Line className="text-2xl " />
                    }
                </div>

                <div className="logo ml-2 flex gap-2 text-base xl:hidden items-center">
                    <img src={logo} alt="" className="w-[44px] pl-2" />
                    <h2 className="text-xl lg:text-2xl font-extrabold text-red-700">ব্লাড বন্ধু</h2>
                </div>
            </div>

            <div className="logo ml-2 hidden gap-2 xl:flex items-center ">
                <img src={logo} alt="" className="w-12" />
                <h2 className="text-3xl lg:text-4xl font-extrabold text-red-700">ব্লাড বন্ধু</h2>
            </div>


            <div className="flex flex-col lg:gap-8 lg:flex-row items-center">


                <div>
                    {links}
                </div>

                <div className="flex items-center z-10">
                    <div>



                        {
                            user ?
                                <summary className={`btn btn-sm btn-rounded rounded-full border-none ${darkMode ? 'text-white' : 'bg-gray-800'} text-xl lg:text-3xl hover:bg-transparent bg-transparent shadow-none`}><Link to={`/personalmail`}><MdEmail /></Link></summary>

                                : ""
                        }
                        {/* <details className="dropdown cursor-pointer">
                            <summary className="btn btn-sm btn-rounded rounded-full border-none text-xl lg:text-3xl hover:bg-transparent bg-transparent shadow-none"><IoMdNotifications /></summary>
                            <ul className="p-2 shadow menu dropdown-content bg-red-100 text-black z-[50] rounded-box w-52">
                                <li className="text-base lg:text-lg"><Link to='/'>পোস্ট রেসপন্স</Link></li>
                                <li className="text-base lg:text-lg"><Link to='/personalmail'>জরুরি রিকোয়েস্ট</Link></li>
                            </ul>
                        </details> */}
                        {
                            darkMode ?
                                <button className="btn btn-sm lg:btn-md btn-circle btn-ghost border-none text-white text-xl lg:text-3xl shadow-none" onClick={() => setDarkMode(!darkMode)}>
                                    <MdLightMode />
                                </button>

                                :
                                <button className="btn btn-sm lg:btn-md btn-circle btn-ghost border-none text-gray-800 text-xl lg:text-3xl shadow-none" onClick={() => setDarkMode(!darkMode)}>
                                    <MdDarkMode />
                                </button>

                        }


                    </div>
                    <div>
                        {
                            user ?
                                <div className="flex items-center gap-2">
                                    <div className={`flex gap-2 items-center ${darkMode ? 'bg-gray-600' : 'bg-slate-300'} py-1 pl-2 lg:px-2 rounded-full`}>
                                        <h2 className="font-bold text-xs lg:text-base 2xl:text-lg">{user.displayName}</h2>
                                        <img src={user.photoURL} alt="" className="w-8 lg:w-12 h-8 lg:h-12 object-cover object-top rounded-full " />
                                        <div>
                                            <button className={`btn btn-active  hidden btn-circle text-2xl font-extrabold lg:flex ${darkMode ? 'bg-gray-300 text-black' : 'bg-slate-700 text-white'}`} onClick={handleSignOut}><MdOutlineLogout /></button>
                                        </div>
                                    </div>
                                </div>

                                :
                                ""

                        }
                    </div>

                    <div className="hidden lg:flex mr-2">
                        {
                            user ?
                                ""
                                :
                                <button className="btn btn-active btn-ghost rounded-md text-sm lg:text-base">
                                    <Link to='/login'>লগইন</Link>
                                </button>
                        }
                    </div >

                    <div className="hidden lg:flex">
                        {
                            user ?
                                ""
                                :
                                <button className=" btn btn-active btn-ghost rounded-md text-sm lg:text-base" ><Link to='/register'>রেজিস্টার</Link></button>
                        }
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;